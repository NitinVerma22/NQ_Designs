"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import MobileNav from "./MobileNav";
import FreeConsultationModal from "./FreeConsultationModal";
const navItems = [
  { name: "Home", path: "/" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Contact Us", path: "/contact" },
];


export default function Header() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <header className=" sticky absolute top-0 left-0 w-full h-20 z-50 bg-gradient-to-b from-white/80 via-white/40 to-transparent backdrop-blur-md shadow-sm">
      <div className="flex items-center justify-between h-full max-w-7xl mx-auto px-4 md:px-8">

        {/* Left: Logo + Company Name */}
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="flex items-center space-x-3"
        >
          <Image
            src="/images/logo.png"
            alt="NQ Designs Logo"
            width={40}
            height={40}
            className="rounded-full shadow-md"
          />
          <span className="text-xl md:text-2xl font-bold tracking-wide text-yellow-800  font-serif">
            NQ Designs
          </span>
        </motion.div>

        {/* Center: Nav Links */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="hidden md:flex space-x-8 text-md font-medium text-yellow-800"
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="hover:text-blue-600 transition duration-200"
            >
              {item.name}
            </Link>
          ))}
        </motion.nav>

        {/* Right: Consultation Button & Mobile Nav */}
     
<div className="flex items-center space-x-4">
  <button
    onClick={() => setModalOpen(true)}
    className="md:inline-block px-5 py-2 bg-yellow-800 text-white rounded-full text-sm font-semibold hover:bg-yellow-600 transition"
  >
    <span className="hidden md:inline">Free Consultation</span>
    <span className="inline md:hidden">Consult</span>
  </button>


  {/* ✅ Free Consultation Modal */}
  <FreeConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
</div>

      </div>
    </header>
  );
}
