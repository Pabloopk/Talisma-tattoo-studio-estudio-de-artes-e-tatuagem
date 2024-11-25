import React, {useState} from 'react';

import { galleryData } from '../data';

import  { PhotoAlbum } from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';

import 'yet-another-react-lightbox/styles.css';

import { motion } from 'framer-motion';

import { fadeIn } from '../variants';


const slides = galleryData.images.map(({original, width, height})=> ({
  src: original, 
  width,
  height,
}));

const GallerySection = () => {

  const [index, setIndex] = useState(-1);

  const {title, btnText, btnIcon, images} = galleryData;

  return (
      <section id='Gallery' 
      className='bg-[#c3b1a1] section relative mt-[10px] lg:mt-0'>
        <div className='container flex justify-center items-end'>
          <motion.h2 variants={fadeIn('up')} initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
          className='  h2 text-center text-[#1d2a3a] max-w-[370px] lg:mb-20'>{title}</motion.h2>
        </div>
      <motion.div
          variants={fadeIn('right')} initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
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
        <a href='https://www.instagram.com/lucasgtattoo/'><button className='btn btn-lg btn-dark rounded-md'>
          {btnText} <div>{btnIcon}</div>
        </button></a>
      </motion.div>

      </section>
  );
};

export default GallerySection;
