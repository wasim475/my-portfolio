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
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/blogs">Blogs</NavLink>
            </li>
            <li>
              <NavLink to="/about-us">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/contact-us">Contact Us</NavLink>
            </li>
            </>
            )
    return (
        <div>
             <header className="bg-gray-800 text-white p-4">
            <nav className="container mx-auto">
                <div className="">
                    <button onClick={toggleNavbar} className="focus:outline-none">
                        {
                            isOpen? <RxCross2/>: <FaBars/>
                        }
                    </button>
                </div>
                <motion.ul
                initial={false}
                animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className={`mt-8  absolute top-2 left-0 w-full bg-gray-800 md:bg-transparent overflow-hidden`}
                style={{ overflow: 'hidden' }}
                >
                    {Navlinks}
                </motion.ul>
            </nav>
            </header>
        </div>
    );
};

export default Navbar;