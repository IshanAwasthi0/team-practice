import { Icon } from '@iconify/react';

const Footer = () => {
  return (
    <>
      <div>
        <div className="bg-white w-full absolute bottom-0 left-0">
            <div className="flex justify-between max-w-7xl mx-auto gap-20 text-xl text-black pt-10 pb-10 flex-wrap">

            <div>
              <p className="font-sans font-bold text-3xl text-gray-800 tracking-tight">
                ✒️ TO DO LIST
              </p>
              <div className="font-sanstext text-gray-400 text-sm mt-5 space-y-1">
                <p>Organize your tasks efficiently</p>
                <p>never be late to submit a task ever agin</p>
                <p>Always have all of your work finished on time.</p>
              </div>
            </div>

            <div>
              <p className="text-black font-bold">Useful links</p>
              <div className="text-gray-400 text-sm mt-5 space-y-3">
                <p>About us</p>
                <p>Contact us</p>
                <p>FAQs</p>
                <p>Terms of services</p>
                <p>Privacy policies</p>
              </div>
            </div>

            <div>
              <p className="text-black font-bold">Your To Do List</p>
              <div className="text-gray-400 text-sm mt-5 space-y-3">
                <p>Explore our amazing features for free</p>
                <p>Enjoy finishing your tasks in time</p>
                <p>have no work left pending</p>
              </div>
            </div>

            <div>
              <p className="text-black font-bold">About Us</p>
              <div className="text-gray-400 text-sm mt-5 space-y-3">
                <p>About this app</p>
                <p>Contact us</p>
                <p>Features</p>
              </div>
            </div>

            <div>
              <p className="text-black font-bold">Get In Touch</p>
              <div className="text-gray-400 text-sm mt-5 space-y-3">
                <p>Questions or Feedbacks?</p>
                <p>We would love to hear from you</p>
                <div className="flex gap-8 mt-10">
                  <Icon icon="mdi:twitter" width="30" height="30" />
                  <Icon icon="iconoir:instagram" width="30" height="30" />
                  <Icon icon="ic:outline-facebook" width="30" height="30" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

