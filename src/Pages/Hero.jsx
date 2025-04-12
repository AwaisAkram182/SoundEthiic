import React from 'react'
import Navbar from '../Components/Navbar'
import music from '../images/music.png'
import { motion} from 'framer-motion'
import artist from '../images/artist.jpg'
import smallartist from '../images/smallartist.jpg'
import sticker from '../images/sticker.png'
import sticker2 from '../images/sticker2.png'
import { Link } from 'react-router'
import casete from '../images/casete.png'
import artist2 from '../images/artist2.jpg'
import sticker3 from '../images/sticker3.png'
import artist3 from '../images/artist3.jpg'
import Footer from '../Components/Footer'

const Hero = () => {
  return (
    <>
    <Navbar/>
   <motion.div initial={{y:-1000}} animate={{y:0}}  transition={{duration:2,repeat:0}} className='absolute top-40 left-40 herotxt   '>
      <div  className=' text-[#D6FE63] text-[12vw] uppercase  leading-35  max-xl:text-[13.7vw] max-xl:leading-33 max-lg:text-center  max-lg:w-[67vw] max-lg:text-[20vw] max-lg:leading-none   '>
        <h1 className='max-lg:scale-y-120' >Sound</h1>
        <h1 className='max-lg:scale-y-120' >Ethics</h1>
      </div>
      
      <h4 className='text-[#D6FE63] text-[2vw] tracking-tighter font-light px-[5vw] mt-3  nor max-lg:text-center max-lg:text-[3vw] max-lg:mt-10  '>In the Dawn of AI Revolution</h4>
      <div className='heroimages w-full flex gap-5 mt-4 justify-center max-lg:mt-5 '>
        <img src="https://cdn.prod.website-files.com/66715118c4748bd61331f714/6676b09cfc48500920d349c1_snd-iconography-01.svg" alt="" />
        <img src="https://cdn.prod.website-files.com/66715118c4748bd61331f714/6676b09c51b4e69343712330_snd-iconography-02.svg" alt="" />
        <img src="https://cdn.prod.website-files.com/66715118c4748bd61331f714/6676b09c6ecdeb037e0a4e55_snd-iconography-04.svg" alt="" />
        <img src="https://cdn.prod.website-files.com/66715118c4748bd61331f714/66909faa9b2eceb09afb4990_home-hero-iconography-5.svg" alt="" />
      </div>
     <div className='belowimages absolute left-26 mt-4  flex w-full  items-center   justify-between max-lg:hidden'>
          <div className='w-40 h-10  -rotate-9 bg-[#D6FE63] flex items-center justify-center mt-9'>
            <button  className='fontstyle cursor-pointer font-extrabold text-2xl  '>Get in Touch </button>
          </div>
     </div>
   </motion.div>
   <div className='w-[24vw]  flex flex-col  absolute right-15 -bottom-25 justify-between max-lg:hidden '>
                      <img  className='w-[24vw]  max-lg:w-[50vw]' src="https://cdn.prod.website-files.com/66715118c4748bd61331f714/667e57948b1155880ff02332_feat-edges.svg" alt="" />
              <div className='w-full h-28 bg-[#D6FE63] text-[#1D1D1D] uppercase px-8 py-3 text-[1.89vw] font-extrabold tracking-tighter fontstyle  leading-none '>
                  <h1>Sound Ethics Parterns With</h1>
                  <h1>UCSB to expand labs to legends</h1>
                  <div className='flex pt-2 gap-5'>
                      <h4 className='text-[#1D1D1D] font-light tracking-tighter'>30.3.2025</h4>
                      <h4 className='text-[#1D1D1D] font-light nor capitalize '>News</h4>
                  </div>
              </div>
         
             </div>
             {/* below Navbar */}
      <div className='bg-[#FFFFFF]    w-full h-screen flex max-lg:flex-col   max-lg:w-[80%]  '>
          <div className='subpt1 w-full   h-screen relative  max-lg:w-full  '>
              <div className='relative  flex flex-col items-center   w-full  top-40 left-12 leading-6 max-xl:-left-5 max-xl:leading-6 max-lg:top-35  max-lg:left-10  '>
                <h1  className='fontstyle text-[#1D1D1D] text-[1.6vw] uppercase max-xl:text-[2vw] max-lg:text-[2.7vw] max-lg:relative max-lg:left-15'>Embrace AI. Champion Artists.</h1>
                <h4 className='text-[#1D1D1D] font-light nor capitalize  text-[1.3vw] max-xl:text-[1.7vw] max-lg:text-[2.7vw] max-lg:relative max-lg:left-15'>Sound Ethics</h4>
                  <div className='musiccontainor  absolute left-20 justify-center w-full  h-screen  flex flex-col  top-35 max-lg:left-10 max-xl:top-20  max-lg:top-25'>
                    <img className='w-[44vw] muiscmainimg    max-lg:w-[77vw]' src="https://cdn.prod.website-files.com/66715118c4748bd61331f714/6676bb71bc969b0c3196124a_sound-ethics-logomark.svg" alt="" />
                    <motion.img animate={{rotate:360}} transition={{duration:3, ease:'linear', repeat:Infinity,delay:0}} className='absolute musicmini top-14 w-[37vw] max-lg:w-[67vw] left-11 max-xl:top-20' src={music}  alt="" />
                  <div  className='musicicons  max-lg:hidden   flex gap-2 relative right-40 top-25 justify-center max-xl:right-31 max-lg:right-22 max-lg:mt-4'>
                      <img  className='w-[4vw] max-lg:size-15  ' src="https://cdn.prod.website-files.com/66715118c4748bd61331f714/6676be9fb7232dc317766f24_snd-shuffle.svg" alt="" />
                    <div className='flex   rounded-full border-1 px-1 py-1 justify-center items-center'>
                         <img  src="https://cdn.prod.website-files.com/66715118c4748bd61331f714/6676be9fa92c873c9278769c_snd-back.svg" alt="" />
                     </div>
                   <div className='flex cursor-pointer  rounded-full bg-[#1D1D1D] border-1 px-1 py-1 justify-center items-center'>
                         <img src="https://cdn.prod.website-files.com/66715118c4748bd61331f714/6691055c86fdea23dc9499c2_next-green.svg" alt="" />
                    </div>
                        <img className='w-[4vw] max-lg:size-15 ' src="https://cdn.prod.website-files.com/66715118c4748bd61331f714/6676be9f7d993bf3693d59e3_snd-loop.svg" alt="" />
                    </div>
                      <div className='flex musicdes flex-col text-center right-40  mt-2 relative top-30 justify-center max-xl:right-30  max-lg:right-20'> 
                          <h1 className='fontstyle text-[1.3vw] max-xl:text-[1.5vw] max-lg:text-[2.1vw] '>Our creative work is being mined without regard, without respect. </h1>
                             <h4 className='nor text-[1.2vw] max-xl:text-[1.6vw] max-lg:text-[2.1vw]'>Sound Ethics Side A</h4>
              </div>
                  </div>
              </div>
          </div>
          <div className='subpt2 w-1/2 h-full  right-50   top-30  relative max-lg:hidden   '>
            <div className=' relative  top-0 left-24  leading-29 max-xl:leading-23'>
              <h1  className='text-[#1D1D1D] font-light nor  text-[1.3vw] max-xl:text-[1.7vw] max-xl:mt-1' >What we’re seeing in the music industry is a </h1>
                <div className='flex h-full gap-10  mt-5 max-xl: max-xl:gap-4'>
                    <motion.h1  initial={{opacity:0}} transition={{duration:3}} whileInView={{ opacity:100}} className='text-[10vw]  fontstyle text-[#1D1D1D] font-extrabold  tracking-tight max-xl:text-[10.5vw] '>Digital </motion.h1>
                    <img className='-mt-5' src="https://cdn.prod.website-files.com/66715118c4748bd61331f714/667e2f1f2aa8aa345d0719d9_ce-dark-icon.svg" alt="" />
                </div>
                <motion.h1  initial={{opacity:0}} transition={{duration:3}} whileInView={{ opacity:100}} className='text-[10vw]  fontstyle text-[#1D1D1D] font-extrabold  tracking-tighter '>Gold Rush</motion.h1>
            </div>
            <motion.div  initial={{opacity:0}} transition={{duration:3}} whileInView={{ opacity:100}}  className='herotxt mt-4 absolute left-23 leading-none w-[40vw]    text-[#1D1D1D] font-extralight uppercase  tracking-tight text-[2.3vw] px-3 max-xl:text-[2.5vw]'>
                  <h1>Our creative work is mined</h1>
                  <h4 >without regard, without respect.</h4>
                </motion.div>
                <motion.h4  initial={{opacity:0}} transition={{duration:3}} whileInView={{ opacity:100}} className='nor absolute left-27 text-wrap top-115  leading-none  text-[1.4vw] tracking-tighter w-[30vw]  max-xl:text-[1.7vw]  max-xl:w-[30vw]  max-xl:top-105 '>Models are trained on our creations, profiting off our legacy, without a thought for the artists who bled for these notes. Let’s embrace AI in the music industry while protecting and championing artists, ensuring our future careers. Through partnerships with educational institutions, legal experts, and stakeholders, we are setting new standards and advocating for policies that protect artists' rights.</motion.h4>
          </div>
          
      </div>

           {/* below music containor */}
        <div className='artistsec w-full h-screen  mt-110 relative '>
            <img className='h-[170vh]  max-lg:object-cover '  src={artist} alt="" />
              <div  className='smallartistSec max-lg:hidden  '>
                  <img className='w-[32vw] absolute bottom-85 right-30 h-[82vh]  max-xl:h-[80vh]  max-xl:w-[35vw]  max-xl:right-17 ' src={smallartist} alt="" />
                  <img className='absolute bottom-110 right-117 w-[5vw]  max-xl:right-95' src={sticker} alt="" />
                  <img className='absolute bottom-77 right-15 w-[12vw]  max-xl:right-6' src={sticker2} alt="" />
              </div>
                <motion.div initial={{ opacity:0}} whileInView={{opacity:100}} transition={{duration:3 }}  className=' max-lg:w-[75%]  max-lg:scale-y-150 max-lg:text-center max-lg:top-80 artistdesc w-1/3 h-screen leading-17 text-white   absolute top-80 right-30  max-xl:leading-15  max-xl:right-25  '>
                  <h1 className='uppercase  herotxt text-[3.8vw] text-white tracking-tighter  max-xl:text-[4.6vw] max-lg:text-[10vw]'>Advocating for</h1>
                  <h1 className=' mms uppercase  herotxt text-[8vw] text-white tracking-tight  max-lg:mt-4  max-xl:text-[8.4vw]'>ETHICAL AI</h1>
                  <p className=' txt1 leading-6 mt-10 text-[1.5vw] nor  max-xl:text-[1.7vw]  max-lg:leading-none  '>Sound Ethics champions the rights and interests of artists at every turn. Our core mission is to ensure that the creative copyright of artists is respected and protected as artificial intelligence becomes more integrated into the music industry.</p>
                <p className='txt2 leading-6 mt-6 text-[1.5vw] nor max-xl:text-[1.7vw] ' >Through partnerships with educational institutions, legal experts, industry stakeholders, and policy makers we are setting new standards and advocating for policies that protect artists' rights.</p>
               <Link className='fontstyle text-[#D6FE63] text-2xl hover:underline ' to="/About" >Our Mission</Link>
                </motion.div>
        </div>
          {/* below artistsec */}
          <div className='h-[160vh] leading-none tracking-tight w-full bg-[#D6FE63]  relative top-60 flex flex-col  items-center    max-lg:leading-none'>
              <h1 className=' fontstyle text-2xl mt-5 uppercase '>Ethical AI in Academia</h1>
              <h4 className='text-[17px] nor max-xl:text-[19px] '>Sound Ethics</h4>
                 <div className='fromlabs leading-33 max-xl:leading-31 max-lg: scale-y-120 max-lg:leading-27'>
                    <h1 className='text-[12vw] uppercase herotxt mt-20  text-[#1D1D1D] max-xl:text-[13.5vw] '>From Labs</h1>
                    <h1 className='text-[12vw] uppercase herotxt  text-[#1D1D1D] max-xl:text-[13.5vw] '>To legends</h1>
                 </div>
                    <div className='absolute top-110 flex justify-center max-xl:top-120 max-lg:top-130'>
                      <img   src="https://cdn.prod.website-files.com/66715118c4748bd61331f714/6676ceb56b3b946177538c0e_snd-etc-bolt-segment.svg" alt="" />
                      <motion.img whileHover={{scale:1.2,rotateX:100,rotateY:10,rotateX:100}} transition={{duration:5, ease:'backInOut' ,repeat:Infinity}}  className='w-[30vw] h-[50vh] absolute -bottom-20 max-lg:w-[40%] ' src={casete} alt="" />
                      <div className='castetxt absolute top-65 w-[40vw]   nor text-[1.5vw] text-center max-xl:text-[1.9vw] max-xl:top-50' >
                      <h1>Data Science and music students today are building the AI that will remake the music industry of tomorrow.</h1>
                      <h1 className='mt-7'>We partner with universities and their record labels creating awareness and developing standards for ethical AI practices. We also provide opportunities for developing artists and data science engineers that want to work in the music industry.</h1>
                      <div className='flex mt-10 justify-center'>
                        <img src="https://cdn.prod.website-files.com/66715118c4748bd61331f714/6676cffb8d44ac437f30e48a_labs-legends-iconography.svg" alt="" />
                      </div>
                    </div>
                    </div>
                   
                    
          </div>
          {/* below caseeSec */}
            <div className=' w-full h-[170vh] flex max-lg:flex-col '>
                <motion.div initial={{ opacity:0}} whileInView={{opacity:100}} transition={{duration:3 }} className='secc1 w-full h-full flex flex-col justify-center items-center '>
                    <div className='absolute  top-870 flex flex-col items-center leading-none '>
                    <h1 className='text-2xl fontstyle tracking-tight  '>Standardizing AI Rights</h1>
                    <h1 className='nor text-[19px] tracking-tight'>Sound Ethics</h1>
                    <h1 className='text-[10vw] uppercase herotxt mt-17 tracking-tighter  text-[#1D1D1D] max-lg:text-[13vw]  '>Pioneering</h1>
                    <h1 className='text-[5vw] uppercase herotxt  tracking-tighter -mt-[3vh] text-[#1D1D1D] max-xl:-mt-[2vh] max-lg:text-[7vw] '>Standards For</h1>
                    <h1 className='text-[10vw] uppercase herotxt  tracking-tighter -mt-[3vh]  text-[#1D1D1D] max-xl:-mt-[2vh] max-lg:text-[13vw] '>Ai rights</h1>
                      <div className='secartisttxt w-[70%] text-center mt-20'>  
                        <p className=' nor text-[19px]'>With the powerful emergence of AI it's essential to standardize AI rights, focusing on copyrights and attributions. Metadata is key for correct attributions in AI applications. We collaborate with industry partners to create open AI rights frameworks, ensuring ethical integration of AI that respects all stakeholders' rights.</p>
                        <Link className='fontstyle relative top-17  text-[#1D1D1D] text-2xl hover:underline' to="/Updates">Our Mission</Link>
                      </div>
                    </div> 
                    </motion.div>
                <div className='secc2 w-1/2 h-full bg-orange-300 max-lg:hidden'>
                    <img className='h-full w-[100vw] bg-pink max-lg:object-cover max-xl:object-cover' src={artist2} alt="" />
                    <img className='w-[10vw] relative bottom-18 right-10 max-xl:bottom-16 max-xl:w-[11vw]' src={sticker3} alt="" />
                </div>
            </div>  

        {/* below our-missionsec */}
      <div className='w-full h-screen  '>  
          <img className='w-full h-[190vh]' src={artist3} alt="" />
           <motion.div initial={{x:-1000,opacity:0,}} viewport={{once:true}} whileInView={{x:0,opacity:100}} transition={{duration:2,repeat:0}} className='relative bottom-200 flex justify-center items-center leading-none flex-col max-xl:bottom-200 '>
              <h1 className='text-[18px] nor text-[#FFFF] max-xl:text-[24px]'>What we do</h1>
              <h1 className='text-[10vw] uppercase herotxt  tracking-tight   text-[#ffff] max-xl:text-[11vw] '>Solutions</h1>
             <h1 className='text-[2vw] uppercase fontstyle  tracking-tight   text-[#ffff] max-xl:text-[2.5vw] '>How we help artists in ai revolution</h1>
                 <div className='w-37 h-10  -rotate-9 bg-[#D6FE63] flex items-center justify-center mt-9'>
                  <Link to="/Solution" className='fontstyle cursor-pointer font-extrabold text-2xl hover:underline  '>View All </Link>
                </div>
           </motion.div>
              <div className='imagesec flex relative bottom-170 overflow-hidden max-xl:bottom-166'>
                  <img className='max-xl:w-[34vw]' src="https://cdn.prod.website-files.com/66715118c4748bd61331f714/66778ea08dc4c4408ce083c3_snd-etc-angle.svg" alt="" />
                  <img className='max-xl:w-[34vw]' src="https://cdn.prod.website-files.com/66715118c4748bd61331f714/66778ea08dc4c4408ce083c3_snd-etc-angle.svg" alt="" />
                  <img className='max-xl:w-[34vw]' src="https://cdn.prod.website-files.com/66715118c4748bd61331f714/66778ea08dc4c4408ce083c3_snd-etc-angle.svg" alt="" />
              </div>
                <div className='w-full h-[60vh] relative bottom-171 flex  bg-[#D6FE63] max-xl:bottom-167  max-lg:h-[68vh] ' >
                      <motion.div  initial={{opacity:0}} transition={{duration:3}} whileInView={{ opacity:100}} className='secc1 w-1/3  flex flex-col leading-none items-center py-10 '>
                          <h1 className='text-[17px] nor'>(01)</h1>
                          <h1 className='text-[3vw] py-5 uppercase herotxt  tracking-tighter text-[#1D1D1D]   '>Ethics in action</h1>
                          <h1 className='text-[2vw] fontstyle  text-[#1D1D1D] leading-0 '>Building Foundations</h1>
                          <p className='w-3/4 nor text-[19px] pt-13 text-center tracking-tight text-[#1D1D1D]'>We can’t rely on legislation. We actively embed ethical AI frameworks into academia, research, and AI applications.</p>
                          <Link to="/Solution" className='fontstyle cursor-pointer font-extrabold text-2xl underline uppercase pt-9 text-[#1D1D1D]'>Learn more </Link>
                      </motion.div>
                      <motion.div  initial={{opacity:0}} transition={{duration:3}} whileInView={{ opacity:100}} className='secc2 w-1/3  flex flex-col leading-none items-center py-10 '>
                          <h1 className='text-[17px] nor'>(02)</h1>
                          <h1 className='text-[3vw] py-5 uppercase herotxt  tracking-tighter text-[#1D1D1D]   '>Protect your music</h1>
                          <h1 className='text-[2vw] fontstyle  text-[#1D1D1D] leading-0 '>enforce your rights</h1>
                          <p className='w-3/4 nor text-[19px] pt-13 text-center tracking-tight text-[#1D1D1D]'>Fight back against unauthorized use with  for lost revenue and tools that combat unauthorized usage and proactive tracking.</p>
                          <Link to="/Solution" className='fontstyle cursor-pointer font-extrabold text-2xl underline uppercase pt-9 text-[#1D1D1D] '>Learn more </Link>
                      </motion.div>
                      <motion.div  initial={{opacity:0}} transition={{duration:3}} whileInView={{ opacity:100}} className='secc3 w-1/3  flex flex-col leading-none items-center py-10 '>
                          <h1 className='text-[17px] nor'>(03)</h1>
                          <h1 className='text-[3vw] py-5 uppercase herotxt  tracking-tighter text-[#1D1D1D]   '>ACADEMIA & RESPONSIBLE AI</h1>
                          <h1 className='text-[2vw] fontstyle  text-[#1D1D1D] leading-0 '>Future Industry Leaders</h1>
                          <p className='w-3/4 nor text-[19px] pt-13 text-center tracking-tight text-[#1D1D1D]'>We sponsor university research, host AI Rights workshops, and mentor the next generation of artists and data scientists.</p>
                          <Link to="/Solution" className='fontstyle cursor-pointer font-extrabold text-2xl underline uppercase pt-9 text-[#1D1D1D] '>Learn more </Link>
                      </motion.div>
                </div>
      </div>
      {/* below solutionSec */}
        <Footer/>
        


    </>
  )
}

export default Hero
