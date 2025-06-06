import Image from "next/image";

const OurProtfolio = () => {

    return (

        <div className="flex flex-col mt-7 mb-6">

            {/* protfolioheader */}

            <div className="flex flex-row justify-center">

                <span className="text-4xl font-bold">Our</span>&nbsp;&nbsp;

                <span className='text-[#E22020] font-bold text-4xl'>Protfolio</span>

            </div>

            {/* protfolioheader */}

            {/* protfolioDescription */}

            <div className="flex flex-row justify-center p-5 mt-2">

                <p className="text-[#666666] text-center text-[18px]">We deliver high-quality solutions tailored to your specific needs</p>

            </div>

            {/* protfolioDescription */}

            {/* protfolioList */}

            <div className="flex flex-col mt-8">

                {/* listBody */}

                <div className="flex flex-row justify-center">

                    <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-7 p-2">

                        {/* ecommerce */}

                        <div className="flex flex-col lg:w-[350px] max-w-full items-center bg-[#FCFCFC] p-8 rounded-2xl shadow-lg shadow-gray-300 transform transition duration-700 ease-in-out hover:-translate-y-3 hover:scale-[1.03] hover:shadow-xl">

                            <Image src="/icons/entypo--mobile.png" width={50} height={50} alt="mobilePhone image" priority />

                            <span className="mt-5 text-xl font-semibold text-gray-800">Mobile App Development</span>

                            <div className="flex flex-col mt-2 space-y-3 items-center">

                                <span className="text-[15px] text-center text-[#666666] leading-relaxed">We build native and cross-platform mobile applications for iOS and Android to reach your users wherever they are.</span>

                                {/* Top tag */}
                                <div className="flex flex-row gap-2">

                                    <span className="bg-[#F0E9F1] font-semibold text-[#802971] tracking-widest rounded-3xl p-2 text-[12px]">User-Centric Design</span>

                                    <span className="bg-[#F0E9F1] font-semibold text-[#802971] rounded-3xl p-2 text-[12px]">Swift & Kotlin</span>


                                </div>

                                <span className="bg-[#F0E9F1] font-semibold text-[#802971] tracking-widest rounded-3xl p-2 text-[12px]">Cross-Platform</span>



                            </div>

                        </div>

                        {/* ecommerce */}

                        {/* fitness */}

                        <div className="flex flex-col lg:w-[350px] max-w-full items-center bg-[#FCFCFC] p-8 rounded-2xl shadow-lg shadow-gray-300 transform transition duration-700 ease-in-out hover:-translate-y-3 hover:scale-[1.03] hover:shadow-xl">

                            <Image src="/icons/ion--cart.png" width={50} height={50} alt="cart image" priority />

                            <span className="mt-5 text-xl font-semibold text-gray-800">E-commerce Solutions</span>

                            <div className="flex flex-col mt-2 space-y-3 items-center">

                                <span className="text-[15px] text-center text-[#666666] leading-relaxed">We develop powerful online stores and e-commerce systems that help your business thrive in the digital marketplace.</span>


                                <div className="flex flex-col gap-2">

                                    <span className="bg-[#F0E9F1] font-semibold text-[#802971] tracking-widest rounded-3xl p-2 text-[12px]">Payment Integration</span>

                                    <span className="bg-[#F0E9F1] font-semibold text-[#802971] rounded-3xl p-2 text-[12px]">Inventory Management</span>

                                    <span className="bg-[#F0E9F1] font-semibold text-[#802971] tracking-widest rounded-3xl p-2 text-[12px]">Customer Analytics</span>

                                </div>

                            </div>

                        </div>

                        {/* fitness */}

                        {/* bankingsystem */}

                        <div className="flex flex-col lg:w-[350px] max-w-full items-center bg-[#FCFCFC] p-8 rounded-2xl shadow-lg shadow-gray-300 transform transition duration-700 ease-in-out hover:-translate-y-3 hover:scale-[1.03] hover:shadow-xl">

                            <Image src="/icons/material-symbols--cloud.png" width={50} height={50} alt="cloud image" priority />

                            <span className="mt-5 text-xl font-semibold text-gray-800">Cloud Services</span>

                            <div className="flex flex-col mt-2 space-y-3 items-center">

                                <span className="text-[15px] text-center text-[#666666] leading-relaxed">We provide cloud-based solutions and infrastructure management to optimize performance, scalability, and security.</span>

                                {/* Top tag */}
                                <div className="flex flex-row gap-2">

                                    <span className="bg-[#F0E9F1] font-semibold text-[#802971] tracking-widest rounded-3xl p-2 text-[12px]">AWS & Azure</span>

                                    <span className="bg-[#F0E9F1] font-semibold text-[#802971] rounded-3xl p-2 text-[12px]">Scalable Infrastructure</span>


                                </div>

                                <span className="bg-[#F0E9F1] font-semibold text-[#802971] tracking-widest rounded-3xl p-2 text-[12px]">Continuous Deployment</span>

                            </div>

                        </div>

                        {/* bankingsystem */}

                        {/* crmsystem */}

                        <div className="flex flex-col lg:w-[350px] max-w-full items-center bg-[#FCFCFC] p-8 rounded-2xl shadow-lg shadow-gray-300 transform transition duration-700 ease-in-out hover:-translate-y-3 hover:scale-[1.03] hover:shadow-xl">

                            <Image src="/icons/fa6-solid--robot.png" width={50} height={50} alt="lap image" priority />

                            <span className="mt-5 text-xl font-semibold text-gray-800">AI & Machine Learning</span>

                            <div className="flex flex-col mt-2 space-y-3 items-center">

                                <span className="text-[15px] text-center text-[#666666] leading-relaxed">We integrate artificial intelligence and machine learning capabilities to add smart features to your applications.</span>

                                {/* Top tag */}
                                <div className="flex flex-row gap-2">

                                    <span className="bg-[#F0E9F1] font-semibold text-[#802971] tracking-widest rounded-3xl p-2 text-[12px]">Data Analysis</span>

                                    <span className="bg-[#F0E9F1] font-semibold text-[#802971] rounded-3xl p-2 text-[12px]">Predictive Models</span>


                                </div>

                                <span className="bg-[#F0E9F1] font-semibold text-[#802971] tracking-widest rounded-3xl p-2 text-[12px]">Automation</span>

                            </div>

                        </div>

                        {/* crmsystem */}

                        {/* deliveryApp */}

                        <div className="flex flex-col lg:w-[350px] max-w-full items-center bg-[#FCFCFC] p-8 rounded-2xl shadow-lg shadow-gray-300 transform transition duration-700 ease-in-out hover:-translate-y-3 hover:scale-[1.03] hover:shadow-xl">

                            <Image src="/icons/fa6-solid--gears.png" width={50} height={50} alt="lap image" priority />

                            <span className="mt-5 text-xl font-semibold text-gray-800">Custom Software</span>

                            <div className="flex flex-col mt-2 space-y-3 items-center">

                                <span className="text-[15px] text-center text-[#666666] leading-relaxed">We develop bespoke software solutions tailored to address your unique business challenges and requirements.</span>

                                {/* Top tag */}
                                <span className="bg-[#F0E9F1] font-semibold text-[#802971] tracking-widest rounded-3xl p-2 text-[12px]">Requirements Analysis</span>

                                <div className="flex flex-row gap-2">

                                    <span className="bg-[#F0E9F1] font-semibold text-[#802971] rounded-3xl p-2 text-[12px]">Agile Development</span>

                                    <span className="bg-[#F0E9F1] font-semibold text-[#802971] tracking-widest rounded-3xl p-2 text-[12px]">Ongoing Support</span>

                                </div>

                            </div>

                        </div>

                        {/* deliveryApp */}

                        {/* learning */}

                        <div className="flex flex-col lg:w-[350px] max-w-full items-center bg-[#FCFCFC] p-8 rounded-2xl shadow-lg shadow-gray-300 transform transition duration-700 ease-in-out hover:-translate-y-3 hover:scale-[1.03] hover:shadow-xl">

                            <Image src="/icons/fa6-solid--laptop-code.png" width={50} height={50} alt="lap image" priority />

                            <span className="mt-5 text-xl font-semibold text-gray-800">Web Development</span>

                            <div className="flex flex-col mt-2 space-y-3 items-center">

                                <span className="text-[15px] text-center text-[#666666] leading-relaxed">We create custom websites and web applications using the latest technologies to deliver exceptional user experiences.</span>

                                {/* Top tag */}
                                <span className="bg-[#F0E9F1] font-semibold text-[#802971] tracking-widest rounded-3xl p-2 text-[12px]">Responsive Design</span>

                                <div className="flex flex-row gap-2">

                                    <span className="bg-[#F0E9F1] font-semibold text-[#802971] rounded-3xl p-2 text-[12px]">Performance Optimization</span>

                                    <span className="bg-[#F0E9F1] font-semibold text-[#802971] tracking-widest rounded-3xl p-2 text-[12px]">SEO</span>

                                </div>

                            </div>

                        </div>

                        {/* learning */}

                    </div>

                </div>

                {/* protfolioList */}

            </div>

        </div>

    );

}

export default OurProtfolio;
