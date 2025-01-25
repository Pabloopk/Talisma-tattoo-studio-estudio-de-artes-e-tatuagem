import React from 'react';
//import nav data

import { navData } from '../data'

import Socials from './Socials';
import { Link } from 'react-scroll';


const NavMobile = () => {

  const {items} = navData;

  return (
  <nav className='w-full h-full flex justify-evenly overflow-hidden  '>
    
    <ul className='flex flex-col justify-center items-center gap-y-6 py-6 mb-8'>
      {items.map((item, index)=> {
        return (
        <li key={index}>
          <Link className='text-2xl font-primary uppercase' spy={true} smooth={true} duration={500} to={item.to}>
            {item.name}
            </Link>
        </li>
         
        );
      })}
    
      <div className='text-2xl'>
        <Socials/>
      </div>
    </ul>
   
      

    </nav>
    );
    
};

export default NavMobile;
