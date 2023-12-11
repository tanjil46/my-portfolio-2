
import backImage from './imag/a75b5ad188176b532c3be6f8f35f4291.jpg'
import myImag from './imag/IMG_20230419_040316_767.jpg'
import { TypeAnimation } from 'react-type-animation';



const Banner = () => {


    const backGroundImage={
        backgroundImage:`url(${backImage})`,
       
    }
      




    return (
        <div className='bg-cover h-screen flex md:flex-row flex-col items-center justify-between p-10' style={backGroundImage}>

          <div className="space-y-5 md:text-start text-center">
           
          
        <p className='text-white text-2xl md:text-5xl'>HI,I AM</p>
        
        <p className='text-3xl md:text-6xl text-white'><span className='text-4xl md:text-7xl text-pink-600'>T</span>ANJIL HOSSAIN</p>
        <TypeAnimation className='text-white text-2xl md:text-3xl' sequence={[
            'A passionate',
            500,
            'Front End',
            500,
            ' Web devloper',
            500
      
        ]}
        
       
        repeat={Infinity}
      
       />
          <div className="">

           
           <a href='/public/my resume 2.pdf' download='resume download' 
             className='btn '>DOWNLOAD RESUME</a> 
          </div>


          


        </div>  


         <div className="">
            <img className='w-full md:w-[550px] rounded-full ' src={myImag}></img>
         </div>








        </div>
    );
};

export default Banner;