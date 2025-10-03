import Heroimg from "../../components/Heroimg/Heroimg"
import { ToastContainer } from "react-toastify";
import { useStore } from "../../Store/Store"
import { MdDelete } from "react-icons/md";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function Order() {
  const {jwt_token , domain , gettotalprice , orderslist , deleteorder } = useStore();
  const navigate = useNavigate();

  useEffect(()=>{
      if(!jwt_token){
          navigate("/register")
      }
  },[jwt_token])

  return (
    <>
        <Heroimg text="orders" page="orders" icon="'>'"/>
              {
                orderslist.length === 0 
                
                ?
        
                  <div style={{backgroundColor:"#2b2b2b",padding:"100px 0px"}}>
                    <h4 className='d-flex justify-content-center text-capitalize fs-2'>
                        Your orders looks empty
                    </h4>
                  </div>
                  
                :
                  <div>
                    {
                      orderslist.map((ele , index)=>(
                        <div key={index} className="my-4">
                            <div className="d-flex justify-content-center align-items-center gap-5">
                              <p className="fs-3 py-4 text-center text-capitalize"> order number # {index + 1} </p>
                              <button className="fs-2 text-danger border-0 bg-transparent m-0"
                                onClick={()=>deleteorder(index)}
                                >
                                  <MdDelete />
                              </button>
                            </div>
                            {
                              ele.map((item )=>(
                                <div key={item.documentId} className="row m-0 cart">
                                  <div className="col-md-3 col-6 h-100 d-flex align-items-center justify-content-center">
                                      <img src={`${domain}${item.product_image[0].url}`} className="imgitem" alt="#"/>
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
                                  </div>
                                </div>
                              ))
                            }
                            
                            <div className="p-5 d-flex gap-2 align-items-center gettotal">
                              <p>total price</p>
                              <p className="price"> EGP. <span>{gettotalprice(ele)}</span></p>
                            </div>
                        </div>
                        
                      ))
                    }
                    
                  </div>
                  
              }
              <ToastContainer style={{ top: '15vh' , right:'0' }} />
    </>
  )
}
/* 

<div>
                          <div key={item.documentId} className="row m-0 cart">
                            <div className="col-md-3 col-6 h-100 d-flex align-items-center justify-content-center">
                                <img src={`${domain}${item.product_image[0].url}`} className="imgitem" alt="#"/>
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

                          <div className="p-5 d-flex mx-5 align-items-center gettotal">
                            <p>total price</p>
                            <p className="price">EGP. <span>{gettotalprice(cart)}</span></p>
                          </div>
                        </div>

*/