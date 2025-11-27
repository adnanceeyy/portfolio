import { IconMenu3, IconXboxX } from "@tabler/icons-react";
import React, { useState, useRef } from "react";
import gsap from "gsap";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const sidebarRef = useRef(null);

  const openMenu = () => {
    setOpen(true);
    gsap.to(sidebarRef.current, {
      x: 0,
      duration: 0.8,
      ease: "power3.out",
    });
    gsap.fromTo(
      ".baner h4",
      {
        opacity: 0,
        y:-50,
        x:50,
      },
      {
        x: 0,
        y:0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.1,
      }
    );
  };

  const closeMenu = () => {
    gsap.to(sidebarRef.current, {
      x: "100%",
      duration: 0.8,
      ease: "power3.inOut",
      onComplete: () => setOpen(false),
    });
  };

  return (
    <>
      <div className="fixed z-10 w-[90%] md:w-[70%] text-white h-10 md:h-20 bg-[#5757574f] backdrop-blur-xs flex items-center justify-between px-3 md:px-6 border border-gray-200/20 border-0.5 rounded-[50px] top-0 left-1/2 transform -translate-x-1/2 mt-2 md:mt-6">
        <h1 className="md:text-[40px] text-[22px] font-semibold leading-tight">Portfolio</h1>

        <>
          <IconMenu3
            size={45}
            className="hidden md:block cursor-none"
            onClick={openMenu}
          />
          <IconMenu3
            size={30}
            className="block md:hidden cursor-none"
            onClick={openMenu}
          />
        </>
      </div>

      <div
        ref={sidebarRef}
        style={{ transform: "translateX(100%)" }}
        className={`flex justify-center items-center fixed z-20 h-screen border-l border-[#b4b4b45d] w-[80%] md:w-[30%] bg-[#1d1d1d52] backdrop-blur-xs right-0 top-0`}
      >
        {" "}
        <IconXboxX
          size={50}
          className="absolute right-0 md:right-7 top-0 m-5 md:m-10 cursor-pointer opacity-70 text-white"
          onClick={closeMenu}
        />
        <div className="baner text-5xl md:text-7xl font-bold flex flex-col justify-center items-center gap-4 md:gap-10 uppercase relative">
          <h4 className="w-full text-center py-1 md:py-4 cursor-pointer text-white opacity-70 hover:opacity-100 hover:text-violet-200 duration-300 transition">
            Home
          </h4>
          <h4 className="w-full text-center py-1 md:py-4 cursor-pointer text-white opacity-70 hover:opacity-100 hover:text-violet-200 duration-300 transition">
            About
          </h4>
          <h4 className="w-full text-center py-1 md:py-4 cursor-pointer text-white opacity-70 hover:opacity-100 hover:text-violet-200 duration-300 transition">
            Projects
          </h4>
          <h4 className="w-full text-center py-1 md:py-4 cursor-pointer text-white opacity-70 hover:opacity-100 hover:text-violet-200 duration-300 transition">
            Skills
          </h4>
          <h4 className="w-full text-center py-1 md:py-4 cursor-pointer text-white opacity-70 hover:opacity-100 hover:text-violet-200 duration-300 transition">
            Contact
          </h4>
        </div>
      </div>
    </>
  );
}
