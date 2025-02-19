import React, { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaCuttlefish,
  FaPaintBrush,
  FaBrain,
  FaRobot,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  {
    name: "HTML",
    percentage: 85,
    icon: <FaHtml5 className="text-orange-500 text-5xl" />,
    description:
      "Strong understanding of HTML for structuring web pages effectively.",
  },
  {
    name: "CSS",
    percentage: 80,
    icon: <FaCss3Alt className="text-blue-500 text-5xl" />,
    description: "Expert in CSS for creating dynamic and responsive designs.",
  },
  {
    name: "JavaScript",
    percentage: 80,
    icon: <FaJs className="text-yellow-400 text-5xl" />,
    description:
      "Experience with JavaScript for interactive and dynamic web elements.",
  },
  {
    name: "Python",
    percentage: 65,
    icon: <FaPython className="text-blue-400 text-5xl" />,
    description:
      "Proficient in Python for web applications and backend development.",
  },
  {
    name: "C Programming",
    percentage: 65,
    icon: <FaCuttlefish className="text-green-500 text-5xl" />,
    description: "Strong foundation in C programming for computational logic.",
  },
  {
    name: "UI/UX",
    percentage: 50,
    icon: <FaPaintBrush className="text-pink-500 text-5xl" />,
    description:
      "Designing intuitive user interfaces with a focus on user experience.",
  },
  {
    name: "AI",
    percentage: 40,
    icon: <FaBrain className="text-purple-500 text-5xl" />,
    description:
      "Exploring AI for building intelligent and automated solutions.",
  },
  {
    name: "ML",
    percentage: 10,
    icon: <FaRobot className="text-gray-400 text-5xl" />,
    description:
      "Basic knowledge of machine learning models and training data.",
  },
];

const Skills = () => {
  const skillsRef = useRef(null);
  const particleRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      skillsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    particleRefs.current.forEach((particle) => {
      if (particle) {
        gsap.to(particle, {
          x: `+=${Math.random() * 40 - 20}`,
          y: `+=${Math.random() * 40 - 20}`,
          duration: 3 + Math.random() * 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: Math.random() * 2,
        });
      }
    });
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] overflow-hidden py-16 px-8">
      {/* Particle Effects */}
      {[...Array(30)].map((_, i) => (
        <div
          key={`particle-${i}`}
          ref={(el) => el && (particleRefs.current[i] = el)}
          className="absolute w-1 h-1 rounded-full bg-white opacity-50"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Section Heading */}
      <div className="relative z-10 text-center">
        <h1 className="text-6xl font-extrabold text-violet-400 mb-4">Skills</h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Here are the technologies and programming languages I specialize in.
        </p>
      </div>

      {/* Skills Cards */}
      <div
        ref={skillsRef}
        className="flex flex-wrap justify-center gap-10 mt-12"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="w-96 h-72 bg-white/10 backdrop-blur-lg shadow-xl border border-white/20 rounded-3xl transform transition-transform hover:scale-[1.05] hover:shadow-2xl hover:shadow-purple-500/30 relative">
              <CardContent className="p-6 flex flex-col justify-between items-center text-center">
                <div className="mb-4">{skill.icon}</div>
                <h2 className="text-2xl font-semibold text-white">
                  {skill.name}
                </h2>
                <p className="text-gray-300 text-sm">{skill.description}</p>
                <div className="relative w-full h-3 bg-gray-700 rounded-md mt-3">
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: `${skill.percentage}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="absolute h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-md"
                  ></motion.div>
                </div>
                <span className="text-gray-300 text-sm mt-1">
                  {skill.percentage}%
                </span>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
