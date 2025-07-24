import styles from "./Collections.module.css"
import Footer from "../../components/Footer/Footer";
import Heroimg from "../../components/Heroimg/Heroimg";
import Merque from "../../components/Merque/Merque";
import Navbar from "../../components/Navbar/Navbar";
import Collectionproduct from "../../components/Collectionproduct/Collectionproduct";

export default function Collections() {
  const products=[
    {
      id:"1",
      name:"Home Decoration",
      img:"images/shop-4-01.webp",
      link:"/collections/homedecoration",
    },
    {
      id:"2",
      name:"Indoor Decoration",
      img:"images/shop-8-01.webp",
      link:"/collections/indecoration",
    },
    {
      id:"3",
      name:"Office Decoration",
      img:"images/shop-12-01.webp",
      link:"/collections/officedecoration",
    },
    {
      id:"4",
      name:"Outdoor Decoration",
      img:"images/shop-5-04.webp",
      link:"/collections/outdecoration",
    },
  ]
  return (
    <>
      <Merque />
      <Navbar />
      <Heroimg text={"all collections"} page='collections' icon="'>'"/>
      <div className={`${styles.products} w-100`}>
        <div className="row g-3">{
            products.map((el)=>{
              return <Collectionproduct key={el.id} ele={el} />
            })
        }</div>
      </div>
      <Footer />
    </>
  )
}

