import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { IoPerson } from "react-icons/io5";
import { MdOutlineFileDownload } from "react-icons/md";
import { Link, NavLink } from 'react-router-dom';
import wasimImg from "../../assets/myPic/wh3.png"



export const Home = () => {
    
    const [text, setText] = useState("I'm Wasim Hossain");

    useEffect(() => {
      const interval = setInterval(() => {
        setText((prevText) => (prevText === "Wasim Hossain" ? "A Web Developer" : "Wasim Hossain"));
      }, 2000);
  
      return () => clearInterval(interval); // Cleanup the interval if the component unmounts
    }, []);

 
  return (
    <>
        <section className="bg-gray-800 text-white p-4">
           
            <div className='md:flex'>
                <section className='md:w-1/3 flex justify-center items-center'>
                    <img className='w-60' src={wasimImg}/>
                </section>
                <section className='md:w-2/3 mt-3 md:mt-0'>
                    <h1>HI THERE!</h1>
                    <h2 className='text-4xl mt-4 mb-4'>I`M <span className='text-orange-300'>{text}</span></h2>
                    <p>
                    Hello, I'm Wasim Hossain, a versatile web developer proficient in HTML, CSS, Tailwind CSS, React, Firebase, and Express.js. My journey into the world of web development began with a fascination for creating intuitive and visually captivating interfaces. With a solid foundation in frontend technologies like React and Tailwind CSS, I specialize in crafting responsive and elegant web applications that prioritize user experience. My backend skills in Firebase and Express.js enable me to build robust and scalable solutions that meet modern digital demands. Passionate about learning and innovation, I thrive in dynamic environments where creativity meets technical expertise. Beyond coding, I enjoy exploring new technologies, collaborating on impactful projects, and continuously refining my craft.
                    </p>
                    <div className='mt-10 flex gap-x-10'>
                        <Link to="/about" className='flex justify-center items-center gap-x-2 hover:bg-white font-semibold hover:text-orange-500 rounded-full px-8 py-2 delay-150 transition-colors bg-orange-500'> <IoPerson/> MORE ABOUT ME</Link>
                        <a
                        href="/assets/Cv/Demo Resume.docx"
                        download
                        className="flex justify-center items-center gap-x-2 hover:text-white font-semibold hover:bg-orange-500 rounded-full px-8 py-2 text-orange-500 delay-150 transition-colors bg-white"
                      >
                        <MdOutlineFileDownload /> CV
                      </a>
                    </div>
                </section>
            </div>
        </section>
    </>
  )
}
