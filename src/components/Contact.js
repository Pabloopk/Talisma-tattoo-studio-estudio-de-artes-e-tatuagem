import React from 'react';

import { contactData } from '../data';

import { motion } from 'framer-motion';

import { fadeIn } from '../variants';



const Contact = () => {

  const {title, info} = contactData;

  return (
    <section id='Contato'
    className=' bg-[#c3b1a1] text-[#1d2a3a] section'>
      <div className='container mx-auto'>

        <div className=' flex flex-col xl:flex-row gap-y-16 '>

          <div className='flex-1'>

            <motion.h2
                      variants={fadeIn('left')} 
                      initial='hidden'
                      whileInView={'show'}
                      viewport={{once: false, amount: 0.2}}
             className='h2 max-w-[490px] text-[30px] text-center text-[#1d2a3a]  lg:mb-15'>{title}</motion.h2>
            <div className='flex flex-col xl:flex-row gap-x-5 gap-y-16 xl:gap-y-0'>

              {info.map((item, index)=> {
                const { title, subtitle, address, phone, email, link } = item;
                return (
                <div key={index}>

                   <motion.div
                      variants={fadeIn('left')} 
                      initial='hidden'
                      whileInView={'show'}
                      viewport={{once: false, amount: 0.2}} className='font-primary uppercase font-medium text-xl mb-3'>{title} </motion.div>

                    <motion.div
                      variants={fadeIn('left')} 
                      initial='hidden'
                      whileInView={'show'}
                      viewport={{once: false, amount: 0.2}} className='mb-6 leading-[187%] tracking-[0.02em]'>
                      {subtitle}
                     </motion.div>
                      {/**aqui vai ficar todos os contatos */}
                      <motion.div
                      variants={fadeIn('left')} 
                      initial='hidden'
                      whileInView={'show'}
                      viewport={{once: false, amount: 0.2}} className='flex flex-col gap-y-3 mb-8'>

                        <motion.div
                          variants={fadeIn('left')} 
                          initial='hidden'
                          whileInView={'show'}
                          viewport={{once: false, amount: 0.2}}
                        className='flex items-center gap-[10px]'>

                          <motion.div
                          variants={fadeIn('left')} 
                          initial='hidden'
                          whileInView={'show'}
                          viewport={{once: false, amount: 0.2}}>{address.icon}</motion.div>
                          <motion.div
                            variants={fadeIn('left')} 
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{once: false, amount: 0.2}}
                            className='font-medium'>{address.name}</motion.div>

                        </motion.div>

                        <motion.div
                          variants={fadeIn('left')} 
                          initial='hidden'
                          whileInView={'show'}
                          viewport={{once: false, amount: 0.2}}
                       className='flex items-center gap-[10px]'>

                          <motion.div
                              variants={fadeIn('left')} 
                              initial='hidden'
                              whileInView={'show'}
                              viewport={{once: false, amount: 0.2}}>{phone.icon}</motion.div>
                          <motion.div
                              variants={fadeIn('left')} 
                              initial='hidden'
                              whileInView={'show'}
                              viewport={{once: false, amount: 0.2}} className='font-medium'>{phone.number}</motion.div>

                        </motion.div>

                        <motion.div
                          variants={fadeIn('left')} 
                          initial='hidden'
                          whileInView={'show'}
                          viewport={{once: false, amount: 0.2}} 
                        className='flex items-center gap-[10px]'>
                          
                          <div>{email.icon}</div>
                          <div className='font-medium'>{email.address}</div>

                        </motion.div>
                      </motion.div>
                        <a  className='font-medium border-b border-dark pb-[5px]' href='https://wa.me/5561985410459'>{link}</a>
                     
                  </div>
                  );
              })}
            </div>
          </div>
        {/**
          <motion.div
                      variants={fadeIn('down')} 
                      initial='hidden'
                      whileInView={'show'}
                      viewport={{once: false, amount: 0.2}} 
           className='flex-1 xl:pl-[40px] justify-center items-center'>

            <form className='flex flex-col gap-y-10 w-full'>

              <input className='border-b border-dark placeholder:text-[#555] 
              italic tracking-[0.06em] outline-none pb-4' 
              placeholder={form.name} type='text'
              />

              <input className='border-b border-dark placeholder:text-[#555] 
              italic tracking-[0.06em] outline-none pb-4' 
              placeholder={form.email} type='text'/>

              <input className='border-b border-dark placeholder:text-[#555] 
              italic tracking-[0.06em] outline-none pb-4' 
              placeholder={form.message} type='text'
              />
              <button className='btn btn-sm btn-dark self-start rounded-md'>
                {form.btnText}
              </button>
            </form>
          </motion.div>
        */}
        </div>
      </div>
    </section>
    );
};

export default Contact;
