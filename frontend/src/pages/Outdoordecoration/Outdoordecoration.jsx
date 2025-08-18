import { useEffect, useState } from "react";
import Heroimgthree from "../../components/Heroimgthree/Heroimgthree";
import axios from "axios";
import Contentshop from "../../components/Contentshop/Contentshop";

export default function Outdoordecoration() {
      const [outdoorcategory , setoutdoorcategory] = useState([])
      const [loading , setloading] = useState(false)
      const baseurl = "http://localhost:1337/api/products?filters[product_category][$eq]=Outdoor%20Decoration"
  
      useEffect(()=>{
          let isMounted = true
          setloading(true)
          const getsingleproduct = async ()=>{
             try {
                const res = await axios.get(`${baseurl}` 
                  ,{
                  params:{
                    populate:"*"
                  }
                })
                if (isMounted) {
                  setoutdoorcategory(res.data.data);
                }
             }catch (error) {
                console.error(error)
             }finally{
              if (isMounted) setloading(false)
             }
          }
          getsingleproduct();
          return () => {
            isMounted = false;
          };
        },[])
  return (
    <>
        <Heroimgthree text="outdoor Decoration" main="all collections" page="outdoor Decoration" icon="'>'" link="/collections"/>
        <div style={{margin:"70px 20px"}}>
            <Contentshop allproducts ={outdoorcategory} loading={loading} />
        </div>
    </>
  )
}
