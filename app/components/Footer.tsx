import { Icon } from '@iconify/react';

const Footer = () => {
    return (
        <>
 <div className="flex justify-center items-center bg-white">
  <div className="flex gap-40 text-xl text-black"> 
    <div>
    <p className="text-black font-bold">Your To Do List</p>
    <div className="text-gray-400  text-sm mt-5 space-y-3">
        <p>Explore our amazing features for free</p>
        <p>Enjoy finishing your tasks in time</p>
        <p>have no work left pending</p>
    </div>
    </div>

    <div>
    <p className="text-black font-bold ">About Us</p>
    <div className="text-gray-400  text-sm mt-5 space-y-3">
    <p>About this app</p>   
    <p>Contact us</p>
    <p>Features</p>
    </div>
    </div>
 

    <div>
    <p className="text-black font-bold ">Get In Touch</p>
    <div className="text-gray-400 text-sm mt-5 space-y-3   ">
        <p>Questions or Feedbacks?</p>
        <p>We would love to hear from you</p>
        <Icon icon="mdi:twitter" width="24" height="24" />
        <Icon icon="iconoir:instagram" width="24" height="24" />
        <Icon icon="ic:outline-facebook" width="24" height="24" />
    </div>

    </div>
   </div>
</div>
        
        </> 
    )
}
export default Footer