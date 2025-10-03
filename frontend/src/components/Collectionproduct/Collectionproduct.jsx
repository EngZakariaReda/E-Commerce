import { Link } from "react-router"
import { motion } from 'framer-motion'
import "./Collectionproduct.css"

export default function Collectionproduct(props) {
  return (
    <>
       <motion.div 
          className="col-lg-3 col-md-6 col-12 text-center"
          initial={{ y: 150, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
       >
            <Link to={props.ele.link}>
              <img src={props.ele.img} alt="#" className="w-100 mb-2" />
            </Link>
            <h4 className="m-0">
                <Link to={props.ele.link} className="text-capitalize fs-2">{props.ele.name}</Link>
            </h4>
       </motion.div> 
    </>
  )
}
