import { Link, useNavigate } from 'react-router'
import Heroimg from '../../components/Heroimg/Heroimg'
import { useStore } from '../../Store/Store'
import "./Favourite.css"
import { ToastContainer } from 'react-toastify'
import { useEffect } from 'react'
export default function Favourite() {
  const {jwt_token , domain , wishlist , removefromwishlist} = useStore();
  const navigate = useNavigate();
  
  useEffect(()=>{
      if(!jwt_token){
          navigate("/register")
      }
  },[jwt_token])
  return (
    <>
      <Heroimg text="Wishlist" page="Wishlist" icon="'>'"/>
      {
        wishlist.length === 0 
        
        ?

          <div style={{backgroundColor:"#2b2b2b",padding:"100px 0px"}}>
            <h4 className='d-flex justify-content-center text-capitalize fs-2'>
              Your wishlist looks empty
            </h4>
          </div>
          
        :
        
        <div className="containwishlist">
          <div className="row m-0 g-4">
            {
              wishlist.map((item)=>(
                <div key={item.documentId} className='col-lg-3 col-md-6 col-12 text-center shopproduct'>
                  <div className='d-flex flex-column gap-3'>
                    <div className='w-100' style={{height:"300px"}}>
                      <Link to={`/shop/${item.documentId}`}>
                          <img src={`${domain}${item.product_image[0].url}`} className='w-100 h-100'  />
                      </Link>
                    </div>
                    <div className='d-flex flex-column gap-3'>
                        <h4>{item.product_name}</h4>
                        <p className="m-0">EGP. {item.product_price}</p>
                        <button className="remove" onClick={()=>removefromwishlist(item.documentId)}>remove</button>
                    </div>
                  </div>
              </div>
              ))
            }
          </div>
        </div>
      }
      <ToastContainer style={{ top: '15vh' , right:'0' }} />
    </>
  )
}
