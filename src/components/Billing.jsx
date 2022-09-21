import React from 'react'

import { apple, billpayy1, google } from '../assets';
import styles, { layout } from '../style';

const Billing = () => (
    <section id='product' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={billpayy1} alt='user account' className='w-[100%] h-[100%] relative z-[5]' />
        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient' />
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient' />
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Never worry about <br className='sm:block hidden' /> payments and remittances</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our system automatically debits the contributions from group participants' funding bank when parameters have been set. We also remit promptly to the appropriate party on the date specified for remittance at the start of the contribution.
        </p>
        <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
          <img src={apple} alt="Apple Store Download" className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer' />
          <img src={google} alt="Google Play Store Download" className='w-[128px] h-[42px] object-contain cursor-pointer' />
        </div>
      </div>
    </section>
)

export default Billing