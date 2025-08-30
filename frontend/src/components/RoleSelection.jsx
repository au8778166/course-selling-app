import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const RoleSelection = () => {
  const navigate = useNavigate();
  const { type } = useParams(); // type = "login" or "signup"

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-black to-blue-950 text-white">
      <h2 className="text-2xl font-bold mb-6">
        {type === "signup" ? "Sign Up As:" : "Login As:"}
      </h2>
      <div className="flex gap-6">
        <button
          onClick={() =>
            navigate(type === "signup" ? "/admin/signup" : "/admin/login")
          }
          className="bg-orange-500 px-6 py-3 rounded-md hover:bg-blue-600 transition"
        >
          Teacher
        </button>
        <button
          onClick={() => navigate(type === "signup" ? "/signup" : "/login")}
          className="bg-green-500 px-6 py-3 rounded-md hover:bg-blue-600 transition"
        >
          Student
        </button>
      </div>
    </div>
  );
};

export default RoleSelection;
