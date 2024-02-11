import React from "react";
import Socials from "./Socials";
import MobileNav from "./MobileNav";

import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <header className=" fixed w-full px-[30px] lg:px-[100px] h-[80px] lg:h-[100px] z-30 flex items-center">
        <div className="flex flex-col lg:flex-row w-full  lg:items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <img
              src="header/logo.svg"
              alt=""
              className="h-20 w-20 lg:h-36 lg:w-36 "
            />
          </Link>
          <nav className="hidden lg:flex gap-x-12 font-semibold font-primary text-primary">
            <Link to="/" className="link">
              Home
            </Link>
            <Link to="/about" className="link">
              About
            </Link>
            <Link to="/portfolio" className="link">
              Portfolio
            </Link>
            <Link to="/contact" className="link">
              Contact
            </Link>
          </nav>
        </div>
        {/* Socials */}
        <Socials />
        {/* MobileNav */}
        <MobileNav />
      </header>
    </div>
  );
}

export default Header;
