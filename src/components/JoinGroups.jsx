import React from 'react';
import { group21 } from '../assets';
import styles, { layout } from '../style';
import Button from './Button';

const JoinGroups = () => (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Join contribution groups <br className='sm:block hidden'/>with similar targets <br className='sm:block hidden' />in few easy steps.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Don't have buddies or want to make a bigger contribution? Our system will match you with other people having the same contribution targets at any time.</p>
        <Button styles='mt-10' />
      </div>
      <div className={layout.sectionImg}>
        <img src={group21} alt="Scan and find groups" className='w-[100%] h-[100%]' />
      </div>
    </section>
)

export default JoinGroups