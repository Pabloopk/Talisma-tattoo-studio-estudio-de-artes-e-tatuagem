/*import React, { useState, useEffect } from 'react';

import {headerData} from '../data'


import Nav from './Nav';
import NavMobile from './NavMobile';
import Socials from './Socials';
import { motion } from 'framer-motion';

import { fadeIn } from '../variants';

import { TiThMenuOutline } from 'react-icons/ti'

const Header = () => {
  const {logo} = headerData;

  const [isActive, setIsActive] = useState(false);

  const [navMobile, setNavMobile] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);

    });
  });
  return ( 
      <header
        className={`${
        isActive ? 'bg-yellow-900/70 h-[100px] lg:h-[110px] shadow-lg'
        : 'bg-yellow-900 h-[120px] lg:h-[150px]'} 
        fixed left-0 right-0 z-10 max-w-[1920px]
        w-full mx-auto transition-all duration-300`}
        >
          <div className='flex justify-between items-center h-full pl-[50px] pr-[60px]'>

            <a href='/'>
              <img className='w-[180px] h-[90px]' src={logo} alt=''/>
            </a>

            <motion.div
              variants={fadeIn('down')} initial='hidden'
              whileInView={'show'}
          
             className='hidden xl:flex text-[#d7d7d8]'>
              <Nav />
            </motion.div>


            <div onClick={() => setNavMobile(!navMobile)} 
             className='xl:hidden absolute right-[5%] bg-black text-yellow-700 p-2 rounded-md cursor-pointer'>
              <TiThMenuOutline className='text-3xl'/>
            </div>

            <div onClick={() => setNavMobile(!navMobile)}  className={`${navMobile ? 'max-h-full' : 'max-h-0'} 
            ${isActive ? 'top-[100px] lg:top-[110px]' : 'top-[120px] lg:top-[150px]'}
            fixed bg-yellow-700 w-full h-full left-0  text-[#c3b1a1]
            -z-10 transition-all duration-300`}>
              <NavMobile/>
            </div>
            <div className='hidden xl:flex  text-[#c3b1a1]'>
              <Socials/>
            </div>
        
          </div>
      </header>
      );
};

export default Header;*/


import React, { useState, useEffect } from 'react';

import { headerData } from '../data';
import Nav from './Nav';
import NavMobile from './NavMobile';
import Socials from './Socials';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

import { TiThMenuOutline } from 'react-icons/ti';
import { IoMdClose } from 'react-icons/io'; // Importando o ícone de fechar (X)

const Header = () => {
  const { logo } = headerData;

  const [isActive, setIsActive] = useState(false);
  const [navMobile, setNavMobile] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
    });
  }, []); // Adicionando [] para garantir que o efeito só rode uma vez após o carregamento

  return (
    <header
      className={`${
        isActive
          ? 'bg-yellow-900/70 h-[100px] lg:h-[110px] shadow-lg'
          : 'bg-yellow-900 h-[120px] lg:h-[150px]'
      } 
        fixed left-0 right-0 z-10 max-w-[1920px]
        w-full mx-auto transition-all duration-300`}
    >
      <div className="flex justify-between items-center h-full pl-[50px] pr-[60px]">

        <a href="/">
          <img className="w-[180px] h-[90px]" src={logo} alt="" />
        </a>

        <motion.div
          variants={fadeIn('down')} initial="hidden"
          whileInView={'show'}
          className="hidden xl:flex text-[#d7d7d8]"
        >
          <Nav />
        </motion.div>

        {/* Ícone de menu sanduíche ou X dependendo do estado do menu */}
        <div
          onClick={() => setNavMobile(!navMobile)}
          className="xl:hidden absolute right-[5%] bg-black text-yellow-700 p-2 rounded-md cursor-pointer"
        >
          {navMobile ? (
            <IoMdClose className="text-3xl" />
          ) : (
            <TiThMenuOutline className="text-3xl" />
          )}
        </div>

        {/* Menu Mobile */}
        <div
          className={`${
            navMobile ? 'max-h-full' : 'max-h-0'
          } ${isActive ? 'top-[100px] lg:top-[110px]' : 'top-[120px] lg:top-[150px]'}
          fixed bg-yellow-700 w-full h-full left-0  text-[#c3b1a1]
          -z-10 transition-all duration-300`}
          onClick={() => setNavMobile(!navMobile)}
        >
          <NavMobile />
        </div>

        <div className="hidden xl:flex text-[#c3b1a1]" 
        
         >
          <Socials  />
        </div>

      </div>
    </header>
  );
};

export default Header;

