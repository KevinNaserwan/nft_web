"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { GlareCard } from "./ui/GlareCard";
import MagicButton from "./ui/MagicButton";

const Popular = ({
  categoryNfts,
  Nfts,
}: {
  categoryNfts: { name: string }[];
  Nfts: {
    name: string;
    price: string;
    star: number;
    image: string;
    like: boolean;
  }[];
}) => {
  return (
    <div
      id="allnft"
      className=" flex flex-col justify-center items-center py-24"
    >
      <motion.div
        className=" flex flex-row gap-3"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className=" italic text-blue-color font-light text-[40px]">
          Most Popular
        </h2>
        <h2 className=" text-white font-black text-[40px]">NFTs</h2>
      </motion.div>
      <motion.div
        className=" grid grid-cols-4 gap-20 pt-8 pb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {categoryNfts.map((categoryNft: any, idx: number) => (
          <div className=" relative w-[10vw]">
            <Link
              key={`link=${idx}`}
              href=""
              className=" block text-white font-light text-[20px] text-center relative z-10"
            >
              {categoryNft.name}
            </Link>
            <Image
              src="/image/active.png"
              alt=""
              className=" absolute z-0 mx-auto -top-1"
              width={160}
              height={60}
            ></Image>
          </div>
        ))}
      </motion.div>
      <motion.div className=" grid grid-cols-3 grid-flow-row gap-8">
        {Nfts.map((Nft: any, idx: number) => (
          <motion.div whileHover={{ scale: 1.05 }}>
            <GlareCard>
              <div className=" flex flex-col p-8" key={`link=${idx}`}>
                <Image src={Nft.image} width={340} height={100} alt=""></Image>
                <div className=" flex flex-col py-8">
                  <div className=" flex flex-row justify-between pb-2">
                    <h2 className=" text-base font-semibold text-white">
                      {Nft.name}
                    </h2>
                    <div className=" flex flex-row items-center gap-2">
                      <Image
                        src="/image/eth.png"
                        width={20}
                        height={20}
                        alt=""
                      ></Image>
                      <p className=" text-base font-semibold text-white">
                        {Nft.price}
                      </p>
                    </div>
                  </div>
                  <div className=" flex flex-row gap-2">
                    {[...Array(Nft.star)].map((_, idx) => (
                      <Image
                        key={idx}
                        src="/star.png"
                        width={16}
                        height={16}
                        alt=""
                      ></Image>
                    ))}
                  </div>
                </div>
                <MagicButton
                  title="Buy Product"
                  otherClasses="bg-border-color text-white z-10"
                />
              </div>
            </GlareCard>
          </motion.div>
        ))}
      </motion.div>
      <MagicButton
        title="Explore All Nfts"
        otherClasses="bg-[linear-gradient(110deg,#000103,45%,#252047,55%,#000103)] text-slate-400 mt-16 "
      />
    </div>
  );
};

export default Popular;
