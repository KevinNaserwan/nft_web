import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Popular from "@/components/Popular";
import { categoryNfts, navItems, Nfts, socialItems } from "@/data";
import Image from "next/image";

export default function Home() {
  return (
    <main
      id="main"
      className=" relative flex flex-col justify-center items-center mx-auto px-5"
    >
      <div className=" max-w-7xl w-full">
        <Navbar navItems={navItems} />
        <Hero socialItems={socialItems} />
        <Popular categoryNfts={categoryNfts} Nfts={Nfts} />
      </div>
    </main>
  );
}
