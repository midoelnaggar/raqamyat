import React from 'react';
import {motion} from 'framer-motion';

function Motion({children}) {
  return (
<motion.div
      className="contact_us_page"
      initial={{ opacity:0,marginLeft:"-200px" }}
      animate={{ opacity: 1 ,marginLeft:"0px",transition:{duration:0.5} }}
      >
        {children}
      </motion.div>  )
}

export default Motion