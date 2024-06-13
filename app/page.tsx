import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { navItems, socialItems } from "@/data";
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
      </div>
    </main>
  );
}
