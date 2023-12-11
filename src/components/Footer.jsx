import { FaFacebook, FaGithub, FaLinkedin} from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div>
           <footer className="footer p-10 bg-slate-800 text-neutral-content">
  <aside>
    <div className="flex flex-col space-y-4">
   <Link to='/mypro' className="text-slate-300 font-bold hover:bg-slate-500 p-2 rounded-lg">My Projects</Link>
   <Link to='/about' className="text-slate-300 font-bold hover:bg-slate-500 p-2 rounded-lg">About Me</Link>
   <Link to='/contact' className="text-slate-300 font-bold hover:bg-slate-500 p-2 rounded-lg">Contact Me</Link>
   </div>
  </aside> 
  <nav>
    <header className="footer-title">Connect Me With</header> 
    <div className="grid grid-flow-col gap-4">
     <a target="blank" href="https://www.facebook.com/tan.jil.9823"><FaFacebook className="text-3xl "></FaFacebook></a>
     <a target="blank" href="https://github.com/tanjil46"><FaGithub  className="text-3xl "></FaGithub></a>
     <a target="blank" href="https://www.linkedin.com/in/tanjil-hossain-0b72202a4/"><FaLinkedin  className="text-3xl "></FaLinkedin></a>
      
    </div>
  </nav>
</footer> 
        </div>
    );
};

export default Footer;