import React from "react";

import { headerData, sobreData } from "../data";
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Copyright from "../components/Copyright";

import { Link } from "react-scroll";
import { FaChevronUp} from 'react-icons/fa';



const Sobre = () => {
    
    const navigate = useNavigate()
    function buttonAbout() {
      navigate(`/`)
    }

    
    const {sobre, wokin} = sobreData;

    const {logo} = headerData;

    return (
        
         <article className='bg-[#1d2a3a]  xl:pb[160px] mt-[10px] lg:mt-0'>

            <div id="ser" className='flex  bg-yellow-900 justify-center items-center h-full pl-[50px] pr-[60px]'>     
                <motion.img variants={fadeIn('right')}
            initial="hidden"
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}} onClick={buttonAbout} className='  cursor-pointer w-[300px] h-[300px]' src={logo} alt=''/>
            </div>

          <button onClick={buttonAbout} className='mt-8 mr-8 ml-8 btn btn-lg btn-link'>
           Voltar
          </button>

        <div className='container mx-auto '>
          <div className='flex flex-col lg:flex-row gap-x-[70px]
          items-center
          '>
            <motion.div variants={fadeIn('right')}
              initial="hidden"
              whileInView={'show'} 
             className='flex flex-col lg:flex-row flex-1'>
              
                <img className='w-[250px] h-[300px] xl:mt-[180px] mt-[20px] mb-[20px] xl:w-[550px] xl:h-[600px] rounded-md ' src={sobre} alt=''/>
            
            </motion.div>
            {/*text*/}
              <motion.div variants={fadeIn('left')}
              initial="hidden"
              whileInView={'show'} className='flex-1 h-full xl:mt-48'>
                <h2 className='h2'>
                  Nossa História
                </h2>
                <div className='flex flex-col items-end'>
                  <div className='max-w-[530px]'>
                    <p className='mb-6'>Após passar por um evento canônico que mudou nossa perspectiva sobre a vida e a arte, decidimos fundar a empresa Talismã Tattoo Studio, com o objetivo de compartilhar nossa paixão pela tatuagem e criar um espaço onde a criatividade e a expressão artística pudessem fluir livremente.
                    </p>

                    <p className='mb-9'>Desde o início, nosso foco foi oferecer uma experiência única e personalizada para cada cliente, valorizando a individualidade e a estética de cada um. Nos apaixonamos mais ainda pela arte e começamos a montar quadros que refletiam nossa visão e habilidade.
                    </p>

                    <p className='mb-6'>O Talismã Tattoo Studio é um estúdio para clientes de todo Distrito Federal em busca de qualidade, profissionalismo e inovação. Nossa equipe de artistas talentosos e dedicados trabalha incansavelmente para criar peças únicas e personalizadas, que não apenas refletem a arte, mas também contam histórias.

                    </p>

                    <p className='mb-9'>Nossa filosofia é simples: oferecer uma experiência transformadora, que vá além da simples tatuagem, e se torne uma jornada de autoexpressão e descoberta. O Talismã Tattoo Studio é mais do que um estúdio de tatuagem; é um santuário da criatividade, onde a arte e a paixão se encontram.
                    </p>

                    <p className='mb-6'>Hoje, orgulhamos-nos de ser um dos principais destinos para aqueles que buscam uma experiência de tatuagem autêntica e inesquecível. E continuamos a inovar, sempre buscando novas formas de expressão e novos caminhos para criar arte que inspire e transforme.</p>
                    
                  
                  </div>
                </div>
              </motion.div>
                

               
          </div>
                <Link  to="ser" spy={true} smooth={true} duration={700} className='flex cursor-pointer items-center justify-center mt-8 dark:text-light'>
                  <FaChevronUp size={40} /> {/* Usando o ícone */}
                </Link>
 {/**texto para seo serviços */}

          <div className='flex flex-col lg:flex-row gap-x-[70px]
          items-center
          '>
          <motion.div variants={fadeIn('left')}
              initial="hidden"
              whileInView={'show'} className='flex-1 h-full xl:mt-48'>

                
                
                <div className='flex mt-16 flex-col items-start'>

          
                  <h2 className='text-4xl mb-6 mt-10 text-yellow-700 font-bold'>Talisma Tattoo Studio: Transformando Arte em Pele em Brasília</h2>

                  <div className='max-w-[530px]'>
                    <p className='mb-6'>
                      O Talisma Tattoo Studio é referência em Brasília para quem busca expressar sua personalidade através da arte na pele. Com uma equipe de tatuadores altamente qualificados e apaixonados por sua arte, oferecemos uma experiência única e personalizada, garantindo que cada tatuagem seja uma obra-prima exclusiva.
                    </p>

                     <h2 className='text-2xl mb-6 mt-10 text-yellow-700 font-bold'>Estilos para Todos os Gostos</h2>

                    <p className='mb-8'>
                        No Talisma Tattoo Studio, acreditamos que cada cliente tem um estilo único. Por isso, nossos artistas são especializados em diversos tipos de tatuagens, como:
                    </p>

                    <li className="mb-3">
                      Old School: Um clássico que nunca sai de moda, com traços grossos e cores vibrantes.
                    </li>
                    <li className="mb-3">
                      Blackwork: Tatuagens sólidas, monocromáticas e impactantes.
                    </li>
                    <li className="mb-3">
                      Caligrafia gótica: é uma escolha popular entre aqueles que buscam incorporar arte, história e expressão pessoal em sua pele. Inspirada no estilo de escrita medieval, a caligrafia gótica traz um visual forte, detalhado e elegante, ideal para quem deseja transmitir profundidade e personalidade em sua tatuagem.
                    </li>
              

                    <p className='mb-6'>
                      Seja qual for o estilo que você procura, nossa equipe trabalha para garantir que o resultado final seja fiel à sua visão e repleto de significado.

                    </p>

                     <h2 className='text-2xl mb-6 mt-10 text-yellow-700 font-bold'>
                      Por Que Escolher o Talisma Tattoo Studio?
                    </h2>

                    <li className="mb-9">
                      Tatuadores Experientes: Nossa equipe é formada por artistas talentosos que entendem a importância de transformar sua ideia em arte.
                    </li>
                    <li className="mb-9">
                      Higiene e Segurança: Trabalhamos com os mais altos padrões de higiene, utilizando materiais descartáveis e técnicas seguras para sua tranquilidade.
                    </li>

                    <li className="mb-9">
                      
                      Atendimento Personalizado: Cada cliente é único, e nos dedicamos a criar projetos que reflitam sua história e personalidade.
                    </li>

                    <p className='mb-9'>

                      Se você está em Brasília e busca um estúdio de tatuagem confiável, criativo e dedicado a oferecer o melhor em cada traço, o Talisma Tattoo Studio é o lugar certo.
                    </p>

                  </div>
                 
                          </div>
                        </motion.div>  
                        
                        <motion.div variants={fadeIn('right')}
                        initial="hidden"
                        whileInView={'show'} 
                      className='flex flex-col lg:flex-row flex-1'>
                        
                          <img className='w-[250px] h-[300px] xl:mt-[180px] mt-[20px] mb-[20px] xl:w-[550px] xl:h-[600px] rounded-md ' src={wokin} alt=''/>
                      
                      </motion.div> 

                 </div>
              <Link  to="ser" spy={true} smooth={true} duration={700} className='flex cursor-pointer items-center justify-center mt-8 dark:text-light'>
                  <FaChevronUp size={40} /> {/* Usando o ícone */}
                </Link>
        
        </div>
       
        <Copyright />
    </article>
    );
};

export default Sobre;