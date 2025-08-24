import Heroimg from "../../components/Heroimg/Heroimg"
import { ToastContainer } from "react-toastify";
import { useStore } from "../../Store/Store"
import { MdDelete } from "react-icons/md";
import { Link } from "react-router";
import "./Cart.css"
import { div } from "framer-motion/client";

export default function Cart() {
  const {domain , cart , removefromcart , gettotalprice} = useStore()
  return (
    <>
      <Heroimg text="Cart" page="Cart" icon="'>'"/>
      {
        cart.length === 0 
        
        ?

          <div style={{backgroundColor:"#2b2b2b",padding:"100px 0px"}}>
            <h4 className='d-flex justify-content-center text-capitalize fs-2'>
                Your Cart looks empty
            </h4>
          </div>
          
        :
          <div>
            {
              cart.map((item)=>(
                <div key={item.documentId} className="row m-0 cart">
                  <div className="col-md-3 col-6 h-100 d-flex align-items-center justify-content-center">
                    <Link to={`/shop/${item.documentId}`}>
                      <img src={`${domain}${item.product_image[0].url}`} className="imgitem" alt="#"/>
                    </Link>
                  </div>

                  <div className="col-md-3 col-6 d-flex gap-3 flex-column h-100 justify-content-center align-items-center">
                    <p className="m-0">{item.product_name}</p>
                    <p className="m-0">{item.product_category}</p>
                  </div>

                  <div className="col-md-3 col-6 d-flex gap-3 flex-column h-100 justify-content-center align-items-center">
                    <p className="m-0">{`item price : ${item.product_price}`}</p>
                    <p className="m-0">{`quantity : ${item.quantity}`}</p>
                  </div>

                  <div className="col-md-3 col-6 d-flex flex-column h-100 justify-content-center align-items-center">
                    <p className="m-0">{`total price : ${item.product_price*item.quantity}`}</p>
                    <button className="fs-4 text-danger border-0 bg-transparent m-0"
                      onClick={()=>removefromcart(item.documentId)}
                      >
                        <MdDelete />
                    </button>
                  </div>
                </div>
              ))
            }
            <div className="p-5 d-flex justify-content-between align-items-center gettotal">
              <p>total price</p>
              <p className="price">EGP. <span>{gettotalprice()}</span></p>
            </div>
          </div>
          
      }
      <ToastContainer style={{ top: '15vh' , right:'0' }} />
    </>
  )
}
