import React from 'react';

// import components
import Hero from './components/Hero';
import Header from './components/Header';
import About from './components/About';
import GallerySection from './components/GallerySection';
import GalleryartSection from './components/GalleryartSection';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Copyright from './components/Copyright';
import ScrollingText from './components/ScrollingText';



const App = () => {
  return (
    <div className='max-w-[1920px] mx-auto overflow-hidden text-[#c3b1a1]'>
      <Header />
      <Hero />
      <About />
      <GallerySection />
      <GalleryartSection />
      
      <Testimonial />
      <Contact />
     <ScrollingText
        text="Sua tattoo conosco! Agende já seu horário!"
        speed={30} // Tempo em segundos para o texto percorrer a tela
      />
      <Footer />
      <Copyright />
      {/* <div className='h-[4000px]'></div> */}
    </div>
  );
};

export default App;
