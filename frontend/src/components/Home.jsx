import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import axios from "axios";
import Slider from "react-slick";
import toast from "react-hot-toast";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BACKEND_URL } from "../utils/utils";

function Home() {
  const [courses, setCourses] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check login
  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user);
  }, []);

  // Fetch courses
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/course/courses`, {
          withCredentials: true,
        });
        setCourses(response.data.courses || []);
      } catch (error) {
        console.log("Error fetching courses: ", error);
        toast.error("Failed to load courses");
      }
    };
    fetchCourses();
  }, []);

  // Logout
  const handleLogout = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/user/logout`, {
        withCredentials: true,
      });
      localStorage.removeItem("user");
      setIsLoggedIn(false);
      toast.success(response.data.message);
    } catch (error) {
      console.log("Error logging out: ", error);
      toast.error(error.response?.data?.errors || "Error logging out");
    }
  };

  // Slider settings
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="bg-gradient-to-r from-black to-blue-950 min-h-screen text-white">
      {/* Header */}
      <header className="flex items-center justify-between p-6 container mx-auto">
        <div className="flex items-center space-x-2">
          <Link to="/">
            <img
              src="/logo.webp"
              alt="Logo"
              className="w-7 h-7 md:w-10 md:h-10 rounded-full cursor-pointer"
            />
          </Link>
          <h1 className="md:text-2xl text-orange-500 font-bold">CourseHaven</h1>
        </div>

        <div className="space-x-4">
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-transparent text-white text-xs md:text-lg md:py-2 md:px-4 p-2 border border-white rounded"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/select-role/login"
                className="bg-transparent text-white text-xs md:text-lg md:py-2 md:px-4 p-2 border border-white rounded"
              >
                Login
              </Link>
              <Link
                to="/select-role/signup"
                className="bg-transparent text-white text-xs md:text-lg md:py-2 md:px-4 p-2 border border-white rounded"
              >
                Signup
              </Link>
            </>
          )}
        </div>
      </header>

      {/* Main Hero Section */}
      <section className="text-center py-20 container mx-auto">
        <h1 className="text-4xl font-semibold text-orange-500">CourseHaven</h1>
        <p className="text-gray-400 mt-4">
          Sharpen your skills with courses crafted by experts.
        </p>
        <div className="space-x-4 mt-8">
          <Link
            to="/courses"
            className="bg-green-500 text-white p-2 md:py-3 md:px-6 rounded font-semibold hover:bg-white duration-300 hover:text-black"
          >
            Explore courses
          </Link>
          <Link
            to="https://www.youtube.com/@abhishekupadhyay6853"
            className="bg-white text-black p-2 md:py-3 md:px-6 rounded font-semibold hover:bg-green-500 duration-300 hover:text-white"
          >
            Courses videos
          </Link>
        </div>
      </section>

      {/* Courses Slider */}
      <section className="p-10 container mx-auto">
        <Slider {...settings}>
          {courses.map((course) => (
            <div key={course._id} className="p-4">
              <div className="bg-gray-900 rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
                <img
                  className="h-32 w-full object-contain"
                  src={course.image?.url}
                  alt={course.title}
                />
                <div className="p-6 text-center">
                  <h2 className="text-xl font-bold text-white">{course.title}</h2>
                  <Link
                    to={`/buy/${course._id}`}
                    className="mt-4 inline-block bg-orange-500 text-white py-2 px-4 rounded-full hover:bg-blue-500 duration-300"
                  >
                    Enroll Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* Footer */}
      <footer className="my-12 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-2">
              <img src="/logo.webp" alt="" className="w-10 h-10 rounded-full" />
              <h1 className="text-2xl text-orange-500 font-bold">CourseHaven</h1>
            </div>
            <div className="mt-3">
              <p className="mb-2">Follow us</p>
              <div className="flex space-x-4">
                <FaFacebook className="text-2xl hover:text-blue-400 duration-300" />
                <FaInstagram className="text-2xl hover:text-pink-600 duration-300" />
                <FaTwitter className="text-2xl hover:text-blue-600 duration-300" />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center mt-6 md:mt-0">
            <h3 className="text-lg font-semibold mb-2">Connects</h3>
            <ul className="space-y-2 text-gray-400 text-center">
              <li className="hover:text-white cursor-pointer duration-300">YouTube - Learn Coding</li>
              <li className="hover:text-white cursor-pointer duration-300">Telegram - Learn Coding</li>
              <li className="hover:text-white cursor-pointer duration-300">Github - Learn Coding</li>
            </ul>
          </div>

          <div className="flex flex-col items-center mt-6 md:mt-0">
            <h3 className="text-lg font-semibold mb-4">
              Copyright &#169; 2024
            </h3>
            <ul className="space-y-2 text-gray-400 text-center">
              <li className="hover:text-white cursor-pointer duration-300">Terms & Conditions</li>
              <li className="hover:text-white cursor-pointer duration-300">Privacy Policy</li>
              <li className="hover:text-white cursor-pointer duration-300">Refund & Cancellation</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
