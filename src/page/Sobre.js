import React from "react";

import { headerData, sobreData } from "../data";
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Copyright from "../components/Copyright";


const Sobre = () => {
    const navigate = useNavigate()
    function buttonAbout() {
      navigate(`/`)
    }

    
    const {sobre} = sobreData;

    const {logo} = headerData;

    return (
        
         <section  className='bg-[#1d2a3a]  xl:pb[160px] mt-[10px] lg:mt-0'>

            <div className='flex  bg-yellow-900 justify-center items-center h-full pl-[50px] pr-[60px]'>     
                <motion.img variants={fadeIn('right')}
            initial="hidden"
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}} onClick={buttonAbout} className='  cursor-pointer w-[300px] h-[300px]' src={logo} alt=''/>
            </div>

            
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

          <motion.div variants={fadeIn('left')}
              initial="hidden"
              whileInView={'show'} className='flex-1 h-full xl:mt-48'>
                
                <div className='flex mt-16 flex-col items-start'>

          
                  <h2 className='h2 mt-10'>Nossa Missão</h2>
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

                  <button onClick={buttonAbout}  className='mb-[40px] btn btn-lg btn-link'>
                      Voltar
                    </button>
        </div>
        <Copyright />
    </section>
    );
};

export default Sobre;