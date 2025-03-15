import { Link } from "react-router-dom";
import { AiFillLinkedin, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="flex items-center justify-between px-6 md:px-10 py-4">
        {/* Logo */}
        <div>
          <Link to="/">
            <h1 className="font-playfair text-4xl md:text-5xl">Aditi</h1>
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:text-3xl md:flex items-center gap-10 text-xl">
          <Link to="/work" className="hover:text-gray-600 transition">Work</Link>
          <Link to="/contact" className="hover:text-gray-600 transition">Contact Me</Link>
        </div>

        {/* Social Links */}
        <div className="hidden md:flex items-center gap-5 text-3xl">
          <Link to="https://www.linkedin.com/in/aditi-gaikwad-1a3954210/" target="_blank" className="text-blue-500 hover:opacity-80 transition">
            <AiFillLinkedin />
          </Link>
          <Link to="https://github.com/officialaditi" target="_blank" className="text-gray-700 hover:opacity-80 transition">
            <FaGithub />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-3xl focus:outline-none">
          {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-5 bg-white shadow-lg py-5 text-2xl">
          <Link to="/work" className="hover:text-gray-600 transition" onClick={() => setMenuOpen(false)}>Work</Link>
          <Link to="/contact" className="hover:text-gray-600 transition" onClick={() => setMenuOpen(false)}>Contact</Link>
          <div className="flex gap-5 text-3xl mt-3">
            <Link to="https://www.linkedin.com/in/aditi-gaikwad-1a3954210/" target="_blank" className="text-blue-500 hover:opacity-80 transition">
              <AiFillLinkedin />
            </Link>
            <Link to="https://github.com/officialaditi" target="_blank" className="text-gray-700 hover:opacity-80 transition">
              <FaGithub />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
