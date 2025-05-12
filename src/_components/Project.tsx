import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Microblogging Sentiment Analysis",
    description:
      "This project uses advanced NLP techniques and deep learning models like BERT to perform real-time sentiment analysis on microblogging posts, classifying sentiments into positive, negative, or neutral, and visualizing trends for business insights",
    techStack: [
      "Twitter API",
      "Python",
      "BERT / RoBERTa",
      "TensorFlow",
      "Scikit-learn",
      "NLTK / SpaCy",
      "Streamlit",
    ],
    image: "https://i.ytimg.com/vi/ujId4ipkBio/maxresdefault.jpg",
    github: "https://github.com/karthikeyan-2023/Microblogging-sentiment-analysis",
  },
  {
    title: "SkyTicket: Airline Ticket Management System",
    description:
      "SkyTicket is a comprehensive Airline Ticket Management System that streamlines flight booking, scheduling, and passenger management through an efficient web-based interface",
    techStack: [
      "Java Swing",
      "Java",
      "MySQL",
      "JDBC",
      "NetBeans",
      "Seaborn",
    ],
    image:
      "https://theairlineproject.net/Images/LogoWithCondenseEdited.png",
    github:
      "https://github.com/karthikeyan-2023/Airline-project/blob/main/README.md",
  },
  {
    title: "Chatbot Development Using Gamma LLM",
    description:
      "This project focuses on building a conversational AI chatbot using the Gamma LLM model. The chatbot is capable of understanding and responding to user queries with high accuracy. It leverages Natural Language Processing (NLP) techniques, fine-tuned language models, and a streamlined deployment process.",
    techStack: [
      "Python",
      "Gamma LLM",
      "Hugging Face",
      "Transformers",
      "Flask",
      "Streamlit",
    ],
    image:
      "https://cdn.analyticsvidhya.com/wp-content/uploads/2024/08/kmjnhtbgrvfaqz-02-scaled.webp",
    github:
      "https://github.com/karthikeyan-2023/chatbot-with-gemma-llama-model",
  },
  {
    title: "PoseShift.AI: Advanced Pose Generation and Action Analysis System",
    description:
      "PoseShift.AI is an advanced AI system that combines OpenPose, RunwayML, and LLMs to generate realistic 2D/3D human poses, predict actions, and provide natural language feedback for pose analysis",
    techStack: [
      "OpenPose",
      "RunwayML",
      "Hugging Face",
      "GANs",
      "LLM",
      "gRADIO",
    ],
    image:
      "https://cdn.analyticsvidhya.com/wp-content/uploads/2022/01/65603fig-67bc4bba7b7dc.webp",
    github:
      "https://huggingface.co/spaces/karthi12334r5/pose-generator-space/tree/main",
  },
  {
    title: "Fake News Detection Model Using LSTM",
    description:
      "This project utilizes Long Short-Term Memory (LSTM) networks and word embeddings to detect fake news articles. It processes textual data, extracts meaningful features, and classifies news as real or fake using deep learning techniques.",
    techStack: [
      "Python",
      "TensorFlow",
      "Keras",
      "LSTM",
      "Word Embeddings",
      "NLTK",
    ],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxBJ3AkE1zg3ZwSTb_n0_HtqDuxkkrPmFu2A&s",
    github: "https://github.com/karthikeyan-2023/fakenews-with-LSTM",
  },
  {
    title: "Interactive PDF Chat Application",
    description:
      "This project enables interactive conversations with PDF documents using pretrained language models. It extracts and processes text from PDFs, allowing users to ask questions and receive relevant responses. The system leverages Retrieval-Augmented Generation (RAG) for improved accuracy.",
    techStack: [
      "Python",
      "DeepSeek LLM",
      "LangChain",
      "PyPDF2",
      "FAISS",
      "Streamlit",
    ],
    image:
      "https://dlsdc.com/wp-content/uploads/2024/02/1685538597643-600x400.jpeg",
    github: "https://github.com/karthikeyan-2023/rag-with-deepseek",
  },
];

const Project: React.FC = () => {
  return (
    <div
      className="relative min-h-screen bg-white overflow-hidden py-16 px-8 flex flex-col items-center"
      id="projects"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-20 w-48 h-48 bg-blue-300 opacity-30 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-64 h-64 bg-purple-400 opacity-40 blur-3xl rounded-full animate-pulse"></div>
      </div>

      {/* Section Header */}
      <div className="relative z-10 text-center">
        <h1 className="text-6xl font-extrabold text-blue-800 mb-4">Projects</h1>
        <p className="text-gray-600 text-lg max-w-2xl">
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
            className="group relative"
          >
            <Card className="bg-white shadow-xl rounded-xl overflow-hidden transform transition-all duration-500 hover:shadow-2xl hover:rotate-1">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transform group-hover:scale-105 transition duration-300"
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
                  className="mt-3 inline-flex items-center bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300  w-full justify-center"
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
