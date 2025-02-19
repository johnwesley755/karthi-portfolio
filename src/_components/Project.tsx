import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Vutiria - Virtual Try-On",
    description: "AI-powered virtual try-on solution for e-commerce.",
    techStack: ["React", "Tailwind", "Firebase", "Python"],
    image: "/images/vutiria.png",
    github: "https://github.com/JohnWesley/vutiria",
  },
  {
    title: "SideGig - Freelancing Platform",
    description: "A platform connecting freelancers with businesses.",
    techStack: ["Next.js", "Node.js", "MongoDB", "Framer Motion"],
    image: "/images/sidegig.png",
    github: "https://github.com/JohnWesley/sidegig",
  },
  {
    title: "AI Chatbot for HR Support",
    description:
      "NLP-based chatbot for handling HR queries and document analysis.",
    techStack: ["Python", "TensorFlow", "React", "Express"],
    image: "/images/hr-chatbot.png",
    github: "https://github.com/JohnWesley/hr-chatbot",
  },
];

const Project: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gray-100 overflow-hidden py-16 px-8">
      <div className="absolute inset-0 z-0 opacity-10 bg-[linear-gradient(to_right,#d3d3d3_1px,transparent_1px),linear-gradient(to_bottom,#d3d3d3_1px,transparent_1px)] [background-size:40px_40px] animate-grid-pan" />
      {/* Background Shapes */}

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-20 w-40 h-40 bg-gradient-to-br from-blue-400 to-purple-500 opacity-30 blur-3xl rounded-full"></div>
        <div className="absolute bottom-20 right-32 w-56 h-56 bg-gradient-to-tr from-indigo-400 to-pink-500 opacity-30 blur-3xl rounded-full"></div>
        <div className="absolute top-1/3 left-1/2 w-32 h-32 bg-gradient-to-bl from-teal-400 to-green-500 opacity-30 blur-3xl rounded-full"></div>
      </div>

      {/* Section Header */}
      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">Projects</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          A collection of my latest projects showcasing my expertise in
          frontend, backend, and AI solutions.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="relative z-10 grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <Card className="bg-white/80 backdrop-blur-md shadow-xl rounded-2xl overflow-hidden transform transition-transform border border-gray-200">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-2xl"
              />
              <CardHeader className="px-6 pt-4">
                <h2 className="text-2xl font-semibold text-gray-800">
                  {project.title}
                </h2>
              </CardHeader>
              <CardContent className="px-6 pb-4 flex flex-col gap-4">
                <p className="text-gray-600 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gray-200 text-gray-700 px-3 py-1 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="px-6 pb-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-500 hover:text-blue-700"
                >
                  <FaGithub className="mr-2" /> GitHub
                </a>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Project;
