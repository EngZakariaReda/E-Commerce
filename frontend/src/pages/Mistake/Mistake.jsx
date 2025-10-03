import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import "./Mistake.css"
import { useStore } from "../../Store/Store";
export default function Mistake() {
  const navigate = useNavigate();
  const {changecolor} = useStore();
  return (
    <div className="container-fluid py-5 d-flex justify-content-center align-items-center">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="display-1 fw-bold number"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 120, delay: 0.3 }}
        >
          404
        </motion.h1>

        <motion.h2
          className="mb-3 fw-semibold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Page Not Found
        </motion.h2>

        <motion.p
          className="text-white mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          The page you are looking for might be missing, moved, or never existed.
        </motion.p>

        <motion.button
          className="text-capitalize p-2 mx-auto rounded-pill registerbtn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {navigate("/");changecolor(0)}}
        >
          Go Home
        </motion.button>
      </motion.div>
    </div>
  );
}