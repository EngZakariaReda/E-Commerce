import { motion } from "framer-motion";
import React from "react";

export default function Loader() {
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ height: "25vh" , backgroundColor:"rgb(16,16,16)"}}
    >
      <div className="d-flex" style={{ gap: "8px" }}>
        {[...Array(3)].map((_, i) => (
          <motion.span
            key={i}
            style={{
              width: "16px",
              height: "16px",
              backgroundColor: "white", // Bootstrap primary blue
              borderRadius: "50%",
            }}
            animate={{
              y: ["0%", "-50%", "0%"],
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
}