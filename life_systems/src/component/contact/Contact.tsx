import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaClock } from 'react-icons/fa';
import styles from './contact.module.css';

const Contact = () => {

    return (

        <div className="flex flex-col py-20 px-10">

            {/* contactHeader */}

            <div className="flex flex-row justify-center">

                <span className="text-[#24224C] text-[40px] font-bold">Get In</span>&nbsp;&nbsp;
                <span className="text-[#E02020] text-[40px] font-bold">Touch</span>

            </div>

            {/* contactHeader */}


            {/* contactdescription */}

            <div className="flex flex-row justify-center p-5">

                <p className="text-[#666666] text-center text-[17.6px] font-normal">Have a project in mind? We&apos;d love to hear from you!</p>

            </div>

            {/* contactdescription */}


            {/* Contact Content */}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10 px-2 md:px-10 lg:px-16">

                {/* Left Side - Info */}
                <div className="flex flex-col bg-[#24224C] rounded-lg space-y-6">

                    {/* Contact Item */}
                    <div className="flex flex-row items-start gap-4 mt-6 px-8">
                        <div className={styles.contactIcon}>
                            <div className="text-[#6A2971] text-2xl">
                                <FaMapMarkerAlt />
                            </div>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-white">Our Location</h4>
                            <p className="text-[#F8F8F8]">123 Tech Street, Silicon Valley, CA 94000</p>
                        </div>
                    </div>

                    <div className="flex flex-row items-start gap-4 px-8">
                        <div className={styles.contactIcon}>
                            <div className="text-[#6A2971] text-2xl">
                                <FaEnvelope />
                            </div>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-white">Email Us</h4>
                            <p className="text-[#F8F8F8]">info@lifesystems.com</p>
                        </div>
                    </div>

                    <div className="flex flex-row items-start gap-4 px-8">
                        <div className={styles.contactIcon}>
                            <div className="text-[#6A2971] text-2xl">
                                <FaPhoneAlt />
                            </div>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-white">Call Us</h4>
                            <p className="text-[#F8F8F8]">+1 (555) 123-4567</p>
                        </div>
                    </div>

                    <div className="flex flex-row items-start gap-4 px-8 mb-6">
                        <div className={styles.contactIcon}>
                            <div className="text-[#6A2971] text-2xl">
                                <FaClock />
                            </div>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-white">Business Hours</h4>
                            <p className="text-[#F8F8F8]">Monday - Friday: 9:00 AM - 6:00 PM</p>
                        </div>
                    </div>

                </div>

                {/* Right Side - Form */}
                <div className="bg-[#FCFCFC] p-8 rounded-lg shadow-lg shadow-gray-300">
                    <form className="sm:grid sm:grid-cols-2 gap-4 space-y-6">
                        <div className="sm:col-start-1 relative">
                            <input
                                className="peer w-full px-3 py-4 bg-inherit border-2 rounded-lg outline-none transition border-[#dee2e6] focus:border-[#6A2971] focus:ring-4 focus:ring-[#DAC9DB]"
                                type="text"
                                placeholder=""
                            />
                            <label
                                className="absolute left-3 top-4 text-[#212529] text-base bg-white px-1 transition-all duration-150 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm peer-focus:text-[#6A2971]"
                            >
                                Your Name
                            </label>
                        </div>
                        <div className="sm:col-start-2 relative">
                            <input
                                className="peer w-full px-3 py-4 bg-inherit border-2 rounded-lg outline-none transition border-[#dee2e6] focus:border-[#6A2971] focus:ring-4 focus:ring-[#DAC9DB]"
                                type="text"
                                placeholder=""
                            />
                            <label
                                className="absolute left-3 top-4 text-[#212529] text-base bg-white px-1 transition-all duration-150 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm peer-focus:text-[#6A2971]"
                            >
                                Your Email
                            </label>
                        </div>
                        <div className="sm:col-span-2 relative">
                            <input
                                className="peer w-full px-3 py-4 bg-inherit border-2 rounded-lg outline-none transition border-[#dee2e6] focus:border-[#6A2971] focus:ring-4 focus:ring-[#DAC9DB]"
                                type="text"
                                placeholder=""
                            />
                            <label
                                className="absolute left-3 top-4 text-[#212529] text-base bg-white px-1 transition-all duration-150 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm peer-focus:text-[#6A2971]"
                            >
                                Subject
                            </label>
                        </div>
                        <div class="sm:col-span-2 relative">
                            <textarea
                                rows="4"
                                placeholder=""
                                className="peer w-full px-3 py-4 bg-inherit border-2 rounded-lg outline-none transition border-[#dee2e6] focus:border-[#6A2971] focus:ring-4 focus:ring-[#DAC9DB] resize-none"
                            ></textarea>
                            <label
                                className="absolute left-3 top-4 text-[#212529] text-base bg-white px-1 transition-all duration-150 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm peer-focus:text-[#6A2971]"
                            >
                                Your Message
                            </label>
                        </div>

                        <button className="sm:col-span-2 w-full bg-[#6A2971] hover:bg-[#5A2260] active:bg-[#0a58ca] text-white text-xl py-2 px-4 rounded-lg transition-all ">Send Message</button>
                    </form>
                </div>
            </div>

            {/* Contact Content */}

        </div>

    );

}

