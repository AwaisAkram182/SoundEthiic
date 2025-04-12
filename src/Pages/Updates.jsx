import React from 'react'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router'
import { motion } from 'framer-motion'
import { img } from 'framer-motion/client'

const Updates = () => {
  const data=[
    {desc:"RESOURCES"},
    {desc:"STANDARDS"},
    {desc:"News"},
  
]
const data2=[{
mainimgg:'https://cdn.prod.website-files.com/6676a95e2a6f276c225100d4/6797babd06f640f6833f68bd_UCSB-Press-Release-1-22-25_6-p-1080.jpg',
logoimgg:'https://cdn.prod.website-files.com/66715118c4748bd61331f714/667bb25209e4fac8a224b493_snd-etc-cutout-dark.svg',
data:'2024.1.25',
desc:'News',
info:'Sound Ethics Partners With UCSB to Expand Labs to Legends',
linkname:'Contact',
},{
 mainimgg:'https://cdn.prod.website-files.com/6676a95e2a6f276c225100d4/6797b8e9d2498b6e07678f9c_667bae03184749d011b6fdb2_snd-etc-eu-ai-act-music-p-1080.jpg',
 logoimgg:'https://cdn.prod.website-files.com/66715118c4748bd61331f714/667bb25209e4fac8a224b493_snd-etc-cutout-dark.svg', 
 data:'2023.4.2',
desc:'UPdates',
info:'Music & AI Rights Workshop  With UCSB to Expand',
linkname:'Contact',
}
,{
  mainimgg:'https://cdn.prod.website-files.com/6676a95e2a6f276c225100d4/67a2934518bd058910861b9d_UCI-Press-Release-2-4-25_3-p-1080.jpg',
  logoimgg:'https://cdn.prod.website-files.com/66715118c4748bd61331f714/667bb25209e4fac8a224b493_snd-etc-cutout-dark.svg', 
  data:'2023.7.21',
 desc:'News',
 info:'AI³ Music Incubator & AI Rights   to Expand',
 linkname:'Contact',
 }
 ,{
  mainimgg:'https://cdn.prod.website-files.com/6676a95e2a6f276c225100d4/66b1433488c4f3383feddc39_667baeab067664afd6bcf1a2_snd-etc-new-post-05-p-1080.jpg',
  logoimgg:'https://cdn.prod.website-files.com/66715118c4748bd61331f714/667bb25209e4fac8a224b493_snd-etc-cutout-dark.svg', 
  data:'2022.1.18',
 desc:'UPdates',
 info:'Sound Ethics and UC Irvine Partner to Shape Ethical AI',
 linkname:'Contact',
 }
 ,{
  mainimgg:'https://cdn.prod.website-files.com/6676a95e2a6f276c225100d4/66b02f1be73ed3eb2807e020_RIAA%20lawsuit.jpg',
  logoimgg:'https://cdn.prod.website-files.com/66715118c4748bd61331f714/667bb25209e4fac8a224b493_snd-etc-cutout-dark.svg', 
  data:'2021.2.31',
 desc:'NEWS',
 info:'RIAA Takes on Suno and Udio: AI Copyright Clash',
 linkname:'Contact',
 },
 {
  mainimgg:'https://cdn.prod.website-files.com/6676a95e2a6f276c225100d4/66b02830b6c15f8509265314_blue-guitar-EDA-p-1080.jpg',
  logoimgg:'https://cdn.prod.website-files.com/66715118c4748bd61331f714/667bb25209e4fac8a224b493_snd-etc-cutout-dark.svg', 
  data:'2018.8.15',
 desc:'upadtes',
 info:'The Elvis Act And The Battle Against Unauthorized Ai Voices',
 linkname:'Contact',
 }
]
  return (
   <>
   <Navbar  />
   <div className='uppercase w-full flex-col   relative bottom-80 flex justify-center  leading-none tracking-tight'>
        <h1 className=' text-[#DEFE63] w-full px-5 text-center scale-y-150 herotxt text-[15vw]'>LATEST UPDATES </h1>
          <div  className='w-full h-30 mt-20 flex  gap-10 justify-center' >
            {data.map((items,index)=>{
       return(
              <div key={index} className='uppercase w-[15%] flex  justify-center items-center h-16 bg-[#DEFE63] fontstyle text-[3vw] font-[#1D1D1D]'>
                <h1>{items.desc}</h1>
              </div>
      )
    })}
     </div>
    </div> 
   
            {/* cards sec */}
           
         <div className='w-full justify-center bg-[#1D1D1D] flex flex-wrap gap-8 relative bottom-72 px-10 py-16'>
  {data2.map((items, index) => {
    return (
      <div key={index} className='card1 w-[40vw] h-[90vh]'>
        <div className='imagesec relative'>
          <img className='w-full h-[57vh] object-fill' src={items.mainimgg} alt="" />

          <div className='uppercase text-[#DEFE63] tracking-tighter nor text-[1.5vw] flex gap-10 scale-y-130 mt-3'>
            <h1>{items.data}</h1>
            <h1>{items.desc}</h1>
          </div>

          <div className='w-full h-20 mt-2'>
            <h1 className='text-[3vw] fontstyle text-[#DEFE63] leading-none tracking-tight'>{items.info}</h1>
          </div>

          <Link className='text-[2vw] fontstyle text-[#DEFE63] underline mt-2 block' to="/">
            {items.linkname}
          </Link>
        </div>
      </div>
    );
  })}
</div>
    {/* artsitsec */}
    <div className=' w-full h-screen flex relative justify-between bottom-72'>
           <div className='sec1 h-screen w-2/4  pt-10   flex items-center flex-col leading-none '>
           <h1 className='text-2xl fontstyle tracking-tight '>Standardizing AI Rights</h1>
           <h1 className='nor text-[19px] tracking-tight'>Sound Ethics</h1>
           <h1 className='text-[10vw] uppercase herotxt mt-17 tracking-tighter whitespace- text-[#1D1D1D] '>From labs</h1>
          <h1 className='text-[10vw] uppercase herotxt  tracking-tighter -mt-[18px]  text-[#1D1D1D] '>to legends</h1>
              <div className='w-[70%]   text-center py-5'>  
                    <p className='nor text-[19px]'>With the powerful emergence of AI it's essential to standardize AI rights, focusing on copyrights and attributions. Metadata is key for correct attributions in AI applications. We collaborate with industry partners to create open AI rights frameworks, ensuring ethical integration of AI that respects all stakeholders' rights.</p>
              </div>
           </div>
           <div className='sec2 w-2/5 h-screen bg-pink-400'>
              <img className='w-full h-screen' src="https://cdn.prod.website-files.com/66715118c4748bd61331f714/668740d8abcc9034a1943bd6_snd-etc-labs-img.jpg" alt="" />
           </div>
       </div>

        {/* footersec   */}
        <div  className='w-full  relative -top-99 h-[50vh] mt-25'>
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

export default Updates
