import Image from "next/image";
import React from "react";

const Grid = () => {
  return (
    <div className=" flex flex-col justify-center items-center pt-16">
      <div className=" grid grid-cols-3  grid-flow-row gap-4">
        <div className="">
          <Image src="/image/category1.png" width={300} height={300} alt="" />
        </div>
        <div className=" col-span-2 flex justify-end">
          <Image src="/image/category2.png" width={600} height={300} alt="" />
        </div>
      </div>
      <div className=" grid grid-cols-3  grid-flow-row gap-4 pt-7">
        <div className="  col-span-2">
          <Image src="/image/category3.png" width={600} height={300} alt="" />
        </div>
        <div className="">
          <Image src="/image/category4.png" width={300} height={300} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Grid;
