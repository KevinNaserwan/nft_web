import Image from "next/image";
import React from "react";

const Unique = ({
  uniqueFiles,
}: {
  uniqueFiles: { title: string; image: string; desc: string }[];
}) => {
  return (
    <div className=" flex flex-col justify-center items-center py-24">
      <div className=" flex flex-col justify-center items-center pb-16">
        <h1 className=" text-xl font-bold text-white px-4 py-2 rounded-[36px] bg-blue-color">
          Unique Files
        </h1>
        <h2 className=" font-black text-white text-[40px] pt-6">
          How to{" "}
          <span className=" font-extralight italic text-blue-color">
            Create & Sell
          </span>{" "}
          Your NFT Files.
        </h2>
      </div>
      <div className=" grid grid-cols-2 grid-flow-row gap-16">
        {uniqueFiles.map((uniqueFile: any, idx: number) => (
          <div
            className=" relative bg-[#0D0D2D] rounded-xl"
            key={`link=${idx}`}
          >
            <div className=" py-12 px-12">
              <h3 className=" font-semibold text-[22px] text-white">
                {uniqueFile.title}
              </h3>
              <p className=" font-normal text-xl text-white/60 pt-6">
                {uniqueFile.desc}
              </p>
            </div>
            <div className=" absolute -top-10 bg-[#04011c] rounded-xl -right-3">
              <Image
                src={uniqueFile.image}
                alt=""
                width={72}
                height={72}
                className=" m-6"
              ></Image>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Unique;
