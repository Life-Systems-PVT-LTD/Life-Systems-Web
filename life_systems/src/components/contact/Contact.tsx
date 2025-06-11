import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaClock } from 'react-icons/fa';
import styles from './contact.module.css';

const Contact = () => {

    return (

        <div className="flex flex-col py-20 px-10" id="contact">

            {/* contactHeader */}

            <div className="flex flex-row justify-center">

                <span className="text-[#24224C] text-4xl font-bold">Get In</span>&nbsp;&nbsp;
                <span className="text-[#E02020] text-4xl font-bold">Touch</span>

            </div>

            {/* contactHeader */}


            {/* contactdescription */}

            <div className="flex flex-row justify-center p-5">

                <p className="text-[#666666] text-center text-[18px] font-semibold">Have a project in mind? We&apos;d love to hear from you!</p>

            </div>

            {/* contactdescription */}


            {/* Contact Content */}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10 px-2 md:px-10 lg:px-16">

                {/* Left Side - Info */}
                <div className="flex flex-col bg-[#24224C] rounded-lg space-y-6">

                    {/* Contact Item */}
                    <div className="flex flex-row items-start gap-2 mt-6 px-5">
                        <div className={styles.contactIcon}>
                            <div className="text-[#6A2971] text-2xl">
                                <FaMapMarkerAlt />
                            </div>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-white">Our Location</h4>
                            <p className="text-[#F8F8F8]">217/2, Horagolla, Ganemulla, Sri Lanka</p>
                        </div>
                    </div>

                    <div className="flex flex-row items-start gap-2 px-5 mb-6">
                        <div className={styles.contactIcon}>
                            <div className="text-[#6A2971] text-2xl">
                                <FaEnvelope />
                            </div>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-white">Email Us</h4>
                            <p className="text-[#F8F8F8] text-sm">lifesystems.contact@gmail.com</p>
                        </div>
                    </div>

                    <div className="flex flex-row items-start gap-2 px-5">
                        <div className={styles.contactIcon}>
                            <div className="text-[#6A2971] text-2xl">
                                <FaPhoneAlt />
                            </div>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-white">Call Us</h4>
                            <p className="text-[#F8F8F8]">+94 71 254 5103</p>
                        </div>
                    </div>

                    <div className="flex flex-row items-start gap-2 px-5 mb-6">
                        <div className={styles.contactIcon}>
                            <div className="text-[#6A2971] text-2xl">
                                <FaClock />
                            </div>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-white">Business Hours</h4>
                            <p className="text-[#F8F8F8]">Monday - Friday: 9:00 AM - 5:00 PM</p>
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
                        <div className="sm:col-span-2 relative">
                            <textarea
                                rows={4}
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
