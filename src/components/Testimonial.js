import React from 'react';

import {testimonialData} from '../data';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import { motion } from 'framer-motion';

import { fadeIn } from '../variants';

const Testimonial = () => {
  return(
     <motion.section 
          variants={fadeIn('up')} 
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.2}}
     className='py-[40px] lg:pb-[160px] lg:pt-0'>
      <div className='container mx=auto'> 
          <Swiper>
              {testimonialData.map((slide, index)=> {

                const { quoteImg, message, name, occupation}  = slide;
                return <SwiperSlide key={index}>
                    <div className='max-w-[1200px] mx-auto flex flex-col lg:mt-14 lg:flex lg:items-center gap-x-[38px]'>
                      
                      <div className='w-[154px] h-[109px] mb-5 '>
                        <img src={quoteImg} alt='' />
                      </div>
                      <div className='bg-[#1a2a3a] text-[#c3b1a1] flex-1 lg:mt-[54px]'>

                        <div className='text-2xl lg:text-[26px] leading-normal mb-6 lg:mb-12'>
                          {message}
                          </div>
                            <div className='flex items-center text-xl lg:text-2xl font-primary'>
                              <div className='font-semibold'>{name}</div>
                              <span className='mx-4'>|</span>
                              <div className='font-light'>{occupation}</div>
                        </div>
                        
                      </div>

                    </div>
                  </SwiperSlide>
              })}
          </Swiper>
      </div>
      </motion.section>
     );
};

export default Testimonial;
