import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#e5e4db] text-gray-600 py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-lg font-semibold mb-4">Stay Connected</h2>
        <ul className="flex justify-center space-x-8 mb-6">
          <li>
            <a
              href="#"
              className="hover:text-primaryPurple transition"
              aria-label="Facebook"
            >
              <FaFacebook className="text-2xl" />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-primaryPurple transition"
              aria-label="Twitter"
            >
              <FaTwitter className="text-2xl" />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-primaryPurple transition"
              aria-label="Instagram"
            >
              <FaInstagram className="text-2xl" />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-primaryPurple transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-2xl" />
            </a>
          </li>
        </ul>
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Utopia Tutorials. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
