import React from 'react'
import { motion } from 'framer-motion'

const Button = ({ styles }) => {
  return (
    <motion.button
      whileInView={{ opacity: 1 }}
      whileHover={{ scale: 1.2 }}
      transition={{ duration: 0.5, type: 'tween' }}
      className={`py-4 px-6 bg-blue-gradient font-medium font-poppins rounded-[10px] w-[170px] text-[18px] text-primary outline-none ${styles}`}
      type='button'
    >
      Get Started
    </motion.button>
  )
}

export default Button