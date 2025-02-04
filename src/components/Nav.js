import React from 'react';

import { navData } from '../data';
import { Link } from 'react-scroll';


const Nav = () => {
  const {items} = navData;

  return <nav>
    <ul className='flex gap-x-[58px]'>
      {items.map((item, index)=>{
        return (
        <li key={index}>
          <Link className='link hover:border-b-4
           hover:border-yellow-400 cursor-pointer
            transition-all duration-300' 
            to={item.to} spy={true} smooth={true} duration={500}>
            {item.name}
          </Link>
        </li>
        );
      })}
    </ul>
  </nav>;
};

export default Nav;
