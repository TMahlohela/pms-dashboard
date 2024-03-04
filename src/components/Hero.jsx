import { motion } from 'framer-motion';
import { style } from '../style';
import { ComputersCanvas } from './canvas';
import Computers from './canvas/Computers';


const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${style.paddingX} absolute inset-2 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#576e6a]'/>
          <div className='w-1 sm:h-80 h-40 aventurine-gradient'/>
        </div>

        <div>
          <h1 className={`${style.heroHeadText} text-white`}>Hi, I'm 
            <span className='text-[#915eff]'></span>Tebogo...
          </h1>
          <p className={`${style.heroSubText} mt-2 text-white-100`}>
            a Professional Web <br className='sm:block hidden'/>
            HTML5 <br className='sm:block hidden'/>
            CSS3 <br className='sm:block hidden'/>
            JavaScript <br className='sm:block hidden'/>
            React <br className='sm:block hidden'/>
            Java <br className='sm:block hidden'/>
            C#, .NET developer, <br className='sm:block hidden'/>
            as well as an Azure Security Engineer <br className='sm:block hidden'/>
            and Azure Administrator
          </p>
        </div>
      </div>

      <Computers />

      <ComputersCanvas
      />

      <div className='absolute xs:bottom-2 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[30px] h-[52px] rounded-3xl border-4 border-[#576e6a] flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y:[0, 24, 0]
              }}
              transition={{
                duration:1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className='w-2 h-2 rounded-full bg-[#576e6a] mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero