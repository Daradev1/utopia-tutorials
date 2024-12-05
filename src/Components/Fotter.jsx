import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaTelegram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#e5e4db] text-gray-600 py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-lg font-semibold mb-4">Stay Connected</h2>
        <ul className="flex justify-center space-x-8 mb-6">
          <li>
            <a
              href="https://t.me/utopiatutorial_ng"
              className="hover:text-primaryPurple transition gap-1 flex text-sm decoration-none"
              aria-label="Facebook"
              target="_blank"
            >
              <FaTelegram className="text-2xl" /> Telegram channel
            </a>
          </li>
          <li>
          <a
              href=" https://whatsapp.com/channel/0029VaeVj0qKgsNksxKKqF0c"
              className="hover:text-primaryPurple transition gap-1 flex text-sm decoration-none"
              aria-label="Facebook"
              target="_blank"
            >
              <FaWhatsapp className="text-2xl" /> Whatsapp Channel
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=61553396266455&mibextid=ZbWKwL"
              className="hover:text-primaryPurple transition  gap-1 flex text-sm decoration-none"
              aria-label="Instagram"
              target="_blank"
            >
              <FaFacebook className="text-2xl" /> Facebook Channel
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
