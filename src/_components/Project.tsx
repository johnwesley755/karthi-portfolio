import React from "react";
import { Card, CardContent } from "@/components/ui/card";
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
  {
    title: "Digital Gram Panchayat",
    description: "A web-based system for managing rural governance.",
    techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    image: "/images/dgp.png",
    github: "https://github.com/JohnWesley/digital-gram-panchayat",
  },
  {
    title: "Mental Health Assessment AI",
    description:
      "AI-driven system analyzing speech & text for early detection of mental health issues.",
    techStack: ["Python", "Flask", "ML", "React"],
    image: "/images/mental-health-ai.png",
    github: "https://github.com/JohnWesley/mental-health-ai",
  },
];

const Project: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gray-100 overflow-hidden py-16 px-8">
      {/* Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-20 w-40 h-40 bg-blue-300 opacity-30 blur-3xl rounded-full"></div>
        <div className="absolute bottom-10 right-20 w-56 h-56 bg-purple-300 opacity-30 blur-3xl rounded-full"></div>
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
            <Card className="bg-white shadow-xl rounded-lg overflow-hidden transform transition-transform">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6 flex flex-col gap-4">
                <h2 className="text-2xl font-semibold text-gray-800">
                  {project.title}
                </h2>
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
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center text-blue-500 hover:text-blue-700"
                >
                  <FaGithub className="mr-2" /> GitHub
                </a>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Project;
