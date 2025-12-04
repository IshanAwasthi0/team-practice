import React from 'react'

const page = () => {
    return (
        <>
            <div className='bg-white w-screen h-screen flex justify-center items-center'>
                <div className=' flex flex-col gap-10 items-center justify-center md:flex-row w-fill lg:gap-32'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='hidden font-bold text-neutral-800 text-5xl items-center justify-center tracking-wider leading-15 md:block lg:block'>Have any</h1>
                        <h1 className='font-bold text-neutral-800 text-5xl items-center justify-center tracking-wider leading-15 md:visible'>Suggestions?</h1>
                    </div>
                    
                    <form action="" className='flex flex-col w-80 h-90 bg-white border border-neutral-800 justify-center gap-4 items-center p-8 rounded-xl md:h-100 md:w-95 md:rounded-2xl'>
                        <p className='text-3xl font-bold text-neutral-800 mb-5'>Contact Us</p>
                        <input type="text" placeholder="Full name" className=' border border-black bg-white rounded-xl text-xs text-black p-3 w-60 h-10 md:w-75'/>
                        <input type="text" placeholder="Email" className='border border-black rounded-xl text-xs text-black p-3 w-60 h-10 bg-white md:w-75'/>
                        <textarea name="feedback" id="1" placeholder="Tell us about your products" className='border border-black rounded-xl text-xs text-black p-3 w-60 h-25 bg-white md:w-75 '></textarea>
                        <button type="submit" className="rounded-xl w-60 h-12 bg-[#505051] hover:text-white text-white py-2 px-6 border-white border text-sm hover:bg-neutral-400 md:w-75 hover:border transition duration-200  ">Submit</button>
                    </form>
                </div>
            </div>
        </>

    )
}

export default page