"use client";

import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      {/* Desktop Footer */}
      <footer className="hidden md:block bg-gradient-to-b from-grey/80 via-white/40 to-transparent backdrop-blur-md shadow-sm text-gray-800 py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-grey-900">NQ Designs</h3>
            <p>
              Crafting exceptional architectural, construction, and interior solutions that blend aesthetics with functionality.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-md font-semibold mb-2 text-grey-900">Contact</h4>
            <p>Email: <a href="mailto:contact@nqdesigns.com" className="text-blue-400 hover:underline">contact@nqdesigns.com</a></p>
            <p>Phone: +91 9876543210</p>
            <p>Address:   Near Rustle Court, Gomati Nagar Extension, Lucknow, India</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-md font-semibold mb-2 text-grey-900">Quick Links</h4>
            <ul className="space-y-1">
              <li><Link href="/services" className="hover:text-white">Services</Link></li>
              <li><Link href="/designs" className="hover:text-white">Designs</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-md font-semibold mb-2 text-grey-900">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook className="text-xl hover:text-white" /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram className="text-xl hover:text-white" /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin className="text-xl hover:text-white" /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter className="text-xl hover:text-white" /></a>
              <a href="mailto:contact@nqdesigns.com"><FaEnvelope className="text-xl hover:text-white" /></a>
            </div>
          </div>
        </div>

        <div className="text-center mt-10 text-sm text-gray-700">
          &copy; {year} NQ Designs Private Limited. All rights reserved.
        </div>
      </footer>

      
    </>
  );
}
