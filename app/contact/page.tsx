"use client";

import React from "react";
import { motion } from "framer-motion";
import FreeConsultationModal from "../components/FreeConsultationModal";
import MobileNav from "../components/MobileNav";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ContactPage() {
  const [modalOpen, setModalOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-[#ede7e3]">
      <Header />

      {/* Hero Section */}
      <div className="relative h-130">
        <video
          src="https://res.cloudinary.com/dqk43sqxo/video/upload/v1748429501/du1pvt4amagc3hrwsa6t.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-opacity-60 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white text-4xl md:text-5xl font-bold"
          >
            Let’s Start Your Dream Space
          </motion.h1>
        </div>
      </div>

      {/* Contact Info & CTA (No Form) */}
      <section className="py-16 px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
        >
          <h2 className="text-3xl font-semibold mb-4 text-yellow-600">Get In Touch</h2>
          <p className="text-gray-600 mb-6">
            We’d love to hear about your project or answer any questions you have.
          </p>

          <div className="space-y-4 text-gray-700 text-base">
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-primary" />
              <span>Near Riviera Phase II Gomati Nagar  Extension , Lucknow, India</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-primary" />
              <span>+91 7800714729</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-primary" />
              <span>nqdesigns87@gmail.com</span>
            </div>
          </div>

          <div className="flex gap-5 pt-6">
            <a href="https://www.instagram.com/_nqdesigns?igsh=MWozNjNzcjhxeTdteA%3D%3D" className="text-xl text-gray-700 hover:text-black transition transform hover:scale-110">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/nqdesigns.lucknow?rdid=pZYEkQn3l8BTFA4c&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Kkqms4D8p%2F#" className="text-xl text-gray-700 hover:text-black transition transform hover:scale-110">
              <FaFacebook />
            </a>
            {/* <a href="#" className="text-xl text-gray-700 hover:text-black transition transform hover:scale-110">
              <FaLinkedin />
            </a> */}
          </div>
        </motion.div>

        {/* CTA Instead of Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex flex-col justify-center items-center space-y-5 text-center"
        >
          <h3 className="text-2xl font-semibold text-yellow-700">Let’s Discuss Your Project</h3>
          <p className="text-gray-600">
            Skip the form. Just call us or send a message directly on WhatsApp!
          </p>

          <div className="flex gap-4 flex-wrap justify-center">
            <a
              href="tel:+917800714729"
              className="bg-yellow-800 text-white px-5 py-2 rounded-full hover:bg-gray-800 transition"
            >
              📞 Call Now
            </a>
            <a
              href="https://wa.me/917800714729"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700 transition"
            >
              💬 WhatsApp
            </a>
          </div>
        </motion.div>
      </section>

      {/* Map with Frame */}
      <section className="px-6 md:px-20 pb-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-100"
        >
          <iframe
            className="w-full h-[400px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.857150187944!2d80.9461596!3d26.8669276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd4c1ab8c00f%3A0x1e957c83e42b4e1!2sLucknow!5e0!3m2!1sen!2sin!4v1681586000000!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </motion.div>
      </section>

    

      <Footer />
      <MobileNav />
    </div>
  );
}
