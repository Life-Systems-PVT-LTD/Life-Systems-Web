"use client";

import Image from "next/image";
import { useState } from "react";

const testimonials = [

    {
        name: "John Doe",
        position: "CEO, TechCorp",
        message:
            "Life Systems helped us transform our outdated systems into a powerful digital platform. Their expertise and attention to detail exceeded our expectations.",
        image: "/testimonials_imgs/John.jpg",
    },

    {
        name: "Jane Smith",
        position: "Marketing Director, FitLife",
        message:
            "The mobile app Life Systems developed for us has revolutionized how we interact with customers. User engagement has increased by 200% since launch.",
        image: "/testimonials_imgs/Jane.jpg",
    },

    {
        name: "Robert Johnson",
        position: "Owner, StyleShop",
        message:
            "Working with Life Systems was a game-changer for our e-commerce business. Their custom solution improved our conversion rates and streamlined operations.",
        image: "/testimonials_imgs/Robert.jpg",
    },

];

export default function TestimonialCarousel() {

    const [index, setIndex] = useState(0);

    const prev = () => {
        setIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    };

    const next = () => {
        setIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    };

    return (

        <section className="py-12 bg-gray-100" id="testimonials">

            <div className="flex flex-col mt-8 px-20 lg:px-30">

                {/* testamonialsHeader */}

                <div className="flex flex-row justify-center">

                    <span className="text-[#24224C] text-[40px] font-bold">Client</span>&nbsp;&nbsp;
                    <span className="text-[#6A2971] text-[40px] font-bold">Testimonials</span>

                </div>

                {/* testamonialsHeader */}


                {/* testamonialdescription */}

                <div className="flex flex-row justify-center p-5 mb-20">

                    <p className="text-[#666666] text-center text-[17.6px] font-normal">What our clients say about our services and solutions</p>

                </div>

                {/* testamonialdescription */}


                {/* testamonialContent */}

                <div className="bg-white p-9 lg:px-25 rounded-xl shadow-md relative">
                    
                    <div className="mb-4">
                        <i className="fas fa-quote-left text-[#E1D4E3] text-3xl"></i>
                    </div>

                    <p className="text-gray-700 text-start italic mx-5 mb-6">{testimonials[index].message}</p>

                    <div className="flex items-center mx-5 gap-4">

                        <Image
                            width={64}
                            height={64}
                            src={testimonials[index].image}
                            alt={testimonials[index].name}
                            className="w-16 h-16 rounded-full border-2 border-[#6A2971]"
                        />

                        <div className="text-left">
                            <h5 className="text-lg font-semibold">{testimonials[index].name}</h5>
                            <p className="text-sm text-gray-500">{testimonials[index].position}</p>
                        </div>

                    </div>

                    {/* Controls */}
                    <div className="absolute top-1/2 left-4 transform -translate-y-1/2">

                        <button onClick={prev} className="text-[#6A2971] text-6xl hover:text-purple-800">
                            ‹
                        </button>

                    </div>

                    <div className="absolute top-1/2 right-4 transform -translate-y-1/2">

                        <button onClick={next} className="text-[#6A2971] text-6xl hover:text-purple-800">
                            ›
                        </button>

                    </div>

                </div>

                {/* testamonialContent */}

                {/* Indicators */}
                <div className="mt-4 flex justify-center pt-15 mb-15 gap-2">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`w-3 h-3 rounded-full ${index === i ? "bg-[#6A2971]" : "bg-[#E2E2E2]"}`}
                        ></button>
                    ))}
                </div>
                {/* Indicators */}

            </div>

        </section>

    );

}
