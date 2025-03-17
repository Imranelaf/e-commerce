"use client";
import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const typesOfProducts = ["MEN", "WOMEN", "SOCKS", "NEW ARRIVALS"];

  return (
    <nav className="w-full bg-white dark:bg-gray-900 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        
        {/* Hamburger Icon (Mobile) */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X size={28} className="text-gray-900 dark:text-white" /> : <Menu size={28} className="text-gray-900 dark:text-white" />}
        </button>

        {/* Navigation Links (Desktop) */}
        <ul className="hidden md:flex w-1/3">
          {typesOfProducts.map((item, index) => (
            <li key={index} className="ml-4 text-xs font-semibold tracking-widest cursor-pointer hover:underline">
              {item}
            </li>
          ))}
        </ul>

        {/* Logo */}
        <div className="w-1/3 flex justify-center">
          <Image src="/images/logo.png" alt="Logo" width={100} height={50} />
        </div>

        {/* Icons (Right Side) */}
        <ul className="hidden md:flex w-1/3 items-center justify-end pr-20">
        <li className="pr-6 cursor-pointer">
            <Image src={'/icons/search.png'} width={20} height={20} alt="Account"/> 
          </li>
          <li className="pr-6 cursor-pointer">
            <Image src={'/icons/user.png'} width={20} height={20} alt="Account"/> 
          </li>
          <li className="pr-6 cursor-pointer">
            <Image src={'/icons/question.png'} width={20} height={20} alt="Questions"/> 
          </li>
          <li className="pr-6 cursor-pointer">
            <Image src={'/icons/cart.png'} width={25} height={20} alt="Shopping"/> 
          </li>
        </ul>
        {<ul className="lg:hidden md:hidden">
        <Image 
            src={'/cart.png'} 
            alt="Shopping" 
            width={40} 
            height={40} 
            className="w-10 h-10 md:w-12 md:h-12 cursor-pointer mr-4"
          />
        </ul>}
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ${isOpen ? "block" : "hidden"}`}>
        <ul className="flex flex-col items-center space-y-4 py-4 bg-white dark:bg-gray-900 absolute z-[10] w-screen h-full fixed overflow-hidden">
          {typesOfProducts.map((item, index) => (
            <li key={index} className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition">
              {item}
            </li>
           
          ))}
          <li className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition">ACCOUNT</li>
          <li className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition">HELP</li>
        </ul>
      </div>
    </nav>
  );
}