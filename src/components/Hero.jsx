import React from 'react'

import styles from '../style';
import { discount, thriftusmockup3 } from '../assets';
import { motion } from 'framer-motion';
import GetStarted from './GetStarted'

const Hero = () => (
  <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
        <img src={discount} alt="The digital crowdfunding you can trust" className='w-[32px] h-[32px]'/>
        <p className={`${styles.paragraph} ml-2`}>
        <span className='text-white'>Digital Cooperative </span>
        To Fund Your{" "}
        <span className='text-white'>Economic Goals </span>
        Always
        </p>
      </div>

      <div className='flex flex-row justify-between items-center w-full'>
        <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]'>
          <span className='text-gradient'>Stress Less</span> <br className='sm:block hidden' /> {" "}
          About Your {" "}<br className='sm:block hidden' /> {" "}
        </h1>
        <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.5, type: 'tween' }}
          className="ss:flex hidden md:mr-4 mr-0"
        >
          <GetStarted />
        </motion.div>
      </div>

      <h1 className='text-gradient font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full'>Contribution Money</h1>
      <p className={`${styles.paragraph} max-w-[670px] mt-5`}>
      Cut down the bureaucracy, stress, and “fear-of-the-unknown stories that touch” involved with running your monthly contributions. <span className='text-gradient'>ThriftUs</span> enables you to concentrate on the plans for “your” money and start a contribution at any time from the comfort of your smartphone, while we handle the operations and security of your funds and contribution members.
      </p>
    </div>

    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img src={thriftusmockup3} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      {/* gradient end */}
    </div>

    <div className={`ss:hidden ${styles.flexCenter}`}>
      <GetStarted />
    </div>
  </section>
)


export default Hero