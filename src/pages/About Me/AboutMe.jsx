
import { useEffect, useState } from "react";
import wasim from "../../assets/wasimHossain.jpg"
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiFirebase } from 'react-icons/si';

import { Link } from "react-router-dom";

const AboutMe = () => {
    const [text, setText] = useState("Wasim Hossain");

    useEffect(() => {
      const interval = setInterval(() => {
        setText((prevText) => (prevText === "Wasim Hossain" ? "a Web Developer" : "Wasim Hossain"));
      }, 2000);
  
      return () => clearInterval(interval); // Cleanup the interval if the component unmounts
    }, []);
    const skills = [
        { name: 'HTML', icon: <FaHtml5 className="text-orange-600" /> },
        { name: 'CSS', icon: <FaCss3Alt className="text-blue-600" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-500" /> },
        { name: 'React', icon: <FaReact className="text-blue-400" /> },
        { name: 'Firebase', icon: <SiFirebase className="text-yellow-500" /> },
        { name: 'Express.js', icon: <FaNodeJs className="text-green-500" /> }
      ];
    return (
        <>
        <section className="container mx-auto bg-gray-800 text-white">
            <div className="flex">
                <section className="w-1/4 relative border-4 border-orange-400">
                    <img className="-mt-3 -ml-3" src={wasim}/>
                    <div className="absolute left-10 bottom-4">
                        <p>I'm Available on:</p>
                        <p className="flex gap-x-2">
                            <Link to="https://www.facebook.com/wh715/" className="p-1 border-2 border-orange-500 rounded-full "><FaFacebook/></Link>
                            <Link to="https://www.facebook.com/wh715/" className="p-1 border-2 border-orange-500 rounded-full "><FaWhatsapp/></Link>
                        </p>
                    </div>
                </section>
                <section className="w-3/4 md:ml-20 lg:ml-40">
                    <div className="overflow-x-auto">
                        <table className="table-md">
                           <caption className="text-2xl">Hi I'm <span className="text-orange-300">{text}</span> </caption>
                            <tbody>
                            {/* row 1 */}
                            <tr>
                                <td>Name :</td>
                                <td>Wasim Hossain</td>
                                <td>Language :</td>
                                <td>Bangla, English</td>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <td>Nationality :</td>
                                <td>Bangladeshi</td>
                                <td>Phone :</td>
                                <td>+8801718885075</td>
                            </tr>
                            <tr>
                                <td>Address :</td>
                                <td>Dhaka, Bangladesh</td>
                                <td>Email :</td>
                                <td>wasim11hossain@proton.me</td>
                            </tr>

                            </tbody>
                        </table>
                    </div>
                </section>
            </div>




            <div className="md:mt-40">
                    <section>
                        <h1 className="text-3xl">FUN FACTS</h1>
                    </section>

                    <section>
                    <div className="flex shadow">
                        <div className="stat place-items-center">
                            <div className="stat-value">50K+</div>
                            <div className="">Lines of Code</div>
                        </div>

                        <div className="stat place-items-center">
                            
                            <div className="stat-value text-secondary">12+</div>
                            <div className="stat-desc text-secondary">Projects Completed</div>
                        </div>

                        {/* <div className="stat place-items-center">
                            <div className="stat-title">New Registers</div>
                            <div className="stat-value">1,200</div>
                            <div className="stat-desc">↘︎ 90 (14%)</div>
                        </div> */}
                    </div>
                    </section>
            </div>

            <div className="mt-20">
                <section>
                    <h1 className="text-3xl font-bold">Education</h1>
                </section>
                <section className="mt-10">
                    <div>
                        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                            <li>
                            <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5">
                                <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd" />
                            </svg>
                            </div>
                            <div className="timeline-start mb-10 md:text-end">
                            <time className="font-mono italic">2018-2023</time>
                            <div className="text-lg font-black">Diploma in Computer Technology</div>
                            BGIFT Institute of Science and Technology(Bist)
                            </div>
                            <hr />
                            </li>
                            <li>
                                <hr />
                                <div className="timeline-middle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-5 w-5">
                                    <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd" />
                                </svg>
                                </div>
                                <div className="timeline-end mb-10">
                                <time className="font-mono italic">2023-Present</time>
                                <div className="text-lg font-black">B.sc in Computer Science and Technology</div>
                                South East University.
                                </div>
                                <hr />
                            </li>
                            <li>
                                <hr />
                                <div className="timeline-middle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-5 w-5">
                                    <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd" />
                                </svg>
                                </div>
                                <div className="timeline-start mb-10 md:text-end">
                                <time className="font-mono italic">2023-present</time>
                                <div className="text-lg font-black">MERN Stack Development.(Diploma)</div>
                                Creative IT Institute.
                                </div>
                                <hr />
                            </li>
                            
                        </ul>
                    </div>
                </section>
            </div>

            <div>
            <section className=" py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white flex items-center gap-x-2 justify-center text-gray-500 p-4 rounded shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="text-5xl mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
            </div>
            </section>






            
        </>
    );
};

export default AboutMe;