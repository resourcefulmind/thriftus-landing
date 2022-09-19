import React from 'react';
import styles from '../style';
import Button from './Button';

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className='flex-1 flex flex-col'>
      <h2 className={styles.heading2}>Achieve your financial goals with ease</h2>
      <p className={`${styles.paragraph} max-w-[870px] mt-5`}>Let us help you reach your targets and meet your economic needs with less headaches and in less time. ThriftUs uses the highest level of Internet Security and it is secured by 256 bits SSL security encryption.</p>
    </div>
    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
)

export default CTA