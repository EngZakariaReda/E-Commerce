import { useState } from 'react'
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { VscGitCompare } from "react-icons/vsc";
import "./Singleshopitem.css"
import { Tooltip } from 'react-tooltip';

export default function Singleshopitem() {
    const [img , setimage] = useState("/images/shop-11-02.webp")
  return (
    <>
        <div className='col-lg-3 text-center shopproduct'>
            <div className='w-100' style={{height:"300px"}}
            onMouseEnter={()=>setimage("/images/shop-11-01.webp")}
            onMouseLeave={()=>setimage("/images/shop-11-02.webp")}
            >
                <img src={img} className='w-100 h-100'  />
            </div>
            <div className='d-flex flex-column gap-2 my-2' >
                <h4>Home Decoration</h4>
                <p className="fs-4">Steel Pot Jug</p>
                <p className="fs-5">Rs. 1350</p>
            </div>

            <div className='d-flex flex-column gap-2 iconsparent'>
                <button className='icon d-flex justify-content-center align-items-center'
                data-tooltip-id="my-tooltip" data-tooltip-content="add to cart"
                >
                    <MdOutlineShoppingCartCheckout />
                </button>
                <Tooltip id="my-tooltip" place='left' classNameArrow="custom-arrow-left" className="custom-tooltip-left" />

                <button className='icon d-flex justify-content-center align-items-center'
                data-tooltip-id="my-tooltip1" data-tooltip-content="add to wishlist"
                >
                    <CiHeart />
                </button>
                <Tooltip id="my-tooltip1" place='left' classNameArrow="custom-arrow-left" className="custom-tooltip-left" />

                <button className='icon d-flex justify-content-center align-items-center'
                data-tooltip-id="my-tooltip2" data-tooltip-content="add to compare"
                >
                    <VscGitCompare />
                </button>
                <Tooltip id="my-tooltip2" place='left' classNameArrow="custom-arrow-left" className="custom-tooltip-left" />
            </div>
        </div>
    </>
  )
}
