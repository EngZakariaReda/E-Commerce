import { IoSearchSharp  } from "react-icons/io5";
import { GrFavorite } from "react-icons/gr";
import { TfiReload } from "react-icons/tfi";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { BsPersonCircle  } from "react-icons/bs";
import { IoReorderFourSharp } from "react-icons/io5";
import { Link, NavLink } from "react-router";
import { useState } from "react";
import "./Navbar.css"
import { useStore } from "../../Store/Store";

export default function Navbar({click}) {
   const {wishlist , cart , comparelist} = useStore()
   const activevalue = JSON.parse(sessionStorage.getItem("value")) || 0 ;
   const [isactive , setactive ] = useState(activevalue);
   const changecolor=(index)=>{
      sessionStorage.setItem("value" , JSON.stringify(index)); 
      setactive(index);
   }

  return (
    <>
      <div className={`headerparent container-fluid my-0`}>
        <header className={`header container d-flex justify-content-between align-items-center w-100 h-100`}>
          <div>
            <img src="\images\logo.webp" width={150} className="logo" />
          </div>

          <div className={`d-flex gap-5 align-items-center text-capitalize nav`}>
            <p className="m-0">
              <NavLink to={"/"} className={isactive === 0 ? "active" : " "}
               onClick={()=>{changecolor(0)}}>home
              </NavLink>
            </p>

            <p className="m-0">
              <NavLink to={"/collections"} className={isactive === 1 ? "active" : " "}
              onClick={()=>{changecolor(1)}}>collections
              </NavLink>
            </p>

            <p className="m-0">
              <NavLink to={"/shop"} className={isactive === 2 ? "active" : " "}
              onClick={()=>{changecolor(2)}}>shop
              </NavLink>
            </p>
            
            <p className="m-0">
              <NavLink to={"/blog"} className={isactive === 3 ? "active" : " "}
              onClick={()=>{changecolor(3)}}>blog
              </NavLink>
            </p>

            <div className="m-0"> 
              <a className={`dropdown-toggle`}
                 href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                  pages
              </a>
              <div className={`dropdownmenu dropdown-menu`} aria-labelledby="dropdownMenuLink">
                <span className={`dropdown-item text-white text-uppercase dropdownsingle`}>
                  <NavLink to={"/about"} className={isactive === 4 ? "active" : " "}
                    onClick={()=>{changecolor(4)}}>about
                  </NavLink>
                </span>

                <span className={`dropdown-item text-white text-uppercase dropdownsingle`}>
                  <NavLink to={"/faq"} className={isactive === 5 ? "active" : " "}
                    onClick={()=>{changecolor(5)}}>Faq
                  </NavLink>
                </span>
              </div>
            </div>

            <p className="m-0">
              <NavLink to={"/contact"} className={isactive === 6 ? "active" : " "}
                onClick={()=>{changecolor(6)}}>contact
              </NavLink>
            </p>
          </div>

          <div className={`d-flex gap-4 h-100 align-items-center icons-nav`}>
              <button className='bg-transparent border-0 text-white'>
                <IoReorderFourSharp className="query m-0"
                 onClick={()=> click()} />
              </button>

              <button className='bg-transparent border-0 text-white'>
                <Link to={"/search"}><IoSearchSharp  className={isactive === 7 ? "active" : " "}
                  onClick={()=>{changecolor(7)}} /></Link>
              </button>

              <button className='bg-transparent border-0 text-white parentlength'>
                <Link to={"/wishlist"}><MdOutlineShoppingCartCheckout className={isactive === 8 ? "active" : " "}
                onClick={()=>{changecolor(8)}} /></Link>
                <div className={cart.length === 0 ? "d-none" : "lenghtnumber"}>{cart.length}</div>
              </button>

              <button className='bg-transparent border-0 text-white parentlength'>
                <Link to={"/favourite"} className={isactive === 9 ? "active" : " "}
                onClick={()=>{changecolor(9)}}><GrFavorite /></Link>
                <div className={wishlist.length === 0 ? "d-none" : "lenghtnumber"}>{wishlist.length}</div>
              </button>

              <button className='bg-transparent border-0 text-white parentlength'>
                <Link to={"/compare"}><TfiReload className={isactive === 10 ? "active" : " "}
                onClick={()=>{changecolor(10)}} /></Link>
                <div className={comparelist.length === 0 ? "d-none" : "lenghtnumber"}>{comparelist.length}</div>
              </button>

              <button className='bg-transparent border-0 text-white'>
                <Link to={"/"}><BsPersonCircle  className={isactive === 11 ? "active" : " "}
                onClick={()=>{changecolor(11)}} /></Link>
              </button>
          </div>
        </header>
      </div>
    </>
  )
}

