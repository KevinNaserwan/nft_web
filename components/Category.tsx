"use client";

import React from "react";
import { motion } from "framer-motion";
import Grid from "./ui/Grid";
import MagicButton from "./ui/MagicButton";
import Image from "next/image";

const Category = () => {
  return (
    <div className=" flex flex-col justify-center items-center py-24">
      <motion.div
        className=" flex flex-col justify-center w-[40vw]"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className=" font-black text-white text-[40px] text-center">
          <span className=" italic font-extralight text-blue-color">
            Browse by
          </span>{" "}
          Category
        </h1>
        <p className=" text-center text-white/70 pt-6 font-normal text-[20px] ">
          Set a secondary sales fee and add social links, a description, profile
          and banner images, and a description.
        </p>
      </motion.div>
      <Grid />
      <MagicButton
        title="Explore Nfts Categorys"
        otherClasses="bg-[linear-gradient(110deg,#000103,45%,#252047,55%,#000103)] text-slate-400 mt-16 "
      />
      <div className=" grid grid-cols-6 grid-flow-row items-center gap-12 py-32">
        <div>
          <Image src="/logo/logo1.svg" alt="" width={70} height={48} />
        </div>
        <div>
          <Image src="/logo/logo2.svg" alt="" width={152} height={44} />
        </div>
        <div>
          <Image src="/logo/logo3.svg" alt="" width={160} height={64} />
        </div>
        <div>
          <Image src="/logo/logo4.svg" alt="" width={162} height={64} />
        </div>
        <div>
          <Image src="/logo/logo5.svg" alt="" width={68} height={64} />
        </div>
        <div>
          <Image src="/logo/logo6.svg" alt="" width={127} height={44} />
        </div>
      </div>
      <div className=" grid grid-cols-2 grid-flow-row gap-[72px]">
        <div>
          <Image src="/image/newspaper.svg" width={78} height={64} alt="" />
          <h1 className=" text-white font-black text-[40px] w-[22vw]">
            <span className=" italic font-extralight text-blue-color">
              Trending
            </span>{" "}
            Crypto Market News
          </h1>
          <p className=" font-normal text-white/70 w-[30vw] text-left pt-6 pb-16">
            Set a secondary sales fee and add social links, a description,
            profile and banner images, and a description.
          </p>
          <MagicButton
            title="Explore NFTs"
            otherClasses="bg-border-color text-white"
          />
        </div>
        <div className=" grid grid-cols-2 grid-flow-row gap-8"></div>
      </div>
    </div>
  );
};

export default Category;
