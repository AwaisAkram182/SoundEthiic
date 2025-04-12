import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <>
    <div  className='w-full   relative top-105 h-[50vh] mt-25 '>
              <img className='w-full h-[140vh]  ' src="https://cdn.prod.website-files.com/66715118c4748bd61331f714/667e48db2e1eb1ae0df324b0_snd-etc-footer-img-p-1080.jpg" alt="" />
                  <motion.div  initial={{opacity:0}} transition={{duration:3}} whileInView={{ opacity:100}} className='flex flex-col items-center leading-none uppercase fontstyle absolute top-20 right-[50%] left-[50%]'>
                    <h1 className='text-[#D6FE63] text-[5vw] max-lg:text-[5.8vw]' >Sound </h1>
                    <h1 className='text-[#D6FE63] text-[5vw] max-lg:text-[5.8vw]' >Ethics</h1>
                  </motion.div>
                  <motion.div  initial={{opacity:0}} transition={{duration:3}} whileInView={{ opacity:100}} className='w-full   absolute flex flex-col leading-10 items-center justify-center top-70 text-white'>
                       <img className='w-[35vw] max-lg:w-[50vw] '  src="https://cdn.prod.website-files.com/66715118c4748bd61331f714/66778ea08dc4c4408ce083c3_snd-etc-angle.svg" alt="" />
                        <div className='w-[35vw] bg-[#D6FE63] relative bottom-1  h-100 max-lg:w-[50vw]'></div>
                            <div className='absolute top-30 uppercase flex leading-none gap-1 flex-col items-center'>
                             <h1 className='text-[#1D1D1D] herotxt text-[2.5vw] max-lg:text-[3vw]'>Your Voice Matters!</h1>
                             <h4 className='text-[#1D1D1D] nor text-[1.7vw] tracking-tighter font-semibold max-lg:text-[2.1vw]'>Advocate for Fair AI in Music</h4>
                             <h4 className='text-[#1D1D1D] nor text-[1.1vw] pt-5 w-3/4 text-center tracking-tighter font-semibold max-lg:text-[1.6vw]'>Sign our petition and support the future of music artists</h4>
                           <input className='fontstyle w-3/4 max-lg:w-[40vw] mt-7 h-10 text-[#D6FE63] bg-[#1D1D1D] px-5 text-2xl' type="text" placeholder='FIRST NAME' required />
                           <input className='fontstyle w-3/4 max-lg:w-[40vw]  h-10 text-[#D6FE63] bg-[#1D1D1D] px-5 text-2xl' type="text" placeholder='Last name' required />
                           <input className='fontstyle w-3/4 max-lg:w-[40vw] h-10 text-[#D6FE63] bg-[#1D1D1D] px-5 text-2xl' type="text" placeholder='EMAIL ADDRESS' required />
                           <Link to="/Contact" className='fontstyle cursor-pointer font-extrabold text-2xl underline uppercase pt-9 text-[#1D1D1D] '>Submit </Link>
                            </div>
                          </motion.div>
                          <motion.div  initial={{opacity:0}} transition={{duration:3}} whileInView={{ opacity:100}} className='absolute px-10 text-[#D6FE63] herotxt text-[4.5vw] tracking-tight uppercase top-130 max-lg:hidden'>
                          <h1 className=''>Contact us</h1>
                          <h1 className='text-[3vw]'> INFO@Sound.Ai</h1>
                         
                          </motion.div>
                          <motion.div  initial={{opacity:0}} transition={{duration:3}} whileInView={{ opacity:100}} className='absolute px-10 flex flex-col items-end text-[#D6FE63] right-0 herotxt text-[4vw] tracking-tight max-lg:hidden uppercase top-160'>
                          <h1 className=''>Johar town lhr</h1>
                          <h1 className='text-[4vw]'> finding us</h1>
                         
                          </motion.div>
                          
                  </div>
    </>
  )
}

export default Footer
