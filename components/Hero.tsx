"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import MagicButton from "./ui/MagicButton";
import { useInView } from "react-intersection-observer";

interface SocialItem {
  name: string;
  count: string;
}

interface HeroProps {
  socialItems: SocialItem[];
}

const Hero: React.FC<HeroProps> = ({ socialItems }) => {
  return (
    <div className="flex flex-row justify-between items-center py-24">
      <div className="">
        <motion.div
          className="font-black text-[56px] text-white w-[33vw] text-left"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          Buy, Create &
        </motion.div>
        <motion.div
          className="font-black text-[56px] text-white w-[40vw] text-left"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          Sell{" "}
          <span className="italic font-extralight text-blue-color text-[56px]">
            Unique NFTs
          </span>{" "}
          File.
        </motion.div>
        <motion.p
          className="font-normal text-white/70 text-xl w-[35vw] pt-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          NFTs are used for digital art and collectibles, GameFi projects,
          metaverses, and more.
          <Image
            src="/image/varnish.svg"
            alt=""
            width={84}
            height={84}
            className=" relative z-20 top-[10%] left-[100%]"
          ></Image>
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <MagicButton
            title="Explore NFTs"
            otherClasses="bg-border-color text-white"
          />
        </motion.div>
        <div className="w-[60vw] flex flex-col pt-52">
          <motion.div
            className="flex flex-row gap-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
          >
            <Image src="/image/eye.png" alt="" width={48} height={48} />
            <h2 className="font-bold text-[32px] text-white">
              Kevin NFT Marketplace Overview
            </h2>
          </motion.div>
          <motion.div
            className="grid grid-cols-4 gap-16 pt-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
          >
            {socialItems.map((socialItem, idx) => (
              <CountUpItem
                key={idx}
                name={socialItem.name}
                count={socialItem.count}
              />
            ))}
          </motion.div>
        </div>
      </div>
      <CountUpImage />
    </div>
  );
};

const CountUpItem: React.FC<{ name: string; count: string }> = ({
  name,
  count,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger animation once
    threshold: 0.1, // Trigger animation when 50% of the element is in view
  });

  return (
    <div ref={ref} className="text-white flex flex-col">
      <p className="font-normal text-xl text-white/60">{name}</p>
      {inView && <AnimatedCount count={parseFloat(count.replace(",", ""))} />}
    </div>
  );
};

const AnimatedCount: React.FC<{ count: number }> = ({ count }) => {
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number;
    const duration = 2500;

    const animateCount = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setDisplayCount(Math.floor(count * progress));
      if (progress < 1) requestAnimationFrame(animateCount);
    };

    requestAnimationFrame(animateCount);
  }, [count]);

  return (
    <h1 className="font-bold text-[32px]">
      {displayCount.toLocaleString()}
      <span className="pl-2">+</span>
    </h1>
  );
};

const CountUpImage: React.FC = () => {
  return (
    <motion.div
      className="absolute right-0 top-[1%]"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.7 }}
    >
      <Image src="/image/union.png" alt="" width={800} height={800} />
      <div className=" bg-[#07003E] absolute z-20 top-[48%] left-[20%] rounded-full text-white p-8 w-[11vw] border border-border-color text-center font-bold text-2xl">
        Cyber Samurai #177
      </div>
    </motion.div>
  );
};

export default Hero;
