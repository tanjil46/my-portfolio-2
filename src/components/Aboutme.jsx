
import './Aboutme.css'
const Aboutme = () => {
    return (
        <div className="text-white  my-12 p-10">
            <p className="md:text-6xl  text-2xl family">ABOUT ME...</p>
          <hr></hr>

             <div className="my-10">
     <p className='text-white font-bold  pt-5  md:text-xl'>SUMMARY:</p>
     <p>Experienced FRONT-END web Developer with expertise in React.js, Node.js, Express.js and
MongoDB.BestIn using framework and Libraries like tailwind css,daisy ui,flowbite react router Skilled in using tools such as Github, Netlify, Firebase, Stripe, Figma, NPM, Vercel and ChatGPT.</p>
             </div>


          <div className="my-10 ">
          <p className='text-white font-bold  pt-5 md:text-xl'>MY TECHNICAL SKILLS:</p>
        <div className="grid lg:grid-cols-3 grid-cols-1 lg:text-center gap-4 space-y-6">


        <div className="">
            <p className='md:text-lg font-bold '>Experties:</p>
            
                <li>React Router</li>
                <li>Javascript</li>
                <li>Html & css</li>
                <li>MongoDB</li>
                <li>Tailwind Css</li>
            
        </div>





        <div className="">
            <p className='md:text-lg font-bold'>Comfortable</p>
            
                <li>React Router</li>
                <li>Javascript</li>
                <li>Html & css</li>
                <li>Firebase</li>
                <li>Tailwind Css</li>
                
        </div>


        


        <div className="">
            <p className='md:text-lg  font-bold'>Tools</p>
            
                <li>ChatGpt</li>
                <li>Figma</li>
                <li>Vercel</li>
                <li>Github</li>
                <li>Netlify</li>
                <li>Stripe</li>
            
        </div>






        </div>
          </div>

<div className="">
<p className='text-white font-bold  pt-5 md:text-xl'>EXPERIENCE:</p>
<li>Worked on the development of the companys ed-tech platform using React, Node.js, and MongoDB</li>
<li>Implemented features such as user authentication, Api Conncetions, optimized code</li>
<li>Collaborated with the design team to ensure a seamless user experience</li>
</div>



        </div>
    );
};

export default Aboutme;