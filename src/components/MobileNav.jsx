import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { CgMenuRight } from "react-icons/cg";

import { Link } from "react-router-dom";

import { motion } from "framer-motion";

const MenuVariants = {
  hidden: {
    x: "100%",
  },
  show: {
    x: 0,
    transition: {
      ease: [0.6, 0.1, -0.05, 0.09],
    },
  },
};

function MobileNav() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav className="lg:hidden text-primary ">
      <div
        onClick={() => setOpenMenu(true)}
        className="text-3xl cursor-pointer"
      >
        <CgMenuRight />
      </div>
      <motion.div
        variants={MenuVariants}
        initial="hidden"
        animate={openMenu ? "show" : ""}
        className="bg-white shadow-2xl w-full h-screen absolute top-0 right-0 z-20 max-w-xs"
      >
        <div
          onClick={() => setOpenMenu(false)}
          className="text-4xl absolute top-14 left-4 cursor-pointer z-30 text-primary "
        >
          <IoMdClose />
        </div>
        <nav className="h-full flex flex-col justify-center  items-center gap-y-8 text-3xl font-bold list-none text-primary font-primary">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
        </nav>
        menu
      </motion.div>
    </nav>
  );
}

export default MobileNav;
