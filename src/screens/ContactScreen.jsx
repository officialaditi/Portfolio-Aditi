import React from "react";
import { FaGithub } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
const ContactScreen = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="text-center bg-white p-8 rounded-lg shadow-2xl transform transition-all hover:scale-105">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Let's Connect!
        </h1>

        {/* Click-to-Email Button */}
        <a
          href="mailto:gaikwadaditi002@gmail.com"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-110"
        >
          📧 Email Me
        </a>
      </div>
    </div>
  );
};

export default ContactScreen;
