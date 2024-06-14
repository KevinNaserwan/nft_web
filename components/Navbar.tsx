"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import MagicButton from "./ui/MagicButton";

const Navbar = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
  }[];
  className?: string;
}) => {
  return (
    <motion.div
      className=" flex flex-row justify-between items-center pb-24 pt-9"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <h2 className=" font-bold text-[28px] bg-clip-text logo">KNFT.</h2>
      <div className=" flex flex-row gap-[45px]">
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className=" font-normal text-unactive-color"
          >
            <span className="text-sm !cursor-pointer">{navItem.name}</span>
          </Link>
        ))}
      </div>
      <MagicButton
        title="Get in Touch"
        otherClasses="bg-[linear-gradient(110deg,#000103,45%,#252047,55%,#000103)] text-slate-400 "
      />
    </motion.div>
  );
};

export default Navbar;
