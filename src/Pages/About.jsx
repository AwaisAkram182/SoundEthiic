import React from 'react'
import Navbar from '../Components/Navbar'
import Aboutimage from '../images/Aboutimage.jpg'
import { motion } from 'framer-motion'
import aboutsec1img from '../images/Aboutsec1img.svg' 
import { Link } from 'react-router'
"use client"





const About = () => {
 const data=[{
  id1:"01.",
 desc1a:"Absolute Respect",
 desc1b:"for Creative",
 desc1c:"copyright",
 smalldet:"No Training Models Without Direct Consent",
 largedet:"We insist on transparent attribution of training data. Preserve the legacy and rights of human works that fuel AI progress."
 },
 {
  id1:"02.",
 desc1a:"Innovation and",
 desc1b:"collabortaions",
 smalldet:"We Cannot Rely On Policymakers To Fix This Problem",
 largedet:"While we advocate for legislative support, we place greater emphasis on collective efforts and industry self-regulation. We support the creation, adoption, and facilitation of legal frameworks and ethical guidelines."
 },
 {
 id1:"03.",
 desc1a:"Innovation and",
 desc1b:"collabortaions",

 smalldet:"Metadata Is Key for Correct Attributions in AI Applications",
 largedet:"Standardizing AI rights is essential, focusing on copyrights and attributions of training data. We collaborate with industry partners to create open AI rights frameworks, ensuring ethical integration of AI that respects all stakeholders' rights."
 },
 { id1:"04.",
  desc1a:"education for",
  desc1b:"Ethical AI Advocacy",
  smalldet:"The Power of Knowledge to Transform the Music Industry",
  largedet:"Our commitment lies in educating artists, industry professionals, data scientists, and the broader public about AI's implications for music rights."
  },

 
];
  return (
    <>
   <Navbar  diffimage={Aboutimage} />
   <div className='text-[#DEFE63] w-full  absolute bottom-40 flex flex-col items-center uppercase tracking-tight leading-none herotxt'>
        <motion.h1 initial={{scaleX:0.5}} whileInView={{scaleX:0.8}} transition={{duration:0.7}} className='text-[16vw] tracking-tight'>OUR STORY</motion.h1>
        <motion.img initial={{opacity:0}} whileInView={{opacity:100}} transition={{duration:2}}  src="https://cdn.prod.website-files.com/66715118c4748bd61331f714/6683aeb1006c464f9a635cef_snd-etc-about-icons.svg" alt="" />
        <motion.h4 initial={{opacity:0}} whileInView={{opacity:100}} transition={{duration:3}} className=' text-[1.7vw] tracking-tighter relative top-35  nor '>Advocating For Artists’ Rights & New Standards For Ethical AI</motion.h4>
   </div>
   {/* below intro */}
   <div className='aboutus-info w-full relative top-20 h-screen flex  mt-10'>
      <div className="sec1 w-2/3 mt-10 ">
          <div className='imgesec  h-[80vh] items-center  w-full  flex flex-col'>
              <img className='h-[37vh] w-[32vw]' src="https://cdn.prod.website-files.com/66715118c4748bd61331f714/667e48db2e1eb1ae0df324b0_snd-etc-footer-img-p-1600.jpg" alt="" />
                <div className='w-[32vw] text-[#DEFE63] bg-[#1D1D1D]  fontstyle text-[2.5vw]  leading-none tracking-tight h-[26vh] uppercase'>
                    <h3 className='pl-5 pt-3'>Join us in advocating for</h3>
                    <h3 className='pl-5'>fair AI in music. Sign the</h3>
                    <h3 className='pl-5'>petition!</h3>
                    <h4 className='pt-4 pl-5 nor text-[1.5vw] '>YOUR VOICE MATTERS</h4>
                      <div className='mini-image w-[32vw]  h-[7vh] absolute bottom-40  '>
                          <img  className='pt-5 w-full ' src={aboutsec1img} alt="" />
                             <div  className='bg-[#DEFE63] relative bottom-16 ml-5  -rotate-9 flex justify-center items-center w-27 h-10  uppercase text-[#1D1D1D]'>
                               <Link className='text-3xl hover:underline' to="/" >Sign up</Link>
                             </div>
                      </div>
                    
                </div>       
           </div>
       </div>
        <div className="sec2 w-3/3  mt-10 ">
            <div  className='text-[#1D1D1D] p-8 herotxt text-[4.6vw]  tracking-tighter uppercase leading-none'>
               <motion.h3 initial={{scaleX:0.9}} whileInView={{scaleX:1}} transition={{duration:0.6}} >We are musicians and artists who want to make sure future generations can have thriving careers in music post-AI.</motion.h3>
                <motion.p initial={{opacity:0}} whileInView={{opacity:100}} transition={{duration:5}} className='nor text-[1.5vw] ml-2 font-extralight w-[45vw]  pt-10 tracking-wide'>We do this by advocating for artists’ rights and new standards for ethical AI. We partner with universities in their music and data science departments working with the next generation of the music industry. We innovate solutions in ethical licensing and AI rights management. We put this to the test by developing artists, creating music and content that embraces AI in search of the next generation of music.</motion.p>
                <Link className='text-[2vw] hover:underline tracking-wide ml-3 text-[#1D1D1D]' to="/" >talk to us</Link>
            </div>
        </div>
   </div>
   {/* marqueeSEC */}
    <div className='h-[40vh] relative top-32 w-full bg-[#DEFE63] '>
      <div  className='w-full h-full  text-[13.5vw] leading-none scale-y-125 text-[#1D1D1D]  whitespace-nowrap fontstyle  gap-10 overflow-hidden   flex justify-center items-center'>
       <motion.h1 initial={{x:0}} onScroll={{}} animate={{x:-1000}} transition={{duration:8, ease:'linear', repeat:Infinity}}>our core</motion.h1>
       <motion.img initial={{x:0}} animate={{x:-1000}} transition={{duration:8, ease:'linear', repeat:Infinity}} src="https://cdn.prod.website-files.com/66715118c4748bd61331f714/66850da42c36507218c53563_screamer-star.svg" alt="" />
       <motion.h1 initial={{x:0}} animate={{x:-1000}} transition={{duration:8, ease:'linear', repeat:Infinity}}>our core</motion.h1>
       <motion.img initial={{x:0}} animate={{x:-1000}} transition={{duration:8, ease:'linear', repeat:Infinity}} src="https://cdn.prod.website-files.com/66715118c4748bd61331f714/66850da42c36507218c53563_screamer-star.svg" alt="" />
       <motion.h1 initial={{x:0}} animate={{x:-1000}} transition={{duration:8, ease:'linear', repeat:Infinity}}>our core</motion.h1>
       <motion.img initial={{x:0}} animate={{x:-1000}} transition={{duration:8, ease:'linear', repeat:Infinity}} src="https://cdn.prod.website-files.com/66715118c4748bd61331f714/66850da42c36507218c53563_screamer-star.svg" alt="" />
       <motion.h1 initial={{x:0}} animate={{x:-1000}} transition={{duration:8, ease:'linear', repeat:Infinity}}>our core</motion.h1>
       <motion.img initial={{x:0}} animate={{x:-1000}} transition={{duration:8, ease:'linear', repeat:Infinity}} src="https://cdn.prod.website-files.com/66715118c4748bd61331f714/66850da42c36507218c53563_screamer-star.svg" alt="" />
      </div>
    </div>
    {/* about cards */}
   
   <div className='w-full h-screen relative top-32' >
   {data.map((items,index)=>{
 return(
 <div key={items} className=' '>
   <div className='w-full h-45 flex mt-10  justify-between px-7'>
       
       <div className='sec1 flex gap-10 '>
         <h1 className='text-[2.9vw] fontstyle text-[#1D1D1D]'>{items.id1}</h1>
           <div className='flex-col uppercase mt-4 text-[#1D1D1D] scale-y-115 tracking-tighter leading-none fontstyle text-[3.3vw]'>
               <h1>{items.desc1a}</h1>
               <h1>{items.desc1b}</h1>
               <h1>{items.desc1c}</h1>
           </div>
       </div>
       <div className=' w-2/3 h-45sec2  text-[#1D1D1D] '>
          <div className='pl-45 pt-1'>
             <h1 className='uppercase text-2xl fontstyle'>{items.smalldet}</h1>
             <h4 className='w-[42vw] text-[1.5vw] nor tracking-tight text-wrap mt-4 '>{items.largedet}</h4>
          </div>
       </div>
       
   </div>
   <hr className='text-[#E4E4E4] ' />
 </div>
      );
      })}
   </div>
    {/* talk with sec  */}
    <div className='w-full h-screen bg-[#1D1D1D] text-[#DEFE63] relative top-90 flex flex-col leading-none   '>
      <motion.div initial={{x:-1000}} whileInView={{x:0}} viewport={{once:true}}  transition={{duration:1}}  className='uppercase fontstyle mt-28 flex-col  items-center  flex '>
        <h1 className='text-[14vw] tracking-tight scale-y-110'>talk to us</h1>
        <h4 className='text-center nor text-[1.1vw] w-2/5 mt-8 tracking-wide '>Whether you are from a university, part of the music industry, a data scientist, or involved with a government or non-profit organization, we welcome your interest in supporting our advocacy efforts.</h4>
            <div  className='bg-[#DEFE63] mt-16   -rotate-9 flex justify-center items-center w-[12vw] h-12  uppercase text-[#1D1D1D]'>
               <Link className='text-[2vw] hover:underline' to="/" >Contact us</Link>
           </div>
      </motion.div>
    </div>
     
     {/* fotter sec */}
         <div  className='w-full  relative top-90 h-[50vh] '>
                      <img className='w-full h-[140vh] ' src="https://cdn.prod.website-files.com/66715118c4748bd61331f714/667e48db2e1eb1ae0df324b0_snd-etc-footer-img-p-1080.jpg" alt="" />
                          <motion.div  initial={{opacity:0}} transition={{duration:3}} whileInView={{ opacity:100}} className='flex flex-col items-center leading-none uppercase fontstyle absolute top-20 right-[50%] left-[50%]'>
                            <h1 className='text-[#D6FE63] text-[5vw]' >Sound </h1>
                            <h1 className='text-[#D6FE63] text-[5vw]' >Ethics</h1>
                          </motion.div>
                          <motion.div  initial={{opacity:0}} transition={{duration:3}} whileInView={{ opacity:100}} className='w-full   absolute flex flex-col leading-10 items-center justify-center top-70 text-white'>
                               <img className='w-[35vw]'  src="https://cdn.prod.website-files.com/66715118c4748bd61331f714/66778ea08dc4c4408ce083c3_snd-etc-angle.svg" alt="" />
                                <div className='w-[35vw] bg-[#D6FE63] relative bottom-1  h-100'></div>
                                    <div className='absolute top-30 uppercase flex leading-none gap-1 flex-col items-center'>
                                     <h1 className='text-[#1D1D1D] herotxt text-[2.5vw]'>Your Voice Matters!</h1>
                                     <h4 className='text-[#1D1D1D] nor text-[1.7vw] tracking-tighter font-semibold'>Advocate for Fair AI in Music</h4>
                                     <h4 className='text-[#1D1D1D] nor text-[1.1vw] pt-5 w-3/4 text-center tracking-tighter font-semibold'>Sign our petition and support the future of music artists</h4>
                                   <input className='fontstyle w-3/4 mt-7 h-10 text-[#D6FE63] bg-[#1D1D1D] px-5 text-2xl' type="text" placeholder='FIRST NAME' required />
                                   <input className='fontstyle w-3/4  h-10 text-[#D6FE63] bg-[#1D1D1D] px-5 text-2xl' type="text" placeholder='Last name' required />
                                   <input className='fontstyle w-3/4  h-10 text-[#D6FE63] bg-[#1D1D1D] px-5 text-2xl' type="text" placeholder='EMAIL ADDRESS' required />
                                   <Link to="/Contact" className='fontstyle cursor-pointer font-extrabold text-2xl underline uppercase pt-9 text-[#1D1D1D] '>Submit </Link>
                                    </div>
                                  </motion.div>
                                  <motion.div  initial={{opacity:0}} transition={{duration:3}} whileInView={{ opacity:100}} className='absolute px-10 text-[#D6FE63] herotxt text-[4.5vw] tracking-tight uppercase top-130'>
                                  <h1 className=''>Contact us</h1>
                                  <h1 className='text-[3vw]'> INFO@Sound.Ai</h1>
                                 
                                  </motion.div>
                                  <motion.div  initial={{opacity:0}} transition={{duration:3}} whileInView={{ opacity:100}} className='absolute px-10 flex flex-col items-end text-[#D6FE63] right-0 herotxt text-[4vw] tracking-tight uppercase top-160'>
                                  <h1 className=''>Johar town lhr</h1>
                                  <h1 className='text-[4vw]'> finding us</h1>
                                 
                                  </motion.div>
                                  
                          </div>

    </>
  )
}

export default About
