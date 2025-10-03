import { FiCornerDownRight } from "react-icons/fi";
import { motion } from "framer-motion";
import './Imgpara.css'

export default function Imgpara() {
  return (
    <>
        <div className="Imgpara">
            <div className="row g-5">
                <div className="col-lg-6 col-12">
                    <motion.div 
                        className='d-flex flex-column gap-3'
                        initial={{ x: -150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <p className='headp'>HOME DECOR HUB</p>
                        <h4>Exceptional Furniture's For Indoor & Outdoor</h4>
                        <p className='text-white-50'>
                            Ut eleifend mattis ligula, porta finibus urna gravida at.
                            Aenean vehicula sodales arcu non mattis. Integer dapibus 
                            ac dui pretium blandit. Class aptent taciti sociosqu ad 
                            litora torquent per conubia nostra, per inceptos himenaeos.
                        </p>
                        <motion.div 
                            className='mt-4'
                            initial={{ y: 150, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <img src="images/Group_131808.webp" alt="#"  className='w-100'/>
                        </motion.div>
                    </motion.div>
                </div>

                <div className="col-lg-6 col-12">
                    <motion.div 
                        className='d-flex flex-column gap-3'
                        initial={{ x: 150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.div
                            className='d-flex flex-column gap-3'
                            initial={{ y: -150, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <img src="images/Rectangle_38880.webp" alt="#"  className='w-100'/>
                        </motion.div>
                        <h4>Discover Endless Designs</h4>
                        <p className='text-white-50'>
                            Integer dapibus ac dui pretium blandit. Class aptent taciti sociosqu 
                            ad litora torquent per conubia nostra, per inceptos himenaeos. Ut eleifend 
                            mattis ligula, porta finibus urna gravida at. Aenean vehicula sodales arcu non mattis.
                        </p>
                        <div className='d-flex flex-column gap-3 mt-5'>
                            <p className='d-flex align-items-center'><FiCornerDownRight className='headp me-2'/>Ut eleifend mattis ligula, porta finibus urna gvida at.</p>
                            <p><FiCornerDownRight className='headp me-2'/>Aenean vehicula sodales arcu non mattis.</p>
                            <p><FiCornerDownRight className='headp me-2'/>Integer dapibus ac dui pretium blanss aptent.</p>
                        </div>
                    </motion.div>
                    
                </div>
            </div>
        </div>
    </>
  )
}
