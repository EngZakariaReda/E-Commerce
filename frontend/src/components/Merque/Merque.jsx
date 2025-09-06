import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";
import { motion } from 'framer-motion'
import styles from "./Merque.module.css"

export default function Merque() {
  return (
    <>
        <motion.div
        className={`container ${styles.merque} `}
        
        >
            <div className={`row m-0 h-100`}>
                <div className="col-4 col-lg-4">
                    <div className="d-flex h-100 gap-4 align-items-center justify-content-center" style={{cursor:"pointer"}}>
                        <FaFacebook className="fs-4" />
                        <FaLinkedin className="fs-4" />
                        <CiInstagram  className="fs-3" />
                    </div>
                </div>
                <div className="col-4 col-lg-4">
                    <div className="d-flex h-100 gap-4 align-items-center justify-content-center">
                        <marquee width="100%" direction="left">
                             40% OFF Till Spring Sale soon  Free Shipping on Orders
                        </marquee>
                    </div>
                </div>
                <div className="col-4 col-lg-4 d-flex gap-4 justify-content-center align-items-center">
                    <img src="/images/Flag_of_Egypt.svg.webp" loading="lazy" width={50} />
                    <p className="text-capitalize">egypt</p>
                </div>
            </div>
        </motion.div>
    </>
  )
}
