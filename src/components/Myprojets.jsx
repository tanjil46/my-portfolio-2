
import forum from './imag/forum-logojpg.jpg'
import fab from './imag/desktop-wallpaper-food-and-beverages-vector-1617771-food-logo.jpg'
import social from './imag/palning11.jpg'
const Myprojets = () => {
    return (
        <div>
            <p className="text-center  md:text-2xl  font-bold text-white  my-10 ">My Portfolio Projects</p>
            
           <div className="my-12 min-h-screen grid md:grid-cols-2 gap-6 lg:grid-cols-3 p-6">

            <div className="card  h-[600px] bg-base-100 shadow-xl ">
  <figure><img className='w-[300px]' src={forum} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="font-bold md:text-2xl text-center">FORUM</h2>
    <p className='text-justify'>Forum is an online communication website where people can share their stories on different ways.A user can comment can give like or dislike even if they want they can share  with others User will have his dashboard where he can post,update even he/she can see her/his post can report comment if anyone do any Inappropriate comments he/she can delete post.User can Take membership by payment and after payment they can do as much post they want.Admin has dashboard also from where he/she can give admin role to user,update announcement delete user etc.</p>


<p className='font-bold'>Built With React, Node, Expressjs, Firebase, MongoDB, Tailwind css, JWT, Axios,Vercel
 </p>



    <div className="flex justify-center gap-3">
      <a className='btn bg-red-500 font-bold text-white hover:bg-slate-500' href='https://github.com/tanjil46/forum-client-side' target='blank'>CLIENT</a>
      <a target='blank' className='btn bg-cyan-500 font-bold text-white hover:bg-slate-500' href='https://github.com/tanjil46/forum-serevr-side'>SERVER</a>
      <a target='blank' className='btn bg-orange-500 font-bold text-white hover:bg-slate-500' href='https://forum-online-6d608.web.app/'>LIVE</a>
    </div>
  </div>
</div>



  
           <div className="card  h-[600px] bg-base-100 shadow-xl ">
  <figure><img className='w-[300px]' src={fab} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="font-bold md:text-2xl text-center">FOOD AND BEVERAGE</h2>
    <p className='text-justify'>Food and Beverage is online Shopping Website .There is  six types of Category foods and beverage.by Clicking on any category on food/beverage it will take the food/beverage list based category.It can Update,Post and Also can Add Cart
</p>


<p className='font-bold'>Built With  React, Node, Expressjs, Firebase, MongoDB, Tailwind css, JWT ,Vercel

 </p>



    <div className="flex justify-center gap-3">
      <a className='btn bg-red-500 font-bold text-white hover:bg-slate-500' href='https://github.com/tanjil46/food-beverage-client-side' target='blank'>CLIENT</a>
      <a target='blank' className='btn bg-cyan-500 font-bold text-white hover:bg-slate-500' href='https://github.com/tanjil46/food-beverage-server-side'>SERVER</a>
      <a target='blank' className='btn bg-orange-500 font-bold text-white hover:bg-slate-500' href='https://food-beverage-user.web.app/'>LIVE</a>
    </div>
  </div>
</div>







 
<div className="card  h-[600px] bg-base-100 shadow-xl ">
  <figure><img className='w-[300px]' src={social} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="font-bold md:text-2xl text-center">EVENT MANAGEMENT</h2>
    <p className='text-justify'>Simple event management website.We organize best event like marriage event,birthday party,anniversary event and many

</p>


<p className='font-bold'>Built With   React, Node, Firebase, Tailwind css

 </p>



    <div className="flex justify-center gap-3">
      <a className='btn bg-red-500 font-bold text-white hover:bg-slate-500' href='https://github.com/tanjil46/social-service' target='blank'>CLIENT</a>
     
      <a target='blank' className='btn bg-orange-500 font-bold text-white hover:bg-slate-500' href='https://social-events-3507f.web.app/'>LIVE</a>
    </div>
  </div>
</div>
































      {/* main div */}
           </div>












        </div>
    );
};

export default Myprojets;