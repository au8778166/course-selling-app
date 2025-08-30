import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { z } from "zod";
import config from "../config.js";
import { Purchase } from "../models/purchase.model.js";
import { Course } from "../models/course.model.js";

/* ---------------------------- Validation Schemas ---------------------------- */
const userSchema = z.object({
  firstName: z.string().min(3, { message: "First name must be at least 3 chars long" }),
  lastName: z.string().min(3, { message: "Last name must be at least 3 chars long" }),
  email: z.string().email(),
  password: z.string().min(6, { message: "Password must be at least 6 chars long" }),
});

/* ---------------------------- SIGNUP ---------------------------- */
export const signup = async (req, res) => {
  const validatedData = userSchema.safeParse(req.body);
  if (!validatedData.success) {
    return res
      .status(400)
      .json({ errors: validatedData.error.issues.map((err) => err.message) });
  }

  const { firstName, lastName, email, password } = validatedData.data;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ errors: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: "Signup succeeded", user: newUser });
  } catch (error) {
    console.error("Error in signup:", error);
    res.status(500).json({ errors: "Error in signup" });
  }
};

/* ---------------------------- LOGIN ---------------------------- */
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(403).json({ errors: "Invalid credentials" });
    }

    // Validate password
    if (!password || password.length === 0) {
      return res.status(400).json({ errors: "Password is required" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(403).json({ errors: "Invalid credentials" });
    }

    // Generate JWT
    const token = jwt.sign(
      { id: user._id },
      config.JWT_USER_PASSWORD,
      { expiresIn: "1d" }
    );

    const cookieOptions = {
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 1 day
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", 
      sameSite: "Strict",
    };

    res.cookie("jwt", token, cookieOptions);
    res.status(200).json({ message: "Login successful", user, token });
  } catch (error) {
    console.error("Error in login:", error);
    res.status(500).json({ errors: "Error in login" });
  }
};

/* ---------------------------- LOGOUT ---------------------------- */
export const logout = (req, res) => {
  try {
    res.clearCookie("jwt");
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.error("Error in logout:", error);
    res.status(500).json({ errors: "Error in logout" });
  }
};

/* ---------------------------- PURCHASES ---------------------------- */
export const purchases = async (req, res) => {
  const userId = req.userId; // make sure you set req.userId from JWT middleware

  try {
    const purchased = await Purchase.find({ userId });
    const purchasedCourseIds = purchased.map((p) => p.courseId);

    const courseData = await Course.find({
      _id: { $in: purchasedCourseIds },
    });

    res.status(200).json({ purchased, courseData });
  } catch (error) {
    console.error("Error in purchases:", error);
    res.status(500).json({ errors: "Error in purchases" });
  }
};
