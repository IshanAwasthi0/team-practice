

const Footer = () => {
    return (
        <>
 <div className="flex justify-center items-center bg-white">
  <div className="flex gap-40 text-xl text-black"> 
    <div>
    <p>Your To Do List</p>
    </div>

    <div>
    <p className="text-black font-bold text-center">About Us</p>
    <div className="text-black text-sm mt-5 space-y-3">
    <p>About this app</p>   
    <p>Contact us</p>
    <p>Features</p>
    </div>
    </div>
 

    <div>
    <p className="text-black font-bold text-center">Get In Touch</p>
    <div className="text-black text-sm mt-5 space-y-3">
        <p>Questions or Feedbacks?</p>
        <p>We would love to hear from you</p>
    </div>

    </div>
   </div>
</div>
        
        </> 
    )
}
export default Footer