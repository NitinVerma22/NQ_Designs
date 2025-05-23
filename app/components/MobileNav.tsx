"use client";

import { Home, Phone, Layout } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navIcons = [
  { name: "Home", path: "/", icon: Home },
  { name: "Portfolio", path: "/portfolio", icon: Layout },
  { name: "Contact Us", path: "/contact", icon: Phone },
];

export default function MobileNav() {
  const pathname = usePathname();
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full max-w-screen overflow-hidden bg-gradient-to-b from-white/80 via-white/40 to-transparent backdrop-blur-md shadow-sm flex justify-around py-2 md:hidden fixed bottom-0 z-50 transition-all duration-500 transform ${
    showNav ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
  }`}
    >
      {navIcons.map(({ name, path, icon: Icon }) => {
        const isActive = pathname === path;
        return (
          <Link
            key={name}
            href={path}
            className={`flex flex-col items-center text-xs ${
              isActive ? "text-yellow-600" : "text-yellow-900"
            } hover:text-yellow-500 transition-colors duration-200`}
          >
            <Icon size={30} />
            <span className="mt-1">{name}</span>
          </Link>
        );
      })}
    </nav>
  );
}
