// import Tilt from 'react-parallax-tilt';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { style } from '../style';
import { github, web } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../Constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({index, name, description, tag, image, source_code_link, web_code_link}) => {
  return(
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      Test
      <Tilt options={{
        max:45,
        scale:1,
        speed:250
      }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-[450px] z-500"
      >
        {/* <img
            className='w-full h-full object-cover rounded-2xl'
            src={image}
            alt={name}
          /> */}
        <iframe className='relative w-full h-[230px] object-cover rounded-2xl'
          width="560px"
          height="315px"
          src={web_code_link}
        >
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover z-500'>
            <div className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer' 
              onClick={() => window.open(source_code_link, "_blank")}>
              <img
                className='w-1/2 h-1/2 object-contain'
                src={github}
                alt='github'
              />
            </div>
            <div className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor pointer' 
              onClick={() => window.open(web_code_link, "_blank")}>
              <img
                className='w-1/2 h-1/2 object-contain'
                src={web}
                alt='web'
              />
            </div>
          </div>
        </iframe>

        <div className='mt-5'>
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={style.sectionSubText}
          // id='about'
        >My Work</p>
        <h2 className={StyleSheet.sectionHeadText}>Projects</h2>
        
      </motion.div>

      <div className='w-full'>
        <motion.p
          className='mt-3 text-secondary text-[17px] leading-[30px] justify-center items-center'
          variants={fadeIn("", "", 0.2, 1)}
        >
          Solutions driven - committed to adding value & creating wholistic experiences.
          <br className='sm:block hidden'/>
          Prioritizing and conscientiously evaluating what you as a customer require from your program to keep it in scope and prompting effecient delivery.
        </motion.p>
        
        <div className='mt-20 flex flex-wrap justify-center items-center gap-7'>
          {projects.map((project, index) => (
            <ProjectCard 
              key={`project-${index}`}
              index={index}
              {...project}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default SectionWrapper(Works, "");