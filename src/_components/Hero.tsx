import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { FaReact, FaNodeJs, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiTypescript, SiTailwindcss } from "react-icons/si";
import profileImg from "../assets/profile.jpg";
const HeroSection: React.FC = () => {
  const textRef = useRef<HTMLHeadingElement>(null);
  const subTextRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const shapeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const iconsRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      textRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    )
      .fromTo(
        subTextRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1.2, delay: 0.2, ease: "power3.out" }
      )
      .fromTo(
        buttonRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1, delay: 0.2, ease: "back.out(1.7)" }
      )
      .fromTo(
        profileRef.current,
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 1.2, ease: "elastic.out(1, 0.5)" }
      );

    shapeRefs.current.forEach((shape, index) => {
      if (shape) {
        gsap.fromTo(
          shape,
          { opacity: 0, scale: 0 },
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            delay: index * 0.2,
            ease: "elastic.out(1, 0.3)",
          }
        );
      }
    });

    iconsRefs.current.forEach((icon, index) => {
      if (icon) {
        gsap.fromTo(
          icon,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            delay: 0.8 + index * 0.1,
            ease: "power3.out",
          }
        );
      }
    });
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-[#0a0a0a] text-white text-center px-6 overflow-hidden">
      {/* Background Animated Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none max-md:hidden">
        {[
          "top-10 left-10",
          "top-1/2 right-16",
          "bottom-20 left-32",
          "bottom-5 right-24",
        ].map((position, index) => (
          <div
            key={index}
            ref={(el) => (shapeRefs.current[index] = el)}
            className={`absolute ${position} w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full animate-pulse`}
          ></div>
        ))}
      </div>

      {/* Profile Image */}
      <div
        ref={profileRef}
        className="relative w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-purple-500 shadow-lg transition-transform transform hover:scale-110"
      >
        <img
          src={profileImg}
          alt="Karthikeyan"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Hero Content */}
      <h1 ref={textRef} className="mt-6 text-5xl font-extrabold md:text-7xl">
        Hi, I'm Karthikeyan 👨‍💻
      </h1>
      <p ref={subTextRef} className="mt-4 text-lg text-gray-400 max-w-lg">
        A passionate Software Developer crafting seamless digital experiences
        with modern technology.
      </p>
      <Button
        ref={buttonRef}
        className="mt-6 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 hover:opacity-80 transition-all text-lg rounded-xl shadow-md"
      >
        Explore My Work 🚀
      </Button>

      {/* Background Floating Tech Icons */}
      <div className="absolute bottom-10 flex gap-6">
        {[
          FaReact,
          FaNodeJs,
          SiTypescript,
          SiTailwindcss,
          FaGithub,
          FaLinkedin,
        ].map((Icon, index) => (
          <div
            key={index}
            ref={(el) => (iconsRefs.current[index] = el)}
            className="text-4xl md:text-5xl text-gray-500 hover:text-white transition transform hover:scale-110"
          >
            <Icon />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
