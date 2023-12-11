import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";


const Roots = () => {
    const[spinner,setSpinner]=useState(true)
    useEffect(()=>{
        setTimeout(()=>{
       setSpinner(false)
      
      
      
        },4000)
        
    },[])
    return (
        <div className="">
          {
            spinner?<div className="min-h-screen text-center items-center flex opacity-90 bg-white">
                <p className="mx-auto">
            <TypeAnimation className="text-yellow-500  font-bold md:text-3xl" sequence={[
                'WELCOME',
                500,
                'TO',
                500,
                'TANJIL`S',
                500,
                'PORTFOLIO',
                500
            ]}
             
            repeat={Infinity}

            />
             </p>
                 </div>:
          


        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
}
        </div>
    );
};

export default Roots;