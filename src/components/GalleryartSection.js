import React, {useState} from 'react';

import { galleryartData } from '../data';

import  { PhotoAlbum } from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';

import 'yet-another-react-lightbox/styles.css';

import { motion } from 'framer-motion';

import { fadeIn } from '../variants';




const slides = galleryartData.images.map(({original, width, height})=> ({
  src: original, 
  width,
  height,
}));

const GalleryartSection = () => {

  const [index, setIndex] = useState(-1);

  const {title, btnText, btnIcon, images} = galleryartData;

  return (
   <section className='bg-[#1d2a3a] section relative mt-[10px] lg:mt-0'>
        <div className='container  flex justify-center items-end'>
          <motion.h2 
          variants={fadeIn('up')} initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
          className='h2 max-w-[370px] lg:mb-20'>{title}</motion.h2>
        </div>
      <motion.div
          variants={fadeIn('left')} initial='hidden'
          whileInView={'show'}
          
       className='mb-8 lg:mb-20'>
        <PhotoAlbum onClick={(event, photo, index)=> setIndex(index)}
         layout='rows' 
         photos={images} 
         />
        <Lightbox slides={slides} styles={{container:{ backgroundColor: 'rgba(0, 0, 0, .9)'}}}
        open={index >= 0}
        index={index}
        close={()=> setIndex(-1)}
         />
      </motion.div>

      <motion.div
          variants={fadeIn('down')} initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
       className='flex justify-center'>
         <a href='https://www.instagram.com/lucasgtattoo/'><button className='btn btn-lg bg-[#c3b1a1] hover:bg-[#c3b1a1]/75 text-[#1d2a3a] rounded-md'>
          {btnText} <div>{btnIcon}</div>
        </button></a>
      </motion.div>

      </section>
  );
};

export default GalleryartSection;
