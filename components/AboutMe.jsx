import { useState } from "react";
import { BsLockFill, BsUnlockFill, BsFillInfoCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Footer from "./Footer";
import useOnlineStatus from "../utils/useOnlineStatus";
import Error from "./Error";

const AboutMe = () => {
    const [activeItem, setActiveItem] = useState(null);
    
    const handleItemClick = (itemId) => {
        setActiveItem(activeItem === itemId ? null : itemId);
    };

    if (!useOnlineStatus()) return <Error />;

    const email = 'sutarabhishek711@gmail.com';
    const subject = 'Regarding [Subject]';
    const body = 'Hello,';
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    return (
        <div className="main w-full flex flex-col justify-center items-center">
            <div className="mainBodyRestaurantMenu w-full flex flex-col items-center lg:w-[60%] max-[800px]:px-3">
                <div className="firstresNameDetails flex justify-between w-full px-2 my-4 lg:mx-10">
                    <div className="left flex flex-col justify-center gap-2 rounded-xl">
                        <h1 className="name text-lg font-bold font-open max-[800px]:w-full md:text-2xl">ABHISHEK SUBHASH SUTAR</h1>
                        <p className="text-sm font-semibold text-gray-500">FRONTEND WEB DEVELOPER</p>
                    </div>
                </div>
            </div>

            <div className="ACCORDIANS w-[90%] mb-5 flex flex-col justify-center items-center gap-1 lg:mb-10">
                <div
                    className="flex justify-between items-center px-2 bg-black/20 rounded-xl mb-2 w-full py-1 max-[800px]:px-2 lg:w-[70%]"
                    onClick={() => handleItemClick("aboutme")}
                >
                    <span className="summary text-base pl-4 font-open font-bold py-1 lg:text-xl lg:p-3">ABOUT ME</span>
                    <span className="pr-4">{activeItem === "aboutme" ? <BsUnlockFill /> : <BsLockFill />}</span>
                </div>
                {activeItem === "aboutme" && (
                    <div className="flex mb-3 justify-center items-center font-sans bg-black/5 rounded-xl lg:w-[70%]">
                        <div className="content px-4 text-sm font-medium py-4 p-2">
                            Detail-oriented individual with a B.Tech in Computer Science & Engineering, looking for a Frontend Developer position in a fast-growing company to utilize my technical skills and working knowledge of software applications, development and design. I want to work in a competitive environment where I can enhance my skills along with facing new situations and learning new things.
                            <pre>
                                <h4>
                                    Contact Me
                                    <ul>
                                        <li className="font-bold">Mobile: 9322431676</li>
                                        <li>Gmail: sutarabhishek711@gmail.com</li>
                                    </ul>
                                </h4>
                            </pre>
                        </div>
                    </div>
                )}
                <div
                    className="flex justify-between items-center px-2 bg-black/20 rounded-xl mb-2 w-full py-1 max-[800px]:px-2 lg:w-[70%]"
                    onClick={() => handleItemClick("skills")}
                >
                    <span className="summary text-base pl-4 font-open font-bold py-1 lg:text-xl lg:p-3">SKILLS</span>
                    <span className="pr-4">{activeItem === "skills" ? <BsUnlockFill /> : <BsLockFill />}</span>
                </div>
                {activeItem === "skills" && (
                    <div className="flex mb-3 justify-around items-center font-sans bg-black/5 rounded-xl lg:w-[70%]">
                        <div className="content px-4 text-sm p-2 flex justify-around flex-wrap gap-3 py-4">
                            {/* Skills list */}
                            <span className="bg-black/5 font-medium text-slate-700 rounded-md p-2 hover:bg-black/20 hover:transition-transform">REACT JS</span>
                            <span className="bg-black/5 font-medium text-slate-700 rounded-md p-2 hover:bg-black/20 hover:transition-transform">JAVASCRIPT</span>
                            {/* Add other skills similarly */}
                        </div>
                    </div>
                )}
                <div
                    className="flex justify-between items-center px-2 bg-black/20 rounded-xl mb-2 w-full py-1 max-[800px]:px-2 lg:w-[70%]"
                    onClick={() => handleItemClick("socials")}
                >
                    <span className="summary text-base pl-4 font-open font-bold py-1 lg:text-xl lg:p-3">SOCIALS</span>
                    <span className="pr-4">{activeItem === "socials" ? <BsUnlockFill /> : <BsLockFill />}</span>
                </div>
                {activeItem === "socials" && (
                    <div className="flex w-full mb-3 justify-center items-center font-sans bg-black/5 rounded-xl py-3 lg:w-[70%] bg-black">
                        <div className="content px-4 text-sm p-2 flex justify-around w-full">
                            <Link to="https://www.linkedin.com/in/abhishek-sutar-50889325b/">
                                <FaLinkedin />
                                <span className="ml-2">LinkedIn</span>
                            </Link>
                            <Link to="https://github.com/coderabhi007">
                                <FaGithub />
                                <span className="ml-2">Github</span>
                            </Link>
                            <Link to={mailtoLink}>
                                <span>Email</span>
                            </Link>
                        </div>
                    </div>
                )}
                <div
                    className="flex justify-between items-center px-2 bg-black/20 rounded-xl mb-2 w-full py-1 max-[800px]:px-2 lg:w-[70%]"
                    onClick={() => handleItemClick("aboutThisProject")}
                >
                    <span className="summary text-base pl-4 font-open font-bold py-1 lg:text-xl lg:p-3">ABOUT THIS PROJECT</span>
                    <span className="pr-4">{activeItem === "aboutThisProject" ? <BsUnlockFill /> : <BsLockFill />}</span>
                </div>
                {activeItem === "aboutThisProject" && (
                    <div className="flex mb-3 justify-center items-center font-sans bg-black/5 lg:w-[70%]">
                        <div className="content px-4 text-sm p-2 flex flex-col justify-start gap-2">
                            <ul className="flex flex-col justify-between gap-2 lg:items-start">
                                <li>- Authentication with Dummy Json.</li>
                                <li>- Real time Swiggy API DATA of #Nashik.</li>
                                <li>- Detailed Menu page almost same features as Swiggy.</li>
                                <li>- Payment Integration with Razorpay.</li>
                                <li>- Added LAZY LOADING in About-Me page.</li>
                                <li>- 🟢|🔴 Veg & Non-Veg icon is dynamically used based on food.</li>
                                <li>- Every Detail/Data used is dynamically coming from Swiggy API.</li>
                                <li>- Hosted on Netlify</li>
                                <li>- Your Location Will be at Top🔝</li>
                            </ul>
                            <div className="HEAD">Tech stack used:</div>
                            <ul className="flex flex-col justify-between items-start">
                                <li>- ✅ React</li>
                                <li>- ✅ Redux</li>
                                <li>- ✅ React Router v6</li>
                                <li>- ✅ Tailwind CSS</li>
                                <li>- ✅ Custom Hooks</li>
                                <li>- ✅ Material UI</li>
                                <li>- ✅ Netlify for Deployment</li>
                                <li>- ✅ Swiggy API</li>
                            </ul>
                        </div>
                    </div>
                )}
            </div>
           
        </div>
    );
}

export default AboutMe;
