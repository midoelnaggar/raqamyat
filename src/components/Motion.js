import React from 'react';
import {motion} from 'framer-motion';

function Motion({children}) {
  return (
<motion.div
      className="contact_us_page"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.18 } }}>
        {children}
      </motion.div>  )
}

export default Motion