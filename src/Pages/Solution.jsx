import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import solutionimg from '../images/solutionimg.jpg'
import { motion } from 'framer-motion'
import { Link } from 'react-router'
import Footer from '../Components/Footer'
"use client"

const Solution = () => {
  const data=[{
 num:"01:",
 desc:"Attribution",
 para:"Detailed metadata ensures every artist and rights holde'r contribution is recognized."
  },
  {
    num:"02:",
 desc:"Extraction",
 para:"Our advanced processing  data scientists have access to high-quality, detailed datasets for machine learning models"
  }
  ,{
   num:'03:',
 desc:"Permission",
 para:"Data scientists only have access  ensuring strict compliance with legal and ethical standards."
  },{
    num:"04:",
 desc:"reportings",
 para:"Detailed analytics on dataset usage, providing transparency and fostering trust among stakeholders."
  }
  
]
  return (
    <>
  <Navbar diffimage={solutionimg} />
  <div className='text-[#DEFE63] w-full  absolute bottom-40 flex flex-col items-center uppercase tracking-tight leading-none herotxt'>
        <motion.h1 initial={{scaleX:0.5}} whileInView={{scaleX:0.8}} transition={{duration:0.7}} className='text-[16vw] tracking-tight'>SOLUTIONS</motion.h1>
        <motion.img initial={{opacity:0}} whileInView={{opacity:100}} transition={{duration:2}}  src="https://cdn.prod.website-files.com/66715118c4748bd61331f714/6683aeb1006c464f9a635cef_snd-etc-about-icons.svg" alt="" />
        <motion.h4 initial={{opacity:0}} whileInView={{opacity:100}} transition={{duration:3}} className=' text-[1.7vw] tracking-tighter relative top-35  nor '>Our advanced processing pipeline extracts  features from audio files, </motion.h4>
   </div>
        {/* artistsec */}
       <div  className=' w-full h-screen flex relative justify-between top-30'>
           <div className='sec1 h-screen w-2/4  pt-10   flex items-center flex-col leading-none '>
           <h1  className='text-2xl fontstyle tracking-tight '>Standardizing AI Rights</h1>
           <h1 className='nor text-[19px] tracking-tight'>Sound Ethics</h1>
           <motion.h1 initial={{scaleX:0.5}} whileInView={{scaleX:0.8}} transition={{duration:1}} className='text-[10vw] uppercase herotxt mt-17 tracking-tighter whitespace- text-[#1D1D1D] '>From labs</motion.h1>
          <motion.h1 initial={{scaleX:0.5}} whileInView={{scaleX:0.8}} transition={{duration:1}} className='text-[10vw] uppercase herotxt  tracking-tighter -mt-[18px]  text-[#1D1D1D] '>to legends</motion.h1>
              <div className='w-[70%]   text-center py-5'>  
                    <motion.p initial={{scaleX:0.5}} whileInView={{scaleX:0.8}} transition={{duration:1}} className='nor text-[19px]'>With the powerful emergence of AI it's essential to standardize AI rights, focusing on copyrights and attributions. Metadata is key for correct attributions in AI applications. We collaborate with industry partners to create open AI rights frameworks, ensuring ethical integration of AI that respects all stakeholders' rights.</motion.p>
              </div>
           </div>
           <div className='sec2 w-2/5 h-screen bg-pink-400'>
              <img className='w-full h-screen' src="https://cdn.prod.website-files.com/66715118c4748bd61331f714/668740d8abcc9034a1943bd6_snd-etc-labs-img.jpg" alt="" />
           </div>
       </div>
       {/* cardssec */}
       <div className='w-full relative flex-col justify-center  items-center top-20 h-screen '>
         <motion.div initial={{x:-1000}} whileInView={{x:0}} transition={{duration:1.5}} viewport={{once:true}} className='headercards w-full flex justify-center  items-center  gap-10 h-80 mt-30 '>
              <div  className='w-[30vw] h-[30vh] uppercase bg-[#1D1D1D] text-[#DEFE63] -rotate-10'>
                 <div className='w-full h-full text-[3.5vw]  fontstyle leading-none tracking-tight flex flex-col justify-center items-center'>
                    <h1>machine learning</h1>
                    <h1>training data</h1>
                 </div>
              </div>
              <div className='w-[30vw] h-[30vh] -rotate-10 bg-[#1D1D1D] text-[#DEFE63]'>
              <div className='w-full h-full text-[3.5vw]  fontstyle leading-none tracking-tight flex flex-col justify-center items-center'>
                    <h1>artist's</h1>
                    <h1>attribution</h1>
                 </div>
              </div>
          </motion.div>
        {data.map((items,index)=>{
        
          return(
            <motion.div initial={{y:-70}} whileInView={{y:0}} transition={{duration:3}} viewport={{once:true}} key={index} className='smallCards w-full flex flex-col   tracking-tighter h-37   pt-20 '>
            <div className='flex  w-full   justify-center'>
              <div className='flex  w-[70%] ml-30  justify-center'>
                  <h1 className='fontstyle flex text-[2.3vw] text-[#1D1D1D]'>{items.num}</h1>
                    <div className='flex ml-20  gap-30 '>
                      <h1 className='text-[2.3vw] fontstyle text-[#1D1D1D]' >{items.desc}</h1>
                      <p className='text-[#1d1d1d]  nor text-[1.5vw]'>{items.para}</p>
                  </div>
              </div>
            </div>
            <hr className="border-t border-[#1D1D1D] w-[70%]  my-4 mx-auto" />
        </motion.div>
          );
        })};
           
              
       </div>
        {/* artistsec2*/}
        <div className=' w-full h-screen flex relative justify-between top-120'>
           <div className='sec1 h-screen w-2/4  pt-10   flex items-center flex-col leading-none '>
           <h1 className='text-2xl fontstyle tracking-tight '>Standardizing AI Rights</h1>
           <h1 className='nor text-[19px] tracking-tight'>Sound Ethics</h1>
           <h1 className='text-[10vw] uppercase herotxt mt-17 tracking-tighter whitespace- text-[#1D1D1D] '>our ethos</h1>
          <h1 className='text-[10vw] uppercase herotxt  tracking-tighter -mt-[18px]  text-[#1D1D1D] '>ketoes</h1>
              <div className='w-[70%]   text-center py-5'>  
                    <p className='nor text-[19px]'>We offer a music production program in partnership with universities and their record labels, mentoring artists through the entire process of a collaborative project using cutting-edge AI tools. By experimenting with new workflows, we uncover key insights into AI rights solutions while offering exclusive opportunities to emerging artists, songwriters, and producers</p>
              </div>
           </div>
           <div className='sec2 w-2/5 h-screen bg-pink-400'>
              <img className='w-full h-screen' src="https://cdn.prod.website-files.com/66715118c4748bd61331f714/66889d56eafa6e735baa920c_snd-etc-ethos-api-p-1600.jpg" alt="" />
           </div>
       </div>
       {/* talk with us sec */}
       <div className='w-full h-screen bg-[#1D1D1D] text-[#DEFE63] relative top-130 flex flex-col leading-none   '>
      <motion.div initial={{x:-1000}} whileInView={{x:0}} viewport={{once:true}}  transition={{duration:1}}  className='uppercase fontstyle mt-28 flex-col  items-center  flex '>
        <h1 className='text-[14vw] tracking-tight scale-y-110'>talk to us</h1>
        <h4 className='text-center nor text-[1.1vw] w-2/5 mt-8 tracking-wide '>Whether you are from a university, part of the music industry, a data scientist, or involved with a government or non-profit organization, we welcome your interest in supporting our advocacy efforts.</h4>
            <div  className='bg-[#DEFE63] mt-16   -rotate-9 flex justify-center items-center w-[12vw] h-12  uppercase text-[#1D1D1D]'>
               <Link className='text-[2vw] hover:underline' to="/" >Contact us</Link>
           </div>
      </motion.div>
    </div>
    {/* footer sec */}
    <Footer/>
    </>
  )
}

export default Solution
