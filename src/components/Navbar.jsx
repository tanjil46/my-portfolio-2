import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
const[isTrue,setIsTrue]=useState(false)


const barHandler=()=>{
  setIsTrue(!isTrue)
}







    return (
      <div className="">
        <div className="flex justify-around items-center">
          <div className="">
          
<p  className="text-2xl font-bold text-white">TAN<span className="text-3xl text-orange-500" >JIL</span></p>
           
          </div>
          <div className="my-4">
            <ul className="space-x-6  md:block hidden">
                <Link className="text-slate-300 font-bold text-lg  hover:border-b-2 hover:border-yellow-600 ">HOME</Link>
                <Link to='/mypro' className="text-slate-300 font-bold text-lg  hover:border-b-2 hover:border-yellow-600">MY PROJECTS</Link>
                <Link to='/about' className="text-slate-300 font-bold text-lg  hover:border-b-2 hover:border-yellow-600">ABOUT ME</Link>
                <Link to='/contact' className="text-slate-300 font-bold text-lg hover:border-b-2 hover:border-yellow-600 ">CONTACT ME</Link>
            </ul>

          </div>

          <button onClick={barHandler} className=" md:hidden block"><FaBars className="text-2xl text-white"></FaBars></button>
          </div>




          <div className="my-4">
            <ul className={`space-x-6 justify-center items-center flex flex-col space-y-8 text-center  md:hidden ${isTrue ? 'block':'hidden'} `}>
                <Link className="text-slate-300 font-bold text-lg hover:border-b-2 hover:border-yellow-600">HOME</Link>
                <Link to='/mypro' className="text-slate-300 font-bold text-lg hover:border-b-2 hover:border-yellow-600">MY PROJECTS</Link>
                <Link to='/about' className="text-slate-300 font-bold text-lg hover:border-b-2 hover:border-yellow-600">ABOUT ME</Link>
                <Link to='/contact' className="text-slate-300 font-bold text-lg hover:border-b-2 hover:border-yellow-600">CONTACT ME</Link>
            </ul>

          </div>







        </div>
    );
};

export default Navbar;