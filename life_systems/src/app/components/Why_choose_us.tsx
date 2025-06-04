
import { FaUsers, FaChartLine, FaShieldAlt, FaTachometerAlt, FaClock, FaHeadset, FaCogs, FaSyncAlt } from 'react-icons/fa';

const features = [

    {
        icon: <FaUsers size={50} />,
        title: 'Expert Team',
        description: 'Our team of professionals is skilled in the latest technologies and best practices.',
    },

    {
        icon: <FaChartLine size={50} />,
        title: 'Data-Driven',
        description: 'We make decisions based on solid data and analytics to ensure optimal outcomes.',
    },

    {
        icon: <FaShieldAlt size={50} />,
        title: 'Security First',
        description: 'We prioritize the security of your data and applications at every step.',
    },
    {
        icon: <FaTachometerAlt size={50} />,
        title: 'Performance',
        description: 'Our solutions are optimized for speed, efficiency, and exceptional performance.',
    },

    {
        icon: <FaClock size={50} />,
        title: 'On-Time Delivery',
        description: 'We consistently deliver projects on schedule without compromising quality.',
    },

    {
        icon: <FaHeadset size={50} />,
        title: '24/7 Support',
        description: 'Our dedicated support team is always available to address your concerns.',
    },

    {
        icon: <FaCogs size={50} />,
        title: 'Customization',
        description: 'Every solution is tailored to meet your specific business requirements.',
    },

    {
        icon: <FaSyncAlt size={50} />,
        title: 'Agile Process',
        description: 'We follow agile methodologies for adaptable and efficient development.',
    },

];


export default function WhyChooseUs() {

    return (

        <section className="py-10 bg-white text-center">

            <div className="max-w-7xl mx-auto px-2">

                <h2 className="text-4xl font-bold text-[#24224C] mb-4">Why Choose Us</h2>

                <p className="text-[#666666] mb-12 font-bold">

                    Discover what sets us apart and why our clients trust us with their digital needs

                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                    {features.map((feature, index) => (

                        <div

                            key={index}
                            className="relative bg-white rounded-xl p-10 w-full mx-auto shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02]"

                        >
                            <div

                                className="absolute top-0 left-0 w-full h-[4px] rounded-t-xl"

                                style={{

                                    background: 'linear-gradient(to right, #6E296F, #DB2023)',

                                }}

                            />

                            <div className="text-[#6A2971] p-4 mb-4 flex items-center justify-center">

                                {feature.icon}

                            </div>

                            <h3 className="lg:text-[20px] text-lg font-semibold text-black mb-2">

                                {feature.title}

                            </h3>

                            <p className="text-sm text-gray-600">

                                {feature.description}

                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );
}
