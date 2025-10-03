import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { IoReorderFourSharp } from "react-icons/io5";
import { IoSearchSharp  } from "react-icons/io5";
import { MdBorderColor } from "react-icons/md";
import { BsPersonCircle  } from "react-icons/bs";
import { GrFavorite } from "react-icons/gr";
import { TfiReload } from "react-icons/tfi";
import { Link } from "react-router";
import { useStore } from "../../Store/Store";
import { motion } from 'framer-motion'
import "./Navbar.css"

export default function Navbar({click}) {
   const {activevalue , changecolor, wishlist , cart , comparelist , orderslist , jwt_token} = useStore()
  return (
    <>
      <motion.div 
        className={`headerparent container-fluid`}
        
      >
        <header className={`header container d-flex justify-content-between align-items-center w-100 h-100`}>
          <div>
            <img src="\images\logo.webp" width={150} className="logo" />
          </div>

          <div className={`d-flex gap-4 align-items-center text-capitalize nav`}>
            <p className="m-0">
              <Link to={"/"} className={activevalue === 0 ? "active" : ""}
               onClick={()=>{changecolor(0)}}>home
              </Link>
            </p>

            <p className="m-0">
              <Link to={"/collections"} className={activevalue === 1 ? "active" : ""}
              onClick={()=>{changecolor(1)}}>collections
              </Link>
            </p>

            <p className="m-0">
              <Link to={"/shop"} className={activevalue === 2 ? "active" : ""}
              onClick={()=>{changecolor(2)}}>shop
              </Link>
            </p>
            
            <p className="m-0">
              <Link to={"/blog"} className={activevalue === 3 ? "active" : ""}
              onClick={()=>{changecolor(3)}}>blog
              </Link>
            </p>

            <p className="m-0">
              <Link to={"/about"} className={activevalue === 4 ? "active" : ""}
                onClick={()=>{changecolor(4)}}>about
              </Link>
            </p>

            <p className="m-0">
              <Link to={"/faq"} className={activevalue === 5 ? "active" : ""}
                onClick={()=>{changecolor(5)}}>FAQ
              </Link>
            </p>

            <p className="m-0">
              <Link to={"/contact"} className={activevalue === 6 ? "active" : ""}
                onClick={()=>{changecolor(6)}}>contact
              </Link>
            </p>

          </div>

          <div className={`d-flex gap-4 h-100 align-items-center icons-nav`}>
              <button className='bg-transparent border-0 text-white'>
                <IoReorderFourSharp className="query m-0"
                 onClick={()=> click()} />
              </button>

              <button className='bg-transparent border-0 text-white'>
                <Link to={"/search"}><IoSearchSharp  className={activevalue === 7 ? "active" : ""}
                  onClick={()=>{changecolor(7)}} />
                </Link>
              </button>

              <button className='bg-transparent border-0 text-white parentlength'>
                <Link to={"/cart"}><MdOutlineShoppingCartCheckout className={activevalue === 8 ? "active" : ""}
                onClick={()=>{changecolor(8)}} /></Link>
                <div className={ jwt_token ? cart.length === 0 ? "d-none" : "lenghtnumber" :"d-none"}>
                  {cart.length}
                </div>
              </button>

              <button className='bg-transparent border-0 text-white parentlength'>
                <Link to={"/favourite"} className={activevalue === 9 ? "active" : ""}
                onClick={()=>{changecolor(9)}}><GrFavorite /></Link>
                <div className={ jwt_token ? wishlist.length === 0 ? "d-none" : "lenghtnumber" :"d-none"}>
                  {wishlist.length}
                </div>
              </button>

              <button className='bg-transparent border-0 text-white parentlength'>
                <Link to={"/compare"}><TfiReload className={activevalue === 10 ? "active" : ""}
                onClick={()=>{changecolor(10)}} /></Link>
                <div className={ jwt_token ? comparelist.length === 0 ? "d-none" : "lenghtnumber" :"d-none"}>
                  {comparelist.length}
                </div>
              </button>

              <button className='bg-transparent border-0 text-white parentlength'>
                <Link to={"/orders"}><MdBorderColor className={activevalue === 11 ? "active" : ""}
                onClick={()=>{changecolor(11)}} /></Link>
                <div className={ jwt_token ? orderslist.length === 0 ? "d-none" : "lenghtnumber" :"d-none"}>
                  {orderslist.length}
                </div>
              </button>

              <button className='bg-transparent border-0 text-white'>
                <Link to={"/register"}><BsPersonCircle  className={activevalue === 12 ? "active" : ""}
                onClick={()=>{changecolor(12)}} /></Link>
              </button>
          </div>
        </header>
      </motion.div>
    </>
  )
}