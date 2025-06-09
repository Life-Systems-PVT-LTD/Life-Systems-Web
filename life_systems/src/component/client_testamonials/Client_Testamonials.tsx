import Image from "next/image";

const Client_Testamonials = () => {

    return (

        <div className="flex flex-col mt-8">

            {/* testamonialsHeader */}

            <div className="flex flex-row justify-center">

                <span className="text-[#24224C] text-[40px] font-bold">Client</span>&nbsp;&nbsp;
                <span className="text-[#6A2971] text-[40px] font-bold">Testimonials</span>

            </div>

            {/* testamonialsHeader */}

            {/* testamonialdescription */}

            <div className="flex flex-row justify-center p-5">

                <p className="text-[#666666] text-center text-[17.6px] font-normal">What our clients say about our services and solutions</p>

            </div>

            {/* testamonialdescription */}

            {/* testamonialContent */}

            <div className="flex flex-row justify-center mt-2">



                <div id="indicators-carousel" class="relative w-full" data-carousel="static">
                    
                    {/* Carousel wrapper */}
                    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
                        
                        {/* Item 1 */}
                        <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
                            <Image
                                src="/docs/images/carousel/carousel-1.svg"
                                class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                alt="..."
                                width={500}
                                height={500}
                            />
                        </div>

                        {/* Item 2 */}
                        <div class="hidden duration-700 ease-in-out" data-carousel-item>
                            <Image
                                src="/docs/images/carousel/carousel-2.svg"
                                class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                alt="..."
                                width={500}
                                height={500}
                            />
                        </div>

                        {/* Item 3 */}
                        <div class="hidden duration-700 ease-in-out" data-carousel-item>
                            <Image
                                src="/docs/images/carousel/carousel-3.svg"
                                class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                alt="..."
                                width={500}
                                height={500}
                            />
                        </div>
                        
                    </div>
                    {/* Carousel wrapper */}

                    {/* Slider indicators */}
                    <div class="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
                        
                        <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                        
                        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                        
                        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                    
                    </div>
                    {/* Slider indicators */}


                    {/* Slider controls */}
                    
                    <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                        
                        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">                            
                            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                            </svg>
                            <span class="sr-only">Previous</span>
                        </span>

                    </button>

                    <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                        
                        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <span class="sr-only">Next</span>
                        </span>

                    </button>

                    {/* Slider controls */}


                </div>


            </div>

            {/* testamonialContent */}

        </div>

    );

}

export default Client_Testamonials;