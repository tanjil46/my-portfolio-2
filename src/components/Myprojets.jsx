
import forum from './imag/forum-logojpg.jpg'
import fab from './imag/desktop-wallpaper-food-and-beverages-vector-1617771-food-logo.jpg'
import social from './imag/palning11.jpg'
import useAxios from './UPload/Hooks/useAxios'
import { useEffect, useState } from 'react'
const Myprojets = () => {
const aAxios=useAxios()
const[projects,setProjects]=useState([])
  useEffect(()=>{
 
    aAxios.get('/project')
    .then(res=>{
      setProjects(res.data)
    })
},[aAxios])





const newToOlder = projects.sort((a, b) => new Date(b.date)- new Date(a.date));
 


console.log(newToOlder)








    return (
        <div>
            <p className="text-center  md:text-2xl  font-bold text-white  my-10 ">My Portfolio Projects</p>
            
           <div className="grid md:grid-cols-3 grid-cols-1 my-4 p-10">
            {
              newToOlder.map((project,idx)=> <div key={idx} className="card md:w-96 my-3 w-full bg-base-100 shadow-xl">
              <figure><img className='w-full  h-[250px]' src={project?.imageSrc} /></figure>
              <div className="card-body">
                <h2 className="text-center font-bold md:text-xl">{project?.projectName}</h2>
               
                <p className='text-center'>{project?.description}</p>
                <div className="flex justify-center gap-2">
                 <a target='blank' className='btn bg-cyan-500' href={project?.githubClientLink}>CLIENT</a>
                {
                  project?.githubServerLink===null?'':<a target='blank' className=' btn bg-pink-500' href={project?.githubServerLink}>SERVER</a>
                } 
                 <a target='blank' className='btn bg-teal-500' href={project?.liveLink}>LIVE</a>
                </div>
              </div>
            </div>)
            }
           </div>











</div>















    );
};

export default Myprojets;