import React from 'react';



import { aboutData } from '../data';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { useNavigate } from 'react-router-dom';



const About = () => {
  const navigate = useNavigate()
    function buttonSobre() {
      navigate(`/sobre`)
    }

  const {title, subtitle1, subtitle2, btnText, btnIcon} = aboutData;

  return ( 
    <section id='sobre' className='bg-[#1d2a3a] lg:py-16 xl:pb[160px] mt-[10px] lg:mt-0'>
      
        <div className='container mx-auto'>
          
          <div className='flex flex-col lg:flex-row gap-x-[70px]
          items-center
          '>
            <motion.div variants={fadeIn('right')}
            initial="hidden"
            whileInView={'show'}
            viewport={{once: false, amount: 0.4}}
             className='flex flex-col lg:flex-row flex-1'>
              <div className='text-[340px] 
              xl:text-[500px] 
              leading-none
              font-tertiary
              lg:-tracking-[0.055em]
              bg-about
              bg-no-repeat
              bg-right
              bg-clip-text text-transparent
              '>
                TT
                </div>
            </motion.div>
            {/*text*/}
              <motion.div variants={fadeIn('left')}
              initial="hidden"
              whileInView={'show'} className='flex-1 h-full xl:mt-48'>
                <h2 className='h2'>
                  {title}
                </h2>
                <div className='flex flex-col items-end'>
                  <div className='max-w-[530px]'>
                    <p className='mb-6'>{subtitle1}</p>
                    <p className='mb-9'>{subtitle2}</p>


                    <button onClick={buttonSobre} className='btn btn-lg btn-link'>
                      {btnText} <div className='text-xl'>{btnIcon}</div>{' '}
                    </button>
                  
                  </div>
                </div>
              </motion.div>
          </div>
        </div>
    </section>
    );
};

export default About;
