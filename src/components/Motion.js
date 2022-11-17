import React from 'react';
import {motion} from 'framer-motion';

function Motion({children}) {
  return (
<motion.div
      className="contact_us_page"
      initial={{ scale: 0 }}
      animate={{ scale: 1,transition:{duration:1} }}>
        {children}
      </motion.div>  )
}

export default Motion