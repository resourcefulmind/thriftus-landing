import React from 'react'

import styles from '../style';
import { discount, robot } from '../assets';

const Hero = () => (
  <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
        <img src={discount} alt="The digital crowdfunding you can trust" className='w-[32px] h-[32px]'/>
        <p className={`${styles.paragraph} ml-2`}>
        <span className='text-white'>Digital cooperative </span>
        to fund your{" "}
        <span className='text-white'>economic goals </span>
        always
        </p>
        
      </div>
    </div>
  </section>
)


export default Hero