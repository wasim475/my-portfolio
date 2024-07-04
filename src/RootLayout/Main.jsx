import { Outlet } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import Navbar from "../pages/Navbar/Navbar";
import Footer from "../pages/Footer/Footer";


const Main = () => {
    return (
        <>
           <Navbar/>
           <Outlet/> 
           <Footer/>
        </>
    );
};

export default Main;