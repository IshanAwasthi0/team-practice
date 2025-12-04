import Link from "next/link"
import { Icon } from '@iconify/react'
const Nav = () => {
    return (
        <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
            <div className="w-[95%] max-w-[1200px] mx-auto flex items-center justify-between h-[12vh] min-h-[70px] px-[3%]">
                
                <div className="text-[4vw] md:text-[2.5vw] lg:text-[1.5rem] font-semibold text-gray-900 tracking-tight">
                     TO DO LIST
                </div>

                <div className="flex gap-[6vw] md:gap-[4vw] lg:gap-12">
                    
                    <Link href='/'>
                        <button className="text-[3.5vw] md:text-[2vw] lg:text-[1.05rem] text-gray-700 hover:text-gray-900 transition font-normal">
                            Home
                        </button>
                    </Link>

                    <Link href='/features'>
                        <button className="text-[3.5vw] md:text-[2vw] lg:text-[1.05rem] text-gray-700 hover:text-gray-900 transition font-normal">
                            Features
                        </button>
                    </Link>

                    <Link href='/about'>
                        <button className="text-[3.5vw] md:text-[2vw] lg:text-[1.05rem] text-gray-700 hover:text-gray-900 transition font-normal">
                            About
                        </button>
                    </Link>

                    <Link href='/contact'>
                        <button className="text-[3.5vw] md:text-[2vw] lg:text-[1.05rem] text-gray-700 hover:text-gray-900 transition font-normal">
                            Contact us
                        </button>
                    </Link>
                    
                </div>

                <div className="flex gap-[4vw] md:gap-[2vw] lg:gap-6 items-center">
                    
                    <Link href='/login'>
                        <button className="text-[3.5vw] md:text-[2vw] lg:text-[1.05rem] text-gray-700 hover:text-gray-900 transition font-normal">
                            Login
                        </button>
                    </Link>

                    <Link href='/contact'>
                        <button className="px-[4vw] md:px-[2.5vw] lg:px-6 py-[1.5vh] md:py-[1vh] lg:py-[0.6rem] border-2 border-gray-900g bg-gray-900  text-white text-[3.5vw] md:text-[2vw] lg:text-[1.05rem] hover:bg-white hover:text-black transition font-normal rounded-md flex items-center gap-2">
                            Get in touch
                            <span className="text-[3vw] md:text-[1.8vw] lg:text-[0.9rem]">↗</span>
                        </button>
                    </Link>

                </div>

            </div>
        </div>
    )
}

export default Nav