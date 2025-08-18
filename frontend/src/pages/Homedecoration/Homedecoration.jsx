import axios from "axios";
import Contentshop from "../../components/Contentshop/Contentshop";
import Heroimgthree from "../../components/Heroimgthree/Heroimgthree";
import { useEffect, useState } from "react";

export default function Homedecoration() {
      const [homecategory , sethomecategory] = useState([])
      const [loading , setloading] = useState(false)
      const baseurl = "http://localhost:1337/api/products?filters[product_category][$eq]=Home Decoration"
  
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
                  sethomecategory(res.data.data);
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
        <Heroimgthree text="Home Decoration" main="all collections" page="home decoration" icon="'>'" link="/collections" />
        <div style={{margin:"70px 20px"}}>
            <Contentshop allproducts ={homecategory} loading={loading} />
        </div>
    </>
  )
}
