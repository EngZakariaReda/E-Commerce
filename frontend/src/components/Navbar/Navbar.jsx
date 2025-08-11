import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { TfiReload } from "react-icons/tfi";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoReorderThreeOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router";
import { useState } from "react";
import "./Navbar.css"

export default function Navbar({click}) {

   const [isactive , setactive ] = useState(null)
   const [basic , setbasic ] = useState("rgb(221, 114, 16)")
   const changecolor=(index)=>{
       setbasic("white");
       setactive(index);    
   }

  return (
    <>
      <div className={`headerparent container-fluid my-0`}>
        <header className={`header container d-flex justify-content-between align-items-center h-100`}>
          <div>
            <img src="\images\logo.webp" width={150} className="logo" />
          </div>

          <div className={`d-flex gap-5 align-items-center text-capitalize nav`}>
            <p className="m-0">
              <NavLink to={"/"} style={{color:{basic}}} className={isactive === 0 ? "active" : " "}
               onClick={()=>{
                changecolor(0)
              }}>home
              </NavLink>
            </p>

            <p className="m-0">
              <NavLink to={"/collections"} className={isactive === 1 ? "active" : " "}
              onClick={()=>{
                changecolor(1)
              }}>collections
              </NavLink>
            </p>

            <p className="m-0">
              <NavLink to={"/shop"} className={isactive === 2 ? "active" : " "}
              onClick={()=>{
                changecolor(2)
              }}>shop
              </NavLink>
            </p>
            
            <p className="m-0">
              <NavLink to={"/blog"} className={isactive === 3 ? "active" : " "}
              onClick={()=>{
                changecolor(3)
              }}>blog
              </NavLink>
            </p>

            <div className="m-0">
              <a className={"dropdown-toggle"}
                 href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                pages
              </a>
              <div className={`dropdownmenu dropdown-menu`} aria-labelledby="dropdownMenuLink">
                <span className={`dropdown-item text-white text-uppercase dropdownsingle`}>
                  <NavLink to={"/about"} className={isactive === 4 ? "active" : " "}
                    onClick={()=>{
                      changecolor(4)
                    }}>about
                  </NavLink>
                </span>

                <span className={`dropdown-item text-white text-uppercase dropdownsingle`}>
                  <NavLink to={"/faq"} className={isactive === 5 ? "active" : " "}
                    onClick={()=>{
                      changecolor(5)
                    }}>Faq
                  </NavLink>
                </span>
              </div>
            </div>

            <p className="m-0">
              <NavLink to={"/contact"} className={isactive === 6 ? "active" : " "}
                onClick={()=>{
                  changecolor(6)
                }}>contact
              </NavLink>
            </p>
          </div>

          <div className={`d-flex gap-4 align-items-center fs-4`}>
              <button className='bg-transparent border-0 text-white fs-4'>
                <IoReorderThreeOutline className="query" onClick={()=> click()} />
              </button>

              <button className='bg-transparent border-0 text-white'>
                <CiSearch />
              </button>

              <button className='bg-transparent border-0 text-white'>
                <Link to={"/favourite"}><CiHeart /></Link>
              </button>

              <button className='bg-transparent border-0 text-white'>
                <Link to={"/compare"}><TfiReload /></Link>
              </button>

              <button className='bg-transparent border-0 text-white'>
                <MdOutlineShoppingCartCheckout className="smallquery" />
              </button>

              <button className='bg-transparent border-0 text-white'>
                <MdOutlineAccountCircle className="smallquery" />
              </button>
          </div>
        </header>
      </div>
    </>
  )
}

