import Heroimg from "../../components/Heroimg/Heroimg";
import { ToastContainer } from "react-toastify";
import { useStore } from "../../Store/Store";
import { MdDelete } from "react-icons/md";
import { Link, useNavigate } from "react-router";
import "./Compare.css"
import { useEffect } from "react";

export default function Compare() {
  const {jwt_token , domain , comparelist , removefromcomparelist} = useStore();
  const navigate = useNavigate();
  
  useEffect(()=>{
      if(!jwt_token){
          navigate("/register")
      }
  },[jwt_token])
  return (
    <>
    {
        comparelist.length === 0 
        
        ?

          <div style={{backgroundColor:"#2b2b2b",padding:"100px 0px"}}>
            <h4 className='d-flex justify-content-center text-capitalize fs-2'>
                Nothing found to compare!
            </h4>
          </div>
          
        :
          
              <div className="container">
                <table className="table-bordered text-capitalize text-center align-middle w-100">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Product Image</th>
                    <th>Product Name</th>
                    <th>Product Category</th>
                    <th>Product Price</th>
                    <th>delete item</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    comparelist.map((item,index)=>(
                      <tr key={item.documentId}>
                        <td>
                          {index + 1}
                        </td>
                        <td>
                          <Link to={`/shop/${item.documentId}`}>
                              <img src={`${domain}${item.product_image[0].url}`} alt="#"/>
                          </Link>
                        </td>
                        <td>{item.product_name}</td>
                        <td>{item.product_category}</td>
                        <td>EGP. {item.product_price}</td>
                        <td>
                          <button className="fs-4 text-danger border-0 bg-transparent m-0"
                            onClick={()=>removefromcomparelist(item.documentId)}
                            >
                              <MdDelete />
                          </button>
                        </td>
                      </tr>
                    ))
                  }
                  
                </tbody>
              </table>
              </div>
      }

      <ToastContainer style={{ top: '15vh' , right:'0' }} />
    </>
  )
}
/* 


<button className="fs-4 text-danger border-0 bg-transparent m-0"
                  onClick={()=>removefromcart(item.documentId)}
                  >
                    <MdDelete />
                </button>





*/