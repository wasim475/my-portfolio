import { Outlet } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import Navbar from "../pages/Navbar/Navbar";


const Main = () => {
    return (
        <>
           <Navbar/>
           <Outlet/> 
        </>
    );
};

export default Main;