'use client';

import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaClock } from 'react-icons/fa';
import styles from './contact.module.css';
import SuccessAlert from '../alerts/success_alert/SuccessAlert';
import ErrorAlert from '../alerts/error_alert/ErrorAlert';

const Contact = () => {
    // success mesage state
    const [showSuccess, setShowSuccess] = React.useState(false);
    // error message state
    const [errorMessage, setErrorMessage] = React.useState('');
    const [showError, setShowError] = React.useState(false);

    const handleSubmit = async (e: React.FormEvent) => {

        e.preventDefault();

        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);

        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            contact: formData.get("contact"),
            subject: formData.get("subject"),
            message: formData.get("message"),
        };

        const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        if (res.ok) {
            setShowSuccess(true);
            form.reset();
        } else {
            setErrorMessage("Failed to send message. Try again later.");
            setShowError(true);
        }
    };


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

                    {/* success message alert */}
                    {showSuccess && <SuccessAlert onClose={() => setShowSuccess(false)} />}
                    {/* success message alert */}

                    {/* Error Message alert */}
                    {showError && <ErrorAlert message={errorMessage} onClose={() => setShowError(false)} />}
                    {/* Error Message alert */}

                    <form className="grid sm:grid-cols-2 gap-6" onSubmit={handleSubmit}>
                        {/* Name */}
                        <div className="relative">

                            <input type="text" name="name" id="name" placeholder="Your Name" required className="peer w-full border-2 border-gray-300 rounded-lg px-3 pt-6 pb-2 text-base placeholder-transparent focus:outline-none focus:border-[#6A2971] focus:ring-4 focus:ring-[#DAC9DB]" />

                            <label htmlFor="name" className="absolute left-3 top-2 text-sm font-semibold text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#6A2971] bg-white px-1">

                                Your Name

                            </label>

                        </div>

                        {/* Email */}
                        <div className="relative">

                            <input type="email" name="email" id="email"placeholder="Your Email"required className="peer w-full border-2 border-gray-300 rounded-lg px-3 pt-6 pb-2 text-base placeholder-transparent focus:outline-none focus:border-[#6A2971] focus:ring-4 focus:ring-[#DAC9DB]"/>

                            <label htmlFor="email" className="absolute left-3 top-2 text-sm font-semibold text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#6A2971] bg-white px-1" >

                                Your Email

                            </label>

                        </div>

                        {/* Contact */}
                        <div className="relative sm:col-span-2">

                            <input type="text" name="contact" id="contact" placeholder="Contact Number" required className="peer w-full border-2 border-gray-300 rounded-lg px-3 pt-6 pb-2 text-base placeholder-transparent focus:outline-none focus:border-[#6A2971] focus:ring-4 focus:ring-[#DAC9DB]"/>

                            <label htmlFor="contact" className="absolute left-3 top-2 text-sm font-semibold text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#6A2971] bg-white px-1">

                                Contact Number

                            </label>

                        </div>

                        {/* Subject */}
                        <div className="relative sm:col-span-2">

                            <input type="text" name="subject" id="subject" placeholder="Subject" required className="peer w-full border-2 border-gray-300 rounded-lg px-3 pt-6 pb-2 text-base placeholder-transparent focus:outline-none focus:border-[#6A2971] focus:ring-4 focus:ring-[#DAC9DB]" />

                            <label htmlFor="subject" className="absolute left-3 top-2 text-sm font-semibold text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#6A2971] bg-white px-1">

                                Subject

                            </label>

                        </div>

                        {/* Message */}
                        <div className="relative sm:col-span-2">

                            <textarea name="message" id="message" rows={4} placeholder="Your Message"required className="peer w-full border-2 border-gray-300 rounded-lg px-3 pt-6 pb-2 text-base placeholder-transparent resize-none focus:outline-none focus:border-[#6A2971] focus:ring-4 focus:ring-[#DAC9DB]"></textarea>

                            <label htmlFor="message" className="absolute left-3 top-2 text-sm font-semibold text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#6A2971] bg-white px-1">

                                Your Message

                            </label>

                        </div>

                        {/* Submit */}
                        
                        <button type="submit" className="sm:col-span-2 w-full bg-[#6A2971] hover:bg-[#5A2260] text-white text-lg font-medium py-3 px-4 rounded-lg transition">

                            Send Message

                        </button>

                    </form>

                </div>
                
            </div>

            {/* Contact Content */}

        </div>

    );

}

export default Contact;
