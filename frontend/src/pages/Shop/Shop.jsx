import Heroimgthree from "../../components/Heroimgthree/Heroimgthree";
import { useEffect, useState } from "react";
import axios from "axios";
import { div } from "framer-motion/client";
import Contentshop from "../../components/Contentshop/Contentshop";
import "./Shop.css"
import { useStore } from "../../Store/Store";

export default function Shop() {
    const [products , setproducts] = useState([]);
    const [loading , setloading] = useState(false);
    const {domain} = useStore()
    const baseurl = `${domain}/api/products`;
  
    useEffect(() => {
      let isMounted = true;
      setloading(true);
  
      const getproducts = async () => {
        try {
          const res = await axios.get(baseurl, { params: { populate: "*" } });
          if (isMounted) {
            setproducts(res.data.data);
          }
        } catch (error) {
          console.error(error);
        } finally {
          if (isMounted) setloading(false);
        }
      };
  
      getproducts();
      return () => {
        isMounted = false;
      };
  }, []);
  return (
    <>
      <Heroimgthree text="products" main="all collections" page="products" icon="'>'" link="/collections"/>
      <div style={{margin:"70px 20px"}}>
        <Contentshop allproducts ={products} loading={loading} />
      </div>
    </>
  )
}
