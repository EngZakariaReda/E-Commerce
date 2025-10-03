import { NavLink } from "react-router";
import { useStore } from "../../Store/Store";
import { motion } from "framer-motion";


export default function Userinformation({username,email,createdAt}) {
    const {removetoken} = useStore();
    const formattedDate = new Date(createdAt).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    });

  return (
    <div className="container my-5">
      <motion.div
        className=" border-0 rounded-4 mb-4"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="card-body text-center p-4">

          <h3 className="fw-bold text-capitalize number">
                {username}
          </h3>

          <p className="text-white mb-2">
                {email}
          </p>

          <p className="text-white">Joined: {formattedDate}</p>

          <div className="d-flex justify-content-center">
            <button className="text-capitalize p-2 rounded-pill">
                <NavLink to={"/cart"}> cart </NavLink>
            </button>
            <button className="text-capitalize p-2 rounded-pill">
                <NavLink to={"/favourite"}> wishlist </NavLink>
            </button>
            <button className="text-capitalize p-2 rounded-pill">
                <NavLink to={"/compare"}> compare </NavLink>
            </button>
            <button className="text-capitalize p-2 rounded-pill">
                <NavLink to={"/orders"}> orders </NavLink>
            </button>
          </div>

          <button 
            className="btn btn-danger btn-sm mt-2"
            onClick={removetoken}
          >
            Remove Token
          </button>
        </div>
      </motion.div>
    </div>
  );
};
 /*  <button onClick={()=>{removetoken()}}>remove token </button>  */