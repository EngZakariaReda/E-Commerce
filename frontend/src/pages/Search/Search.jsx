import React, { useEffect, useRef, useState } from 'react'
import "./Search.css"
import axios from 'axios';
import Singleshopitem from '../../components/Singleshopitem/Singleshopitem';
import { useStore } from '../../Store/Store';

export default function Search() {
    const [searcharray , setsearcharray] = useState([]);
    const [products , setproducts] = useState([]);
    const {domain} = useStore()
    const baseurl = `${domain}/api/products`;
    const inputvalue = useRef();
      
    useEffect(() => {
          let isMounted = true;
          const getproducts = async () => {
            try {
              const res = await axios.get(baseurl, { params: { populate: "*" } });
              if (isMounted) {
                setproducts(res.data.data);
              }
            } catch (error) {
              console.error(error);
            }
          };
      
          getproducts();
          return () => {
            isMounted = false;
          };
      }, []);

      const handlechange = ()=>{
        let currentvalue = inputvalue.current.value;
        if(currentvalue === ""){
          setsearcharray([])
        }else{
          let filterarray = products.filter((el)=>{
            return el.product_name.toLowerCase().includes(currentvalue)
          })
          setsearcharray(filterarray)
        }
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        
      }
    
  return (
    <>
        <form className='mx-auto col-lg-6 col-md-10 col-10'>
          <input type="search" name='search' 
          placeholder='search here about you want'
          className='w-100'
          ref={inputvalue} 
          onChange={()=> handlechange()}
          />
        </form>
        <div className="container">
          <div className="row m-0 g-4">
            {searcharray.map((product)=>(
                <Singleshopitem key={product.documentId}
                  id={product.documentId}
                  name={product.product_name}
                  category={product.product_category}
                  price={product.product_price}
                  images={product.product_image}
                />
                ))
            } 
          </div>
        </div>
    </>
  )
}
