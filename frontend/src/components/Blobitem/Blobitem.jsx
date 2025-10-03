import { Link } from 'react-router'
import './Blobitem.css'
import { motion } from 'framer-motion'

export default function Blobitem({ele}) {
  return (
    <>
        <motion.div 
          className="col-lg-4 col-md-6 col-12 mx-auto" 
          initial={{ y: 150, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
            <div className="d-flex flex-column gap-3 w-100 p-3 blogitem" >
                <div className="blogimgparent">
                  <Link to={`/blog/${ele.documentId}`}>
                    <img src={`http://localhost:1337${ele.blog_images.url}`}
                    className="w-100 h-100 blogimg" 
                    loading="lazy" 
                    alt={ele.blog_name}
                    />
                  </Link>
                </div>
                <p><span>Jul 08</span> {"-"} John Mathew </p>
                <h3>
                  <Link to={`/blog/${ele.documentId}`} >
                    {ele.blog_name}
                  </Link>
                </h3>
                <p className="fs-6">{ele.blog_description}</p>
            </div>
        </motion.div>
    </>
  )
}
