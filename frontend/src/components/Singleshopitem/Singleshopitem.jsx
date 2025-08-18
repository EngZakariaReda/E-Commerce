import { useState } from 'react'
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { VscGitCompare } from "react-icons/vsc";
import "./Singleshopitem.css"
import { Tooltip } from 'react-tooltip';
import { Link } from 'react-router';

export default function Singleshopitem({id,name,category,price,images}) {
    const imgurl = "http://localhost:1337"
    
    const [img , setimage] = useState(`${imgurl}${images[0].url}`)
  return (
    <>
        <div className='col-lg-4 text-center shopproduct'>
            <div className='w-100' style={{height:"300px"}}
            onMouseEnter={()=>setimage(`${imgurl}${images[1].url}`)}
            onMouseLeave={()=>setimage(`${imgurl}${images[0].url}`)}
            >
                <Link to={`/shop/${id}`}>
                    <img src={img} className='w-100 h-100'  />
                </Link>
            </div>
            <div className='d-flex flex-column gap-2 my-2' >
                <p className="fs-6">{category}</p>
                <h4><Link to={`/shop/${id}`}>{name}</Link></h4>
                <p className="fs-5">EGP. {price}</p>
            </div>

            <div className='d-flex flex-column gap-2 iconsparent'>
                <button className='icon d-flex justify-content-center align-items-center'
                data-tooltip-id={`cart-${id}`} data-tooltip-content="add to cart"
                >
                    <MdOutlineShoppingCartCheckout />
                </button>
                <Tooltip id={`cart-${id}`} place='left' classNameArrow="custom-arrow-left" className="custom-tooltip-left" />

                <button className='icon d-flex justify-content-center align-items-center'
                data-tooltip-id={`cart-${id}`} data-tooltip-content="add to wishlist"
                >
                    <CiHeart />
                </button>
                <Tooltip id={`cart-${id}`} place='left' classNameArrow="custom-arrow-left" className="custom-tooltip-left" />

                <button className='icon d-flex justify-content-center align-items-center'
                data-tooltip-id={`cart-${id}`} data-tooltip-content="add to compare"
                >
                    <VscGitCompare />
                </button>
                <Tooltip id={`cart-${id}`} place='left' classNameArrow="custom-arrow-left" className="custom-tooltip-left" />
            </div>
        </div>
    </>
  )
}
