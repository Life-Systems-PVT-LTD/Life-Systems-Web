import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="fixed w-full z-50 backdrop-blur-md bg-white/70 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">

                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="flex items-center">
                            <div className="relative w-10 h-10 mr-2">
                                <Image
                                    src="/logos/life_systems_logo_without_bg.png"
                                    alt="Life Systems Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-xl font-semibold text-gray-800">Life Systems</span>
                        </Link>
                    </div>

                    <div className="hidden lg:flex items-center space-x-5">

                        <Link href="/" className="text-[#24224C] px-4 py-2 text-md font-semibold transition-transform duration-700 ease-in-out hover:-translate-y-1 hover:text-[#6a2971]">
                            Home
                        </Link>

                        <a href="#services" className="text-[#24224C] px-4 py-2 text-md font-semibold transition-transform duration-700 ease-in-out hover:-translate-y-1 hover:text-[#6a2971]">
                            Services
                        </a>
                        <a href="#portfolio" className="text-[#24224C] px-4 py-2 text-md font-semibold transition-transform duration-700 ease-in-out hover:-translate-y-1 hover:text-[#6a2971]">
                            Portfolio
                        </a>
                        <a href="#why_us" className="text-[#24224C] px-4 py-2 text-md font-semibold transition-transform duration-700 ease-in-out hover:-translate-y-1 hover:text-[#6a2971]">
                            Why Us
                        </a>
                        <a href="#testimonials" className="text-[#24224C] px-4 py-2 text-md font-semibold transition-transform duration-700 ease-in-out hover:-translate-y-1 hover:text-[#6a2971]">
                            Testimonials
                        </a>
                        <a href="#contact" className="text-[#24224C] px-4 py-2 text-md font-semibold transition-transform duration-700 ease-in-out hover:-translate-y-1 hover:text-[#6a2971]">
                            Contact Us
                        </a>
                        <a href="#contact" className="bg-[#55185C] text-white px-4 py-2 rounded-md text-md transition-all duration-500 hover:-translate-y-1 transform">
                            Get Started
                        </a>
                        
                    </div>

                    <div className="lg:hidden">

                        <input type="checkbox" id="mobile-menu" className="hidden peer" />


                        <label htmlFor="mobile-menu" className="cursor-pointer p-2 transition-transform duration-300 active:scale-95">

                            <svg
                                className="w-6 h-6 peer-checked:hidden transition-opacity duration-300"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <svg
                                className="hidden w-6 h-6 peer-checked:block transition-opacity duration-300"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </label>

                        <div className="hidden absolute left-0 right-0 top-16 bg-white/95 shadow-lg backdrop-blur-sm peer-checked:block origin-top transition-all duration-500 scale-y-0 peer-checked:scale-y-100">
                            <div className="px-2 pt-2 pb-4 space-y-1">
                                {[
                                    { href: "/", text: "Home" },
                                    { href: "#services", text: "Services" },
                                    { href: "#portfolio", text: "Portfolio" },
                                    { href: "#why_us", text: "Why Us" },
                                    { href: "#testimonials", text: "Testimonials" },
                                    { href: "#contact", text: "Contact Us" },
                                ].map((item, index) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className="block px-3 py-2 rounded-md text-base font-bold text-gray-700 hover:text-blue-600 hover:bg-gray-100/50 transition-all duration-500 transform hover:translate-x-2"
                                        style={{ transitionDelay: `${index * 50}ms` }}
                                    >
                                        {item.text}
                                    </Link>
                                ))}
                                <Link
                                    href="#contact"
                                    className="block px-3 py-2 rounded-md text-base font-bold text-center text-white bg-[#55185C] transition-all duration-300 transform hover:scale-105"
                                    style={{ transitionDelay: "300ms" }}
                                >
                                    Get Started
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
