"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { 
  MagnifyingGlassIcon, 
  UserIcon, 
  HeartIcon, 
  ShoppingCartIcon,
  Bars3Icon,
  XMarkIcon 
} from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full h-auto bg-biscuit px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-3 md:flex items-center h-[100px]">
          {/* Mobile Menu Button - Left */}
          <div className="flex items-center">
            <button 
              className="md:hidden p-2"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6 text-sblack" />
              ) : (
                <Bars3Icon className="h-6 wnp-6 text-sblack" />
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block flex-1 md:justify-center">
            <ul className="flex space-x-8 items-center text-sblack font-normal text-[16px] leading-[24px] font-poppins">
              <li><Link href="/home" className="hover:underline">Home</Link></li>
              <li><Link href="/Shop" className="hover:underline">Shop</Link></li>
              <li><Link href="/Shop1" className="hover:underline">Shop1</Link></li>
              <li><Link href="/about" className="hover:underline">About</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </nav>

          {/* Right Icons - Centered on mobile */}
          <div className="flex justify-center items-center space-x-4 md:space-x-6 col-span-1">
            <UserIcon className="h-6 w-6 text-sblack cursor-pointer" />
            <HeartIcon className="h-6 w-6 text-sblack cursor-pointer sm:block" />
            <ShoppingCartIcon className="h-6 w-6 text-sblack cursor-pointer" />
            <MagnifyingGlassIcon className="h-6 w-6 text-sblack cursor-pointer sm:block" />
          </div>

          {/* Empty div for grid balance on mobile */}
          <div className="md:hidden"></div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <ul className="flex flex-col space-y-4 text-sblack font-normal text-[16px] leading-[24px] font-poppins">
              <li>
                <Link href="/home" className="hover:underline block">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:underline block">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline block">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline block">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;