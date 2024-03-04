import { motion } from 'framer-motion';
import { style } from '../style';
import { fadeIn, textVariant } from '../utils/motion';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../Constants';

const Contact = () => {
  return (
    <div className='py-2'>
      <motion.div variants={textVariant()}>
        <p className={style.sectionSubText}
          // id='about'
        >Stay in touch</p>
        <h2 className={StyleSheet.sectionHeadText}>Contact</h2>
        
      </motion.div>

      <div className='flex flex-row flex-wrap justify-center items-center gap-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Contact, "");