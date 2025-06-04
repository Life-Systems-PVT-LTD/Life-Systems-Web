
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {

    return (

        <footer className="bg-[#1c1743] text-gray-300 py-12 px-6">

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-6 gap-5 mt-10">

                <div className="md:col-span-2">

                    <div className="flex items-center space-x-3 mb-4">

                        <Image
                            src="/logos/life_systems_logo.png"
                            alt="Life Systems Logo"
                            width={70}
                            height={70}
                        />

                        <h1 className="text-white text-lg font-bold">Life Systems</h1>

                    </div>

                    <p className="mb-4 text-md font-semibold text-white/80">

                        Life Systems Inc. is a leading software development company dedicated to
                        creating innovative solutions that power businesses worldwide.

                    </p>

                    <div className="flex space-x-6">
                        <div className="flex space-x-3">

                            <Link href="#" className="bg-white/20 h-10 w-10 flex items-center justify-center text-[#f0f0f0] rounded-full hover:bg-[#5A2260] transition-transform duration-300 transform hover:-translate-y-1">
                                <i className="fab fa-facebook-f"></i>
                            </Link>

                            <Link href="#" className="bg-white/20 h-10 w-10 flex items-center justify-center text-[#f0f0f0] rounded-full hover:bg-[#5A2260] transition-transform duration-300 transform hover:-translate-y-1">
                                <i className="fab fa-twitter"></i>
                            </Link>

                            <Link href="#" className="bg-white/20 h-10 w-10 flex items-center justify-center text-[#f0f0f0] rounded-full hover:bg-[#5A2260] transition-transform duration-300 transform hover:-translate-y-1">
                                <i className="fab fa-linkedin-in"></i>
                            </Link>

                            <Link href="#" className="bg-white/20 h-10 w-10 flex items-center justify-center text-[#f0f0f0] rounded-full hover:bg-[#5A2260] transition-transform duration-300 transform hover:-translate-y-1">
                                <i className="fab fa-instagram"></i>
                            </Link>

                        </div>

                    </div>


                </div>


                <div>

                    <h3 className="font-semibold mb-4 text-white/95 text-2xl">Company</h3>

                    <ul className="space-y-4 text-md text-white/70 font-bold">

                        <li><Link href="#" className="hover:text-white transition-colors duration-500">Home</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors duration-500">About Us</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors duration-500">Services</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors duration-500">Portfolio</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors duration-500">Contact</Link></li>

                    </ul>

                </div>

                <div>

                    <h3 className="font-semibold mb-4 text-white/95 text-2xl">Services</h3>

                    <ul className="space-y-4 text-md text-white/70 font-bold">

                        <li><Link href="#" className="hover:text-white transition-colors duration-500">Web Development</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors duration-500">Mobile Apps</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors duration-500">E-commerce</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors duration-500">UI/UX Design</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors duration-500">Cloud Services</Link></li>

                    </ul>

                </div>

                <div className="md:col-span-2">

                    <h3 className="font-semibold mb-4 text-white/95 text-2xl">Newsletter</h3>

                    <p className="mb-4 text-lg text-white/80">

                        Subscribe to our newsletter to receive updates on our latest news and offers.

                    </p>

                    <form className="flex">

                        <input
                            type="email"
                            placeholder="Your Email"
                            className="p-2 rounded-l-md bg-[#2c265f] text-white border-none outline-none w-full"
                        />

                        <button
                            type="submit"
                            className="bg-[#a149a9] hover:bg-[#8d3993c4] px-4 rounded-r-md text-white font-medium transition-colors duration-300"
                        >
                            Subscribe

                        </button>

                    </form>
 
                    <p className="text-lg mt-4 text-white/80 inter_semibold">
                        By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
                    </p>

                </div>

            </div>

            <div className="mt-12">

                <div className="max-w-7xl mx-auto">

                    <hr className="border-2 border-gray-700" />
                    
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 text-sm mt-5">

                    <p className="text-center text-lg md:text-left text-white/80">

                        © 2023 - 2025 Life Systems . All Rights Reserved.

                    </p>

                    <div className="flex justify-center md:justify-end space-x-4">

                        <Link href="#" className="hover:text-white text-lg transition-colors duration-500">Privacy Policy</Link>

                        <span className="text-white/40 text-lg">|</span>

                        <Link href="#" className="hover:text-white text-lg transition-colors duration-500">Terms of Use</Link>

                        <span className="text-white/40 text-lg">|</span>

                        <Link href="#" className="hover:text-white text-lg transition-colors duration-500">Cookie Policy</Link>
                    
                    </div>

                </div>

            </div>



        </footer>

    );

}
