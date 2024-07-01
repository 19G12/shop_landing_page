import Image from "next/image";
import { useState, useEffect } from "react";

export default function Intro() {
  const [style, setStyle] = useState(false);

  useEffect(() => {
    if (style) {
      window.addEventListener("mousedown", () => setStyle(false));
    } else {
      window.removeEventListener("mousedown", () => setStyle(false));
    }
    return () => window.removeEventListener("mousedown", () => setStyle(false));
  }, [style, setStyle]);

  return (
    <div className="w-full h-full relative">
      <div className="w-full flex flex-row justify-between items-center bg-transparent absolute top-0 left-0 z-10">
        <div className="hidden md:flex lg:basis-1/5 md:basis-2/5 basis-1/3 text-center flex flex-row justify-evenly py-4 ml-3 text-lg text-[#a3b18a]">
          <div className="w-1/5 text-center">
            <a href="#">Home</a>
          </div>
          <div className="w-1/5 text-center">
            <span>/</span>
          </div>
          <div className="w-1/5 text-center">
            <a href="#">Variants</a>
          </div>
          <div className="w-1/5 text-center">
            <span>/</span>
          </div>
          <div className="w-1/5 text-center">
            <a href="#">About</a>
          </div>
        </div>
        <div className="flex md:hidden lg:basis-1/5 md:basis-2/5 basis-1/3 py-4 ml-3 relative">
          <div
            onClick={() => setStyle(true)}
            className="w-6 h-6 border-y-2 border-solid border-[#a3b18a] before:border-solid before:w-6 before:border-[#a3b18a] before:content-[''] before:absolute before:h-1/2 before:top-1/2 before:left-3 before:z-10 before:border-t-2 "
          ></div>
          <div
            className="hidden w-full min-h-full bg-[#fff] absolute top-0 left-0 z-20 flex-col transition-all duration-150	ease-in-out"
            style={{ display: style ? "flex" : "none" }}
          >
            <div className="w-full p-4 text-center text-lg hover:shadow-[inset_-12px_-8px_40px_#46464620]">
              <a href="#">Home</a>
            </div>
            <div className="w-full p-4 text-center text-lg hover:shadow-[inset_-12px_-8px_40px_#46464620]">
              <a href="#">Variants</a>
            </div>
            <div className="w-full p-4 text-center text-lg hover:shadow-[inset_-12px_-8px_40px_#46464620]">
              <a href="#">About</a>
            </div>
          </div>
        </div>
        <div className="md:w-3/4 basis-1/3 text-center">
          <div className="w-14 overflow-hidden m-auto p-2">
            <Image
              src="https://cdn.shopify.com/s/files/1/0700/5339/6764/files/half_B-5f008a6c1658.png?v=1672982810"
              alt="half_b"
              width={50}
              height={50}
              className="w-full"
            />
          </div>
        </div>
        <div className="lg:basis-1/5 md:basis-2/5 basis-1/3 overflow-hidden flex flex-row justify-center text-[#a3b18a] hover:text-[#fff]">
          <button className="text-center p-2 w-2/4 rounded-full border-2 border-solid border-[#a3b18a] hover:bg-[#344e41]">
            shop
          </button>
        </div>
      </div>
      <div className="relative w-full h-full font-black text-9xl overflow-hidden">
        <video
          autoPlay={true}
          muted={true}
          loop={true}
          preload={"true"}
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-athlete-working-out-with-heavy-ropes-in-the-gym-23141-large.mp4" />
        </video>
        <div className="h-full w-full absolute left-0 whitespace-wrap">
          <div className="uppercase text-[12vh] sm:text-[22vh] md:text-[24vh] lg:text-[26vh] w-full h-full flex flex-col justify-center items-center bg-[#0C356A] mix-blend-screen">
            <span className="w-full md:text-left">Made</span>
            <span className="w-full md:text-center">for</span>
            <span className="w-full md:text-right">more.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
