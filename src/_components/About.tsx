import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import aboutImg from "../assets/developer.jpg";
import { FiArrowRight, FiDownload } from "react-icons/fi";
import resumeFile from "../assets/karthi.pdf";

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const imageRef = useRef<HTMLDivElement>(null);
  const shapeRefs = useRef<HTMLDivElement[]>([]);
  const particleRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Image parallax effect
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { y: 100 },
        {
          y: -100,
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        }
      );
    }

    // Floating shapes animation
    shapeRefs.current.forEach((shape, i) => {
      gsap.to(shape, {
        y: i % 2 === 0 ? 60 : -50,
        x: i % 2 === 0 ? 30 : -30,
        duration: 6 + i,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    });

    // Particle animation
    particleRefs.current.forEach((particle) => {
      gsap.to(particle, {
        y: Math.random() * 100 - 50,
        x: Math.random() * 80 - 40,
        rotation: Math.random() * 360,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });
  }, []);

  // Motion Variants
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  return (
    <motion.section
      className="min-h-screen flex items-center justify-center p-8 relative overflow-hidden bg-gradient-to-br from-white via-gray-100 to-violet-50"
      initial="hidden"
      animate="visible"
      id="about"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-10 bg-[linear-gradient(to_right,#d3d3d3_1px,transparent_1px),linear-gradient(to_bottom,#d3d3d3_1px,transparent_1px)] [background-size:40px_40px] animate-grid-pan" />

      {/* Particle Effects */}
      {[...Array(30)].map((_, i) => (
        <div
          key={`particle-${i}`}
          ref={(el) => el && (particleRefs.current[i] = el)}
          className="absolute w-1 h-1 rounded-full bg-white"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Floating Shapes */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          ref={(el) => el && (shapeRefs.current[i] = el)}
          className={`absolute w-48 h-48 rounded-full blur-lg opacity-20 ${
            i % 2 === 0
              ? "bg-gradient-to-r from-violet-400 to-purple-500"
              : "bg-gradient-to-r from-violet-400 to-purple-500"
          }`}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 80}%`,
          }}
        />
      ))}

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
        {/* Image Section */}
        <div ref={imageRef} className="relative">
          <motion.div
            className="relative h-72 md:h-[500px] rounded-[2rem] max-md:mt-20 overflow-hidden border-2 border-gray-200 shadow-lg group"
            whileHover={{ rotate: 2, scale: 1.02 }}
          >
            <motion.img
              src={aboutImg}
              alt="John Wesley"
              className="absolute h-full w-full object-cover object-center grayscale-[20%] hover:grayscale-0 transition-all duration-500"
              whileHover={{ scale: 1.05 }}
            />
          </motion.div>
        </div>

        {/* Content Section */}
        <motion.div
          className="space-y-8 text-gray-700 bg-white/80 p-8 rounded-xl border border-gray-200 shadow-md"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          ref={ref}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent"
            variants={textVariants}
          >
            About Me
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl leading-relaxed"
            variants={textVariants}
          >
            Hi there! I'm <strong>Karthikeyan</strong>, an aspiring Machine
            Learning Engineer with a deep passion for AI-driven innovations,
            Natural Language Processing (NLP), and Deep Learning. My journey in
            technology revolves around developing intelligent systems that
            analyze complex datasets and create impactful solutions to
            real-world challenges.
          </motion.p>
          <motion.p
            className="text-lg md:text-xl leading-relaxed"
            variants={textVariants}
          >
            My expertise includes{" "}
            <strong>Python, TensorFlow, and Hugging Face Transformers</strong>.
            I have built various projects, including Twitter Sentiment Analysis,
            Fake News Detection, and chatbots using{" "}
            <strong>Natural Language Processing</strong>.
          </motion.p>
          <motion.p
            className="text-lg md:text-xl leading-relaxed"
            variants={textVariants}
          >
            Beyond technical development, I am passionate about making AI
            accessible and scalable for businesses and individuals. Whether it's
            deploying AI solutions, refining machine learning pipelines, or
            researching the latest AI trends, I am dedicated to continuous
            learning and innovation.
          </motion.p>
          <motion.div className="flex gap-4 flex-wrap" variants={textVariants}>
            <motion.a
              href={resumeFile}
              download
              className="px-6 py-3 bg-violet-500 hover:bg-violet-400 text-white font-semibold rounded-lg shadow-lg flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <FiDownload />
              Download Resume
            </motion.a>
            <motion.a
              href="#contact"
              className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-violet-600 font-semibold rounded-lg shadow-sm flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              Get in Touch
              <FiArrowRight />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
