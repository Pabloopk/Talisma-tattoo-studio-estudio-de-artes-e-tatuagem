import React from 'react';

import { motion } from 'framer-motion';


const Copyright = () => {
  return(
    <div className='bg-[#c3b1a1] text-[#1d2a3a] py-6 border-t border-[#2b2b2b] '>
      <div className='container flex flex-col justify-center items-center mx-auto'>
        <motion.div 
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          type:'tween',
          duration: 0.8,
          delay: 0.2
        }}
        viewport={{ once: false, amount: 0}}
        className='tracking-[0.02em] text-base'>
          &copy; 2024 <span className='font-semibold'>Talismã Tattoo Studio.</span> || Todos os direitos reservados. || Desenvolvido por <span className='font-semibold hover:text-blue-900'><a href='https://wa.me/5561992295015'>Pablo Nunes.</a></span>
        </motion.div>
        
      </div>
    </div>
  );
};

export default Copyright;
