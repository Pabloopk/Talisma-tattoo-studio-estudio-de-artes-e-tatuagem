// import images
import Logo from '../src/img/header/logo.svg';
import GalleryImg1 from '../src/img/gallery/1.png';
import GalleryImg2 from '../src/img/gallery/2.png';
import GalleryImg3 from '../src/img/gallery/3.png';
import GalleryImg4 from '../src/img/gallery/4.png';
import GalleryImg5 from '../src/img/gallery/5.png';
import GalleryImg6 from '../src/img/gallery/6.png';
import GalleryImg7 from '../src/img/gallery/7.png';
import GalleryImg8 from '../src/img/gallery/8.png';
import GalleryartImg9 from '../src/img/galleryart/9.png';
import GalleryartImg10 from '../src/img/galleryart/10.png';
import GalleryartImg11 from '../src/img/galleryart/11.png';
import GalleryartImg12 from '../src/img/galleryart/12.png';
import GalleryartImg13 from '../src/img/galleryart/13.png';
import GalleryartImg14 from '../src/img/galleryart/14.png';
import GalleryartImg15 from '../src/img/galleryart/15.png';
import GalleryartImg16 from '../src/img/galleryart/16.png';
import QuoteImg from '../src/img/testimonial/quote.svg';
import Sobre from '../src/img/sobre/gnt.png';


// import icons

