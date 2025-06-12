"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    name: "John Doe",
    message:
      "Life Systems helped us transform our outdated systems into a powerful digital platform. Their expertise and attention to detail exceeded our expectations.",
    image: "/testimonials_imgs/John.jpg",
  },
  {
    name: "Jane Smith",
    message:
      "The mobile app Life Systems developed for us has revolutionized how we interact with customers. User engagement has increased by 200% since launch.",
    image: "/testimonials_imgs/Jane.jpg",
  },
  {
    name: "Robert Johnson",
    message:
      "Working with Life Systems was a game-changer for our e-commerce business. Their custom solution improved our conversion rates and streamlined operations.",
    image: "/testimonials_imgs/Robert.jpg",
  },
];

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 6000);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [index]);

  const prev = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const next = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="py-12 bg-gray-100" id="testimonials">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" id="testimonials">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 mb-5 text-center sm:text-left">
          <h2 className="text-4xl font-bold text-[#24224C]">Client</h2>
          <h2 className="text-4xl font-bold text-[#6A2971]">Testimonials</h2>
        </div>

        <div className="flex justify-center mb-10 px-4 sm:px-0">
          <p className="text-center font-semibold text-[18px] text-[#666666]">
            What our clients say about our services and solutions
          </p>
        </div>

        {/* Slider Container */}
        <div className="overflow-hidden relative rounded-2xl shadow-xl bg-white">
          {/* Sliding flex container */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {testimonials.map((t, i) => (
              <div key={i} className="min-w-full p-6 sm:p-9">
                <p className="text-gray-700 italic text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                  “{t.message}”
                </p>
                <div className="flex items-center gap-4 sm:gap-6">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={72}
                    height={72}
                    className="rounded-full border-4 border-[#6A2971]"
                    priority={true}
                  />
                  <div>
                    <h5 className="font-semibold text-lg sm:text-xl text-[#24224C]">{t.name}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute top-1/2 left-4 sm:left-6 -translate-y-1/2 text-[#6A2971] text-4xl sm:text-5xl hover:text-purple-800"
          >
            ‹
          </button>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="absolute top-1/2 right-4 sm:right-6 -translate-y-1/2 text-[#6A2971] text-4xl sm:text-5xl hover:text-purple-800"
          >
            ›
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 sm:w-4 h-3 sm:h-4 rounded-full ${
                index === i ? "bg-[#6A2971]" : "bg-[#E2E2E2]"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}


