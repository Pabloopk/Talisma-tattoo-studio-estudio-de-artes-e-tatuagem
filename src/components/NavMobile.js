import React, { useEffect, useRef } from 'react';
import { navData } from '../data';
import Socials from './Socials';
import { Link } from 'react-scroll';

const NavMobile = ({ closeMenu }) => {
  const { items } = navData;
  const menuRef = useRef(null); // Criando referência para o menu

  // Hook para adicionar o evento de clique fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu(); // Fecha o menu se clicar fora
      }
    };

    document.addEventListener('mousedown', handleClickOutside); // Adiciona o evento

    return () => {
      document.removeEventListener('mousedown', handleClickOutside); // Limpeza do evento
    };
  }, [closeMenu]);

  return (
    <nav
      ref={menuRef}
      className="w-full h-full flex justify-evenly overflow-hidden"
    >
      <ul className="flex flex-col justify-center items-center gap-y-6 py-6 mb-8">
        {items.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className="text-2xl font-primary uppercase"
                spy={true}
                smooth={true}
                duration={500}
                to={item.to}
                onClick={() => closeMenu()} // Fecha o menu ao clicar em um item
              >
                {item.name}
              </Link>
            </li>
          );
        })}

        <div className="text-2xl">
          <Socials />
        </div>
      </ul>
    </nav>
  );
};

export default NavMobile;
