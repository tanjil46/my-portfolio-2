import { useForm } from "react-hook-form";
import useAxios from "./Hooks/useAxios";
import Swal from "sweetalert2";

const bbImage_hosting_key='6d2bae620663c80614c87636edfc98c3';
const bbImage_hosting_api=`https://api.imgbb.com/1/upload?key=${bbImage_hosting_key}`
const Addprojects = () => {
const aAxios=useAxios()
const { register, handleSubmit,reset } = useForm()





const onSubmit=async(data)=>{
    const imageUrl={image:data.image[0]}
        
    const res=await aAxios.post(bbImage_hosting_api,imageUrl,{
      headers:{
        'content-Type':'multipart/form-data'
      }
      
    })
  const imageSrc=res.data.data.image.url
  const projectName=data.name 
  const builtWith=data.built
  const githubClientLink=data.client
  const githubServerLink=data.server
  const description=data.desc 
  const liveLink=data.live
  const postDate=new Date()
  
  
  const projectInfo={projectName,description,imageSrc,builtWith,githubClientLink,githubServerLink,liveLink,postDate}
  console.log(projectInfo)
  
  const response=await aAxios.post('/project',projectInfo)
  console.log(response.data)
  if(response.data.insertedId){
    reset()
    Swal.fire(
      'success',
      'New Project Added Succesfully',
      'success'
    )
  }
  
  
  
  
   }
  
  
  
  
  












    return (
        <div>
           <div className="">
            <form onSubmit={handleSubmit(onSubmit)} className="mx-6">
      
      <div className="flex gap-4">

      <div className="form-control w-full my-6">
  <label className="label">
    <span className="label-text">Project Name*</span>
   
  </label>
  <input {...register('name',{required:true})} type="text" placeholder="Project name" className="input input-bordered w-full " />
  
</div>




      <div className="form-control w-full my-6">
  <label className="label">
    <span className="label-text">Description*</span>
   
  </label>
  <input {...register('desc',{required:true})} type="text" placeholder="description" className="input input-bordered w-full " />
  
</div>



</div>








<div className="form-control w-full my-6">
  <label className="label">
    <span className="label-text">Built With*</span>
   
  </label>
  <input {...register('built',{required:true})} type="text" placeholder="bult with" className="input input-bordered w-full " />
  
</div>



















<div className="form-control w-full my-6">
  <label className="label">
    <span className="label-text">Github Clint Link*</span>
   
  </label>
  <input {...register('client',{required:true})} type="text" placeholder="client link" className="input input-bordered w-full " />
  
</div>





<div className="form-control w-full my-6">
  <label className="label">
    <span className="label-text">Github server link*</span>
   
  </label>
  <input {...register('server',{required:true})} type="text" placeholder="Server link" className="input input-bordered w-full " />
  
</div>









<div className="my-6">

<input type="file" {...register('image',{required:true} )} className="file-input file-input-bordered w-full max-w-xs" />


</div>





    



<div className="form-control w-full my-6">
  <label className="label">
    <span className="label-text">Live Link*</span>
   
  </label>
  <input {...register('live',{required:true})} type="text" placeholder="Live link" className="input input-bordered w-full " />
  
</div>

















      <button className="btn bg-slate-500" type="submit">Post Projects</button> 
    </form>
            </div>  
        </div>
    );
};

export default Addprojects;