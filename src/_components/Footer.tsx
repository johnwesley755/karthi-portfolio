import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer
      className="relative bg-gray-900 text-gray-300 py-12 px-6 md:px-16"
      id="contact"
    >
      {/* Floating Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-20 w-40 h-40 bg-blue-500 opacity-20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-10 right-20 w-56 h-56 bg-purple-500 opacity-20 blur-3xl rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
        {/* Brand Name */}
        <div>
          <h2 className="text-2xl font-extrabold text-white">Karthikeyan</h2>
          <p className="text-gray-400 mt-2">
            AI Developer | Full-Stack Enthusiast | Innovator
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Quick Links</h2>
          <ul className="space-y-2">
            {[
              { name: "Home", id: "home" },
              { name: "About", id: "about" },
              { name: "Projects", id: "projects" },
              { name: "Contact", id: "contact" },
            ].map(({ name, id }, index) => (
              <motion.a
                key={index}
                href={`#${id}`}
                whileHover={{ x: 5, scale: 1.05 }}
                className="cursor-pointer hover:text-white transition duration-200 block"
              >
                {name}
              </motion.a>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Contact</h2>
          <p>Email: karthikeyanvsp2005@gmail.com</p>
          <p>Location: Chennai, India</p>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Follow Me</h2>
          <div className="flex space-x-4">
            {[
              { icon: FaGithub, link: "https://github.com/karthikeyan-2023" },
              {
                icon: FaLinkedin,
                link: "https://www.linkedin.com/in/karthikeyan-p-18a3062a1/",
              },
              {
                icon: FaTwitter,
                link: "https://x.com/PKarthi41362650?t=nlLiZeN8fgbLw0piBbIuyg&s=08",
              },
            ].map(({ icon: Icon, link }, index) => (
              <motion.a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="text-gray-400 hover:text-white text-2xl transition-transform"
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Animated Divider */}
      <motion.div
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 1, width: "100%" }}
        transition={{ duration: 1 }}
        className="relative z-10 h-px bg-gray-700 my-8"
      ></motion.div>

      {/* Bottom Section */}
      <div className="relative z-10 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Karthikeyan. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