import { IoLogoWhatsapp, IoMdArrowForward } from 'react-icons/io';
import { FiSend } from 'react-icons/fi';
import { FaPlay, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import {
  IoLogoInstagram,
  
} from 'react-icons/io';

export const headerData = {
  logo: Logo,
};

export const sobreData = {
  sobre: Sobre,
};



export const navData = {
  items: [
    { to: 'Hero', name: 'Inicio' },
    { to: 'sobre', name: 'Sobre' },
    { to: 'Gallery', name: 'Galeria' },
    { to: 'Contato', name: 'Contato' },
  ],
};

export const socialData = [
  { href: 'https://www.instagram.com/talismatattoostudio/', icon: <IoLogoInstagram /> },
  
  { href: 'https://wa.me/5561985410459', icon: <IoLogoWhatsapp /> },
  
];

export const heroData = {
  title: 'Talismã Tattoo Studio',
  subtitle:
    'Lucas Nogueira e Juliana Pedrosa',
  btnText: 'Orçamento',
  btnIcon: <IoMdArrowForward />,
};

export const aboutData = {
  title: 'Sobre Nós',
  subtitle1:
    'Após passar por um evento canônico que mudou nossa perspectiva sobre a vida e a arte, decidimos fundar a empresa Talismã Tattoo Studio, com o objetivo de compartilhar nossa paixão pela tatuagem e criar um espaço onde a criatividade e a expressão artística pudessem fluir livremente.',
  subtitle2:
    'Desde o início, nosso foco foi oferecer uma experiência única e personalizada para cada cliente, valorizando a individualidade e a estética de cada um. Nos apaixonamos mais ainda pela arte e começamos a montar quadros que refletiam nossa visão e habilidade.',
  btnText: 'Saber Mais',
  btnIcon: <IoMdArrowForward />,
};

export const galleryData = {
  title: 'Tattoos',
  btnText: 'Mais',
  btnIcon: <IoMdArrowForward />,
  images: [
    {
      src: GalleryImg1,
      original: GalleryImg1,
      width: 465,
      height: 412,
    },
    {
      src: GalleryImg2,
      original: GalleryImg2,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg3,
      original: GalleryImg3,
      width: 465,
      height: 412,
    },
    {
      src: GalleryImg4,
      original: GalleryImg4,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg5,
      original: GalleryImg5,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg6,
      original: GalleryImg6,
      width: 464,
      height: 412,
    },
    {
      src: GalleryImg7,
      original: GalleryImg7,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg8,
      original: GalleryImg8,
      width: 465,
      height: 412,
    },
  ],
};

export const galleryartData = {
  title: 'Artes',
  btnText: 'Mais',
  btnIcon: <IoMdArrowForward />,
  images: [
    {
      src: GalleryartImg9,
      original: GalleryartImg9,
      width: 465,
      height: 412,
    },
    {
      src: GalleryartImg10,
      original: GalleryartImg10,
      width: 465,
      height: 540,
    },
    {
      src: GalleryartImg11,
      original: GalleryartImg11,
      width: 465,
      height: 412,
    },
    {
      src: GalleryartImg12,
      original: GalleryartImg12,
      width: 465,
      height: 540,
    },
    {
      src: GalleryartImg13,
      original: GalleryartImg13,
      width: 465,
      height: 540,
    },
    {
      src: GalleryartImg14,
      original: GalleryartImg14,
      width: 464,
      height: 412,
    },
    {
      src: GalleryartImg15,
      original: GalleryartImg15,
      width: 465,
      height: 540,
    },
    {
      src: GalleryartImg16,
      original: GalleryartImg16,
      width: 465,
      height: 412,
    },
  ],
};

export const interviewData = {
  title:
    '“Consider what you desire. Your tattoo artist will never tell you what tattoo to have.”',
  btnText: 'Watch it now',
  btnIcon: <FaPlay />,
};

export const testimonialData = [
  {
    quoteImg: QuoteImg,
    message:
      "Fiz minha primeira tatuagem na Talismã Tattoo Studio, fiquei emocionado de eternizar a minha pet, Erza. Gostei do estilo.",
    name: 'Pablo Sousa',
    occupation: 'Cliente',
  },
  {
    quoteImg: QuoteImg,
    message:
      'Gostei de fazer o nome do meu filho na Talismã Tattoo Studio. As letras ficaram massa.',
    name: 'Gustavo Catão',
    occupation: 'Tattoo Artist',
  },
  {
    quoteImg: QuoteImg,
    message:
      'Eu amei!!!! Obrigada🥰',
    name: 'Marília Brito Monteiro',
    occupation: 'Cliente',
  },
  {
    quoteImg: QuoteImg,
    message:
      'Parabéns pelo excelente trabalho! ❤️👏',
    name: 'Tinanda Brito',
    occupation: 'Cliente',
  },
];

export const contactData = {
  title: 'Entre em Contato:',
  info: [
    {
      title: 'Vamos Tatuar?',
      subtitle:
        'Entre em contato para orçamentos.',
      address: {
        icon: <FaMapMarkerAlt />,
        name: 'Asa Norte, 104 N Bloco C, Talismã Tattoo Studio',
      },
      phone: {
        icon: <FaPhoneAlt />,
        number: '(61) 98541-0459',
      },
      email: {
        icon: <FaEnvelope />,
        address: 'lucasguilhermenogueira@gmail.com',
      },
      link: 'Entre em contato',
    },
    {
      title: 'Quadros',
      subtitle:
        'Inicie seu projeto de pintura',
      address: {
        icon: <FaMapMarkerAlt />,
        name: 'Asa Norte, 104 N Bloco C, Oficina de Arte',
      },
      phone: {
        icon: <FaPhoneAlt />,
        number: '(61) 98419-1331',
      },
      email: {
        icon: <FaEnvelope />,
        address: 'lucasguilhermenogueira@gmail.com',
      },
      link: 'Entre em contato',
    },
  ],
  form: {
    name: 'Seu Nome',
    email: 'Seu email',
    message: 'Escreva sua ideia de projeto',
    btnText: 'Enviar',
  },
};

export const footerData = {
  about: {
    title: 'Talismã Tattoo Studio',
    subtitle:
      'Pinturas e Tatuagens',
    address: {
      icon: <FaMapMarkerAlt />,
      name: 'Brasília-DF',
    },
    phone: {
      icon: <FaPhoneAlt />,
      number: '(61) 9 8541-0459',
    },
    email: {
      icon: <FaEnvelope />,
      address: 'lucasguilhermenogueira@gmail.com',
    },
  },
  links: {
    title: 'Acesse',
    items: [
      { href: 'https://www.instagram.com/lucasgtattoo/', name: 'Sobre mim' },
      { href: '#Gallery', name: 'Minha galeria' },
      { href: 'https://wa.me/5561985410459', name: 'Orçamentos' },
    ],
  },
  program: {
    title: 'Dias de Funcionamento',
    items: [
      { name: 'Segunda - Sexta / 8:00 h - 22:00 h' },
      { name: 'Sábado / 9:00 h - 22:00 h' },
      { name: 'Domingo e Feriados / 10:00 - 22:00 h' },
    ],
  },
  newsletter: {
    title: 'Novidades',
    subtitle:
      'Deixe seu email para novos eventos.',
    form: {
      placeholder: 'Seu e-mail',
      icon: <FiSend />,
    },
  },
};
