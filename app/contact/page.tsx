"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import FreeConsultationModal from "../components/FreeConsultationModal";
import MobileNav from "../components/MobileNav";  
import Image from "next/image"; 
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
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data: any) => {
    console.log("Form Submitted", data);
    reset();
  };
  const [modalOpen, setModalOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-[#ede7e3]">
      <Header />
      {/* Hero Section */}
      <div className="relative h-130  ">
        <video
          src="/videos/contact-hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0  bg-opacity-60 flex items-center justify-center">
          <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-white text-4xl md:text-5xl font-bold"
          >
        Let’s Start Your Dream Space
          </motion.h1>
        </div>
      </div>

      {/* Contact Info & Form */}
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
              <span>123 Design Street, Lucknow, India</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-primary" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-primary" />
              <span>contact@nqdesigns.in</span>
            </div>
          </div>

          <div className="flex gap-5 pt-6">
            <a
              href="#"
              target="_blank"
              className="text-xl text-gray-700 hover:text-black transition transform hover:scale-110"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              target="_blank"
              className="text-xl text-gray-700 hover:text-black transition transform hover:scale-110"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              target="_blank"
              className="text-xl text-gray-700 hover:text-black transition transform hover:scale-110"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

        {/* Contact Form Card */}
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 space-y-5"
        >
          <h3 className="text-2xl font-semibold mb-2">Send Us a Message</h3>
          <input
            {...register("name")}
            placeholder="Your Name"
            className="w-full border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-gray-300"
          />
          <input
            {...register("email")}
            placeholder="Email Address"
            type="email"
            className="w-full border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-gray-300"
          />
          <textarea
            {...register("message")}
            placeholder="Tell us about your project..."
            rows={5}
            className="w-full border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-gray-300"
          />
          <button
            type="submit"
            className="w-full bg-yellow-800 text-white p-3 rounded-lg font-medium hover:bg-gray-800 transition"
          >
            Send Message
          </button>
        </motion.form>
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

      {/* CTA Section */}
      <section className="bg-[#ede7e3] py-16 px-6 md:px-20 text-center border-t">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Ready to Transform Your Space?</h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-6">
            Schedule a free consultation with our interior experts and let’s bring your vision to life.
          </p>
          <div className="flex items-center space-x-4">
            <div className="w-full flex justify-center">
              <button
              onClick={() => setModalOpen(true)}
              className="md:inline-block px-5 py-2 bg-yellow-800 text-white rounded-full text-sm font-semibold hover:bg-blue-700 transition items-center"
              >
              Free Consultation
              </button>
            </div>
            <div className="md:hidden">
              <MobileNav />
            </div>
          
            {/* ✅ Free Consultation Modal */}
            <FreeConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
          </div>
        </motion.div>
      </section>
      <Footer />
      <MobileNav />
    </div>
  );
}
