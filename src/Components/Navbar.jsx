import React from 'react'
import { useState } from 'react';
import hero from '../images/hero.jpg';
import { Link } from "react-router-dom";
import { motion} from 'framer-motion'

const Navbar = ({diffimage}) => {
     const [open, setOpen] = useState(false); 
     const displayImage = diffimage || hero;
  return (
   <>
   <div className='herosec w-full h-screen relative '>
        <img className='w-full h-180 object-fill' src={displayImage} alt="" />

        <div className='herosec-nav w-full h-20 text-[#D6FE63] uppercase flex justify-between absolute top-10 text-[2.5vw] tracking-tight leading-none'>
          <div className='w-1/2 navs1 px-14 font-bold max-xl:text-[2.9vw] max-lg:text-[3.6vw]'>
            <h1>Sound</h1>
            <h1>Ethics</h1>
          </div>

          <div className='navs2 fontstyle w-1/3 text-right px-10  '>
            <motion.h1 initial={{scaleX:0.9}} whileHover={{scaleX:1}} transition={{duration:0.4}} className='cursor-pointer text-[3.2vw] max-xl:text-[3.7vw] max-lg:text-[4.7vw] '  onClick={() => setOpen(true)}>menu</motion.h1>
          </div>
        </div>
        {open && (
          <motion.div initial={{width:0}}
          animate={{width:600}} transition={{duration:1}} className=" overflow-hidden sidebar absolute top-0 right-0 w-170 h-screen bg-[#D6FE63] text-white flex flex-col gap-4 p-6">
            <button onClick={() => setOpen(false)} className=" fontstyle text-right px-6 mt-2 cursor-pointer text-[3vw] text-[#1D1D1D]  uppercase  max-xl:text-[3.7vw] max-lg:text-[4.7vw]">
                Close 
                </button>
                <div  className='flex flex-col z-100   text-[#1D1D1D] fontstyle uppercase text-[6vw] text-center tracking-tight gap-4 leading-none  max-xl:text-[8.7vw] max-lg:text-[9.7vw] '>
                <Link    to="/About" onClick={() => setOpen(false)}>
                  <motion.h1 initial={{scaleX:1.1}} whileHover={{scaleX:1.4}} transition={{duration:0.4}}>About</motion.h1> </Link>
            <Link to="/Solution" onClick={() => setOpen(false)}>
                  <motion.h1 initial={{scaleX:1.1}} whileHover={{scaleX:1.4}} transition={{duration:0.4}} >Solutions</motion.h1>
            </Link>
            <Link to="/Updates" onClick={() => setOpen(false)}>
                <motion.h1 initial={{scaleX:1.1}} whileHover={{scaleX:1.4}} transition={{duration:0.4}}>Updates</motion.h1>
            </Link>
            <Link to="/Contact" onClick={() => setOpen(false)}>
              <motion.h1 initial={{scaleX:1.1}} whileHover={{scaleX:1.4}} transition={{duration:0.4}}>Contact</motion.h1>
            </Link>
                </div>
          </motion.div>
        )}
      </div>
   </>
  )
}

export default Navbar