export default Contact;


// {/* Contact Section */}
//             <section id="contact" className="py-16 bg-white dark:bg-gray-800 transition-colors duration-300">
//                 <div className="container mx-auto px-6">
//                     <div className="text-center mb-12">
//                         <h2 className="text-4xl font-bold text-[#2c2b49] dark:text-white mb-4">Get In Touch</h2>
//                         <p className="text-xl text-gray-600 dark:text-gray-300">Have a project in mind? We&apos;d love to hear from you!</p>
//                     </div>
//                     <div className="grid lg:grid-cols-2 gap-12">
//                         <div>
//                             <div className="grid md:grid-cols-2 gap-8 mb-8">
//                                 <div>
//                                     <h4 className="text-xl font-bold text-[#2c2b49] dark:text-white mb-2">Our Location</h4>
//                                     <p className="text-gray-600 dark:text-gray-300">123 Tech Street, Silicon Valley, CA 94000</p>
//                                 </div>
//                                 <div>
//                                     <h4 className="text-xl font-bold text-[#2c2b49] dark:text-white mb-2">Email Us</h4>
//                                     <p className="text-gray-600 dark:text-gray-300">info@lifesystems.com</p>
//                                 </div>
//                                 <div>
//                                     <h4 className="text-xl font-bold text-[#2c2b49] dark:text-white mb-2">Call Us</h4>
//                                     <p className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</p>
//                                 </div>
//                                 <div>
//                                     <h4 className="text-xl font-bold text-[#2c2b49] dark:text-white mb-2">Business Hours</h4>
//                                     <p className="text-gray-600 dark:text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM</p>
//                                 </div>
//                             </div>
//                         </div>




//                         <div>
//                             <form className="space-y-6">
//                                 <div>
//                                     <input
//                                         type="text"
//                                         name="name"
//                                         placeholder="Your Name"
//                                         className={`w-full p-4 border rounded-lg focus:ring-2 focus:ring-[#9b4b5b] focus:border-transparent outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-colors`}
//                                     />
//                                 </div>
//                                 <div>
//                                     <input
//                                         type="email"
//                                         name="email"
//                                         placeholder="Your Email"
//                                         className={`w-full p-4 border rounded-lg focus:ring-2 focus:ring-[#9b4b5b] focus:border-transparent outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-colors`}
//                                     />
//                                 </div>
//                                 <div>
//                                     <input
//                                         type="text"
//                                         name="subject"
//                                         placeholder="Subject"
//                                         className={`w-full p-4 border rounded-lg focus:ring-2 focus:ring-[#9b4b5b] focus:border-transparent outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-colors`}
//                                     />
//                                 </div>
//                                 <div>
//                                     <textarea
//                                         name="message"
//                                         placeholder="Your Message"
//                                         rows={4}
//                                         className={`w-full p-4 border rounded-lg focus:ring-2 focus:ring-[#9b4b5b] focus:border-transparent outline-none resize-none dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-colors`}
//                                     />
//                                 </div>
//                                 <button className="w-full bg-[#6A2971] hover:bg-[#8a424f] disabled:bg-gray-400 text-white py-4 px-6 rounded-lg font-semibold transition-all hover:scale-105 disabled:hover:scale-100">Send Message</button>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </section>