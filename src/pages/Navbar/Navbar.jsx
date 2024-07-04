import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
      };
  
      let Navlinks = (
          <>
            <li className='mt-2 hover:underline hover:font-bold text-lg hover:ml-2'>
              <NavLink to="/">Home</NavLink>
            </li>
            <li className='mt-2 hover:underline hover:font-bold text-lg hover:ml-2'>
              <NavLink to="/about">About</NavLink>
            </li>
            <li className='mt-2 hover:underline hover:font-bold text-lg hover:ml-2'>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li className='mt-2 hover:underline hover:font-bold text-lg hover:ml-2'>
              <NavLink to="/blogs">Blogs</NavLink>
            </li>
            </>
            )
    return (
        <div className="container mx-auto">
             <header className=" text-white fixed top-2 left-4 z-50">
            <nav className=''>
                <div className="">
                    <button onClick={toggleNavbar} className="focus:outline-none rounded-full p-3 bg-gray-400">
                        {
                            isOpen? <RxCross2/>: <FaBars/>
                        }
                    </button>
                </div>
                <motion.ul
                initial={false}
                animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className={`mt-12 absolute top-2 left-0 w-24 px-4 rounded-xl  bg-gray-800`}
                style={{  }}
                >
                    {Navlinks}
                </motion.ul>
            </nav>
            </header>
        </div>
    );
};

export default Navbar;