import { useEffect, useState } from "react";
import Heroimgthree from "../../components/Heroimgthree/Heroimgthree";
import axios from "axios";
import Contentshop from "../../components/Contentshop/Contentshop";

export default function Indoordecoration() {
        const [indoorcategory , setindoorcategory] = useState([])
        const [loading , setloading] = useState(false)
        const baseurl = "http://localhost:1337/api/products?filters[product_category][$eq]=Indoor%20Decoration"
    
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
                    setindoorcategory(res.data.data);
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
        <Heroimgthree text="indoor Decoration" main="all collections" page="indoor Decoration" icon="'>'" link="/collections"/>
        <div style={{margin:"70px 20px"}}>
            <Contentshop allproducts ={indoorcategory} loading={loading} />
        </div>
    </>
  )
}
