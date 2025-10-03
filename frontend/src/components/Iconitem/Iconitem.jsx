import styles from './Iconitem.module.css'
import { MdAttachEmail } from "react-icons/md";
import { motion } from 'framer-motion'
import { useLocation } from 'react-router';

export default function Iconitem(props) {
    const location = useLocation();

  return (
    <>
        <motion.div 
            className={`col-lg-3 col-md-6 col-12 `}
            key={location.pathname}
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
        >
            <div className={`d-flex gap-3 justify-content-center align-items-center`}>
                <div className={styles.relativeicon}>
                    <MdAttachEmail className={styles.contacticon} />
                    <div className={styles.icon}></div>
                </div>
                <div>
                    <h4>{props.ele.text}</h4>
                    <p>{props.ele.para}</p>
                </div>
            </div>
        </motion.div>
    </>
  )
}
/* 


            key={window.location.pathname}
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            animate={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
*/