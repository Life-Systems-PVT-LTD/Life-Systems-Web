import Image from "next/image";

const OurProtfolio = () => {

    return (

        <div className="flex flex-col mt-8" id="portfolio">

            {/* protfolioHeader */}

            <div className="flex flex-row justify-center">

                <span className="text-[#000000] text-4xl font-bold">Our</span>&nbsp;&nbsp;
                <span className="text-[#E22020] text-4xl font-bold">Protfolio</span>

            </div>

            {/* protfolioHeader */}

            {/* protfoliodescription */}

            <div className="flex flex-row justify-center mt-2 p-5">

                <p className="text-[#666666] text-center text-[18px] font-semibold">Explore our recent projects and see how we've helped businesses succeed</p>

            </div>

            {/* protfoliodescription */}

            {/* protfolioItems */}

            <div className="flex flex-row justify-center mt-2">

                <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-7 p-3">

                    {/* card01 */}

                    <div className="flex flex-col w-[370px] h-[360px] max-w-full rounded-t-md bg-[#FCFCFC] shadow-gray-200 shadow-lg transform transition duration-500 hover:-translate-y-2 hover:shadow-xl">

                        <div className="relative w-full h-[270px] rounded-t-md overflow-hidden group">

                            {/* cardImage */}

                            <Image src="/protfolioImages/programming-3652497.jpg" alt="Portfolio Item 1" layout="fill" objectFit="cover" className="transition-transform duration-500 group-hover:scale-105" />

                            {/* cardImage */}

                            {/* description */}

                            <div className="absolute inset-0 bg-black/80 bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-center transition-opacity duration-500">

                                <div className="flex flex-col text-white px-4">

                                    <span className="font-semibold text-2xl">E-commerce Platform</span>

                                    <p className="text-lg font-semibold mt-2">A custom online shopping solution with advanced analytics</p>

                                    <div className="flex flex-row justify-center mt-7">

                                        <button className="bg-neutral-50 px-4 py-2 rounded-md text-sm text-black hover:cursor-pointer hover:bg-neutral-200 transition-colors duration-300 ease-in-out delay-100">View Project</button>

                                    </div>

                                </div>

                            </div>

                            {/* description */}

                        </div>

                        {/* cardFooter */}

                        <div className="flex flex-col mt-1 mb-2 p-4">

                            <span className="font-semibold text-lg text-[#24224c]">E-Commerce Platform</span>

                            <div className="flex flex-row mt-3 justify-around">

                                <span className="font-semibold text-sm">web Development</span>

                                <span className="font-semibold text-sm">E-commerce</span>

                            </div>

                        </div>

                        {/* cardFooter */}

                    </div>

                    {/* card01 */}

                    {/* card02 */}

                    <div className="flex flex-col w-[370px] max-w-full h-[360px] rounded-t-md bg-[#FCFCFC] shadow-gray-200 shadow-lg transform transition duration-500 hover:-translate-y-2 hover:shadow-xl">

                        <div className="relative w-full h-[270px] rounded-t-md overflow-hidden group">

                            {/* cardImage */}

                            <Image src="/protfolioImages/representations-user-experience-interface-design.jpg" alt="Portfolio Item 1" layout="fill" objectFit="cover" className="transition-transform duration-500 group-hover:scale-105" />

                            {/* cardImage */}

                            {/* description */}

                            <div className="absolute inset-0 bg-black/80 bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-center transition-opacity duration-500">

                                <div className="flex flex-col text-white px-4">

                                    <span className="font-semibold text-2xl">Fitness App</span>

                                    <p className="text-lg font-semibold mt-2">Mobile application for workout planning and tracking</p>

                                    <div className="flex flex-row justify-center mt-7">

                                        <button className="bg-neutral-50 px-4 py-2 rounded-md text-sm text-black hover:cursor-pointer hover:bg-neutral-200 transition-colors duration-300 ease-in-out delay-100">View Project</button>

                                    </div>

                                </div>

                            </div>

                            {/* description */}

                        </div>

                        {/* cardFooter */}

                        <div className="flex flex-col mt-1 mb-2 p-4">

                            <span className="font-semibold text-lg text-[#24224c]">Fitness App</span>

                            <div className="flex flex-row mt-3 justify-around">

                                <span className="font-semibold text-sm">Mobile Development</span>

                                <span className="font-semibold text-sm">UI/UX Design</span>

                            </div>

                        </div>

                        {/* cardFooter */}

                    </div>

                    {/* card02 */}

                    {/* card03 */}

                    <div className="flex flex-col w-[370px] max-w-full h-[360px] rounded-t-md bg-[#FCFCFC] shadow-gray-200 shadow-lg transform transition duration-500 hover:-translate-y-2 hover:shadow-xl">

                        <div className="relative w-full h-[270px] rounded-t-md overflow-hidden group">

                            {/* cardImage */}

                            <Image src="/protfolioImages/6882824_29561.jpg" alt="Portfolio Item 1" layout="fill" objectFit="cover" className="transition-transform duration-500 group-hover:scale-105" />

                            {/* cardImage */}

                            {/* description */}

                            <div className="absolute inset-0 bg-black/80 bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-center transition-opacity duration-500">

                                <div className="flex flex-col text-white px-4">

                                    <span className="font-semibold text-2xl">Banking System</span>

                                    <p className="text-lg font-semibold mt-2">Secure financial platform with transaction management</p>

                                    <div className="flex flex-row justify-center mt-7">

                                        <button className="bg-neutral-50 px-4 py-2 rounded-md text-sm text-black hover:cursor-pointer hover:bg-neutral-200 transition-colors duration-300 ease-in-out delay-100">View Project</button>

                                    </div>

                                </div>

                            </div>

                            {/* description */}

                        </div>

                        {/* cardFooter */}

                        <div className="flex flex-col mt-1 mb-2 p-4">

                            <span className="font-semibold text-lg text-[#24224c]">Banking System</span>

                            <div className="flex flex-row mt-3 justify-around">

                                <span className="font-semibold text-sm">web Application</span>

                                <span className="font-semibold text-sm">FinTech</span>

                            </div>

                        </div>

                        {/* cardFooter */}

                    </div>

                    {/* card03 */}

                    {/* card04 */}

                    <div className="flex flex-col w-[370px] max-w-full h-[360px] rounded-t-md bg-[#FCFCFC] shadow-gray-200 shadow-lg transform transition duration-500 hover:-translate-y-2 hover:shadow-xl">

                        <div className="relative w-full h-[270px] rounded-t-md overflow-hidden group">

                            {/* cardImage */}

                            <Image src="/protfolioImages/representation-user-experience-interface-design.jpg" alt="Portfolio Item 1" layout="fill" objectFit="cover" className="transition-transform duration-500 group-hover:scale-105" />

                            {/* cardImage */}

                            {/* description */}

                            <div className="absolute inset-0 bg-black/80 bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-center transition-opacity duration-500">

                                <div className="flex flex-col text-white px-4">

                                    <span className="font-semibold text-2xl">CRM Solution</span>

                                    <p className="text-lg font-semibold mt-2">Customer relationship management system with analytics</p>

                                    <div className="flex flex-row justify-center mt-7">

                                        <button className="bg-neutral-50 px-4 py-2 rounded-md text-sm text-black hover:cursor-pointer hover:bg-neutral-200 transition-colors duration-300 ease-in-out delay-100">View Project</button>

                                    </div>

                                </div>

                            </div>

                            {/* description */}

                        </div>

                        {/* cardFooter */}

                        <div className="flex flex-col mt-1 mb-2 p-4">

                            <span className="font-semibold text-lg text-[#24224c]">CRM Solution</span>

                            <div className="flex flex-row mt-3 justify-around">

                                <span className="font-semibold text-sm">Enterprise Software</span>

                                <span className="font-semibold text-sm">Data Analysis</span>

                            </div>

                        </div>

                        {/* cardFooter */}

                    </div>

                    {/* card04 */}

                    {/* card05 */}

                    <div className="flex flex-col w-[370px] max-w-full h-[360px] rounded-t-md bg-[#FCFCFC] shadow-gray-200 shadow-lg transform transition duration-500 hover:-translate-y-2 hover:shadow-xl">

                        <div className="relative w-full h-[270px] rounded-t-md overflow-hidden group">

                            {/* cardImage */}

                            <Image src="/protfolioImages/people-taking-photos-food.jpg" alt="Portfolio Item 1" layout="fill" objectFit="cover" className="transition-transform duration-500 group-hover:scale-105" />

                            {/* cardImage */}

                            {/* description */}

                            <div className="absolute inset-0 bg-black/80 bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-center transition-opacity duration-500">

                                <div className="flex flex-col text-white px-4">

                                    <span className="font-semibold text-2xl">Delivery App</span>

                                    <p className="text-lg font-semibold mt-2">Food delivery platform with real-time tracking</p>

                                    <div className="flex flex-row justify-center mt-7">

                                        <button className="bg-neutral-50 px-4 py-2 rounded-md text-sm text-black hover:cursor-pointer hover:bg-neutral-200 transition-colors duration-300 ease-in-out delay-100">View Project</button>

                                    </div>

                                </div>

                            </div>

                            {/* description */}

                        </div>

                        {/* cardFooter */}

                        <div className="flex flex-col mt-1 mb-2 p-4">

                            <span className="font-semibold text-lg text-[#24224c]">Delivery App</span>

                            <div className="flex flex-row mt-3 justify-around">

                                <span className="font-semibold text-sm">Mobile App</span>

                                <span className="font-semibold text-sm">Geolocation</span>

                            </div>

                        </div>

                        {/* cardFooter */}

                    </div>

                    {/* card05 */}

                    {/* card06 */}

                    <div className="flex flex-col w-[370px] max-w-full h-[360px] rounded-t-md bg-[#FCFCFC] shadow-gray-200 shadow-lg transform transition duration-500 hover:-translate-y-2 hover:shadow-xl">

                        <div className="relative w-full h-[270px] rounded-t-md overflow-hidden group">

                            {/* cardImage */}

                            <Image src="/protfolioImages/close-up-person-holding-smartphone.jpg" alt="Portfolio Item 1" layout="fill" objectFit="cover" className="transition-transform duration-500 group-hover:scale-105" />

                            {/* cardImage */}

                            {/* description */}

                            <div className="absolute inset-0 bg-black/80 bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-center transition-opacity duration-500">

                                <div className="flex flex-col text-white px-4">

                                    <span className="font-semibold text-2xl">Learning Platform</span>

                                    <p className="text-lg font-semibold mt-2">Educational system with interactive learning modules</p>

                                    <div className="flex flex-row justify-center mt-7">

                                        <button className="bg-neutral-50 px-4 py-2 rounded-md text-sm text-black hover:cursor-pointer hover:bg-neutral-200 transition-colors duration-300 ease-in-out delay-100">View Project</button>

                                    </div>

                                </div>

                            </div>

                            {/* description */}

                        </div>

                        {/* cardFooter */}

                        <div className="flex flex-col mt-1 mb-2 p-4">

                            <span className="font-semibold text-lg text-[#24224c]">Learning Platform</span>

                            <div className="flex flex-row mt-3 justify-around">

                                <span className="font-semibold text-sm">Web Application</span>

                                <span className="font-semibold text-sm">EdTech</span>

                            </div>

                        </div>

                        {/* cardFooter */}

                    </div>

                    {/* card06 */}

                </div>

            </div>

            {/* protfolioItems */}

        </div>

    );

}

export default OurProtfolio;
