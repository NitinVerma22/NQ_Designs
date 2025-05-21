'use client';

import { Home, Phone, Layout, Hammer } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navIcons = [
  { name: 'Home', path: '/', icon: Home },
  // { name: 'Services', path: '/services', icon: Hammer },
  { name: 'Portfolio', path: '/portfolio', icon: Layout },
  { name: 'Contact Us', path: '/contact', icon: Phone },
];

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="w-full bg-white shadow-md flex justify-around py-2 md:hidden fixed bottom-0 z-50">
      {navIcons.map(({ name, path, icon: Icon }) => {
        const isActive = pathname === path;
        return (
          <Link
            key={name}
            href={path}
            className={`flex flex-col items-center text-xs ${
              isActive ? 'text-yellow-600' : 'text-yellow-900'
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
