import { useState } from "react";
import { FaAlignJustify, FaTimes } from "react-icons/fa";
import { FcContacts, FcIdea } from "react-icons/fc";
import { Link } from "react-router-dom";

const Header = () => {
  const [show, setShow] = useState(false);
  const toggleHandler = () => {
    setShow(!show);
  };

  return (
    <>
      <header className="bg-[#1F2530] shadow-2xl  text-[#ABB2BF] font-mono p-4 fixed w-full top-0 left-0 z-[9999]">
        <div className="flex items-center justify-between flex-wrap font-mono text-2xl">
          <div>
            <Link to="/">Aditi Gaikwad</Link>
          </div>
          <nav className="space-x-4 hidden md:flex items-center justify-center">
            <div className="flex items-center justify-center gap-3">
              <FcIdea />
              <Link to="/projects">Projects</Link>
            </div>
            <div className="flex items-center justify-center gap-3">
              <FcContacts />
              <Link to="/contact">Contact</Link>
            </div>
          </nav>
          <div className="md:hidden text-2xl cursor-pointer" onClick={toggleHandler}>
            {show ? <FaTimes /> : <FaAlignJustify />}
          </div>
        </div>

        {/* Mobile Navigation */}
        {show ? (
          <nav className="md:hidden flex flex-col items-center space-y-4 mt-4">
            <div className="flex items-center text-xl justify-center gap-3">
              <FcIdea />
              <Link to="/projects">Projects</Link>
            </div>
            <div className="flex items-center text-xl justify-center gap-3">
              <FcContacts />
              <Link to="/contact">Contact</Link>
            </div>
          </nav>
        ) : null}
      </header>
    </>
  );
};

export default Header;
