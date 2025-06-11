import OurProtfolio from "@/components/our_protfolio/OurProtfolio";
import OurServices from "@/components/our_services/OurServices";
import WhyChooseUs from "@/components/why_choose_us/Why_choose_us";
import Image from "next/image";

export default function Home() {

    return (

        <>

            <section className="relative bg-gray-100 min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-16 overflow-hidden">
                {/* Diagonal Shape */}
                <div className="absolute bottom-0 left-0 w-full h-[10%] lg:h-[37%] z-0 pointer-events-none">
                    <svg
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                        className="w-full h-full"
                    >
                        <polygon fill="white" points="0,40 100,100 100,100 0,100" />
                    </svg>
                </div>

                {/* Main Content */}
                <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 mt-7 lg:gap-8 gap-1 items-center relative z-10">

                    {/* Logo Section (Top on mobile, Right on desktop) */}
                    <div className="flex justify-center md:justify-end order-1 md:order-2">
                        <div className="text-center md:text-right animate-[bounce_30s_ease-in-out_infinite]">
                            <img
                                src="./logos/life_systems_logo_without_bg.png"
                                alt="Life Systems Inc Logo"
                                className="mx-auto md:mx-0 w-64 sm:w-72 md:w-80 lg:w-[50rem] xl:w-[50rem]"
                            />
                        </div>
                    </div>

                    {/* Text Content Section (Bottom on mobile, Left on desktop) */}
                    <div className="space-y-6 order-2 md:order-1">
                        <div className="flex justify-center md:justify-start mb-4">
                            <span className="inline-block bg-[#55185C] text-white text-sm font-semibold px-4 py-1 rounded-full">
                                Innovation Software Solution
                            </span>
                        </div>

                        <div className="flex justify-center md:justify-start flex-col items-center md:items-start space-y-4">

                            <h1 className="text-4xl lg:text-6xl font-bold text-[#1E1E1E]">
                                Innovating The Way <br />
                                <span className="text-[#55185C]">You Connect</span> With <br /> Technology
                            </h1>

                            <p className="text-sm sm:text-base text-gray-600 max-w-md">
                                We create custom software solutions that transform your business needs into powerful, user-friendly applications.
                            </p>

                        </div>

                        <div className="grid grid-cols-1">

                            <div className="flex lg:flex-row flex-col items-center gap-5">

                                <div className="flex flex-col">

                                    <button className="bg-[#55185C] hover:bg-[#4c1e56] text-white font-semibold lg:px-6 lg:py-3 px-16 py-3 rounded-md text-md transition ease-in-out duration-700 lg:text-sm">
                                        Get Started
                                    </button>

                                </div>
                                <div className="flex flex-col">

                                    <button className="border border-gray-700 text-gray-800 hover:bg-[#231e55] hover:text-white font-medium lg:px-6 lg:py-3 px-16 py-3 transition ease-in-out duration-700 rounded-md text-md lg:text-sm">
                                        Learn More
                                    </button>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </section> 

            <div className="mt-14 mb-24">

                <OurServices/>

            </div>

            <div className="mb-24">

                <OurProtfolio/>

            </div>

            <div>

                <WhyChooseUs/>

            </div> 

        </>

    );

}
