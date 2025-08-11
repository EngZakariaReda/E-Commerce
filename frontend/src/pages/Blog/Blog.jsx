import { useEffect, useState } from "react";
import Blobitem from "../../components/Blobitem/Blobitem";
import Heroimg from "../../components/Heroimg/Heroimg";

import './Blog.css'
import axios from "axios";

export default function Blog() {
  const [blogproducts , setblogproducts] = useState([])
  const baseurl = "http://localhost:1337/api/blogs/"

  useEffect(()=>{
    const getproducts = async ()=>{
       try {
          const res = await axios.get(baseurl ,{
            params:{
              populate:"*"
            }
          })
          setblogproducts(res.data.data)
       }catch (error) {
          console.log(error)
       }
    }
    getproducts();
  },[])

  // const blogproducts = [
  //   {
  //     id:1,
  //     headtext:"Elegant & Essential Dinning Hall Furniture & De...",
  //     paratext:"Tincidunt a pharetra tempor potenti pharetra donec. Turpis magna cubilia finibus aenean tempor ultrices ligula...",
  //     src:"/images/blog-01.webp",
  //   },
  //   {
  //     id:2,
  //     headtext:"Advantages Of Choosing Custom-Crafted Furniture...",
  //     paratext:"Habitasse nostra potenti potenti diam integer; odio mauris. Tempus dui urna felis mauris molestie donec...",
  //     src:"/images/blog-02.webp",
  //   },
  //   {
  //     id:3,
  //     headtext:"The Modest Living Space Furnishings Ideas",
  //     paratext:"Amet nunc condimentum praesent fames blandit viverra. Pretium accumsan commodo ridiculus auctor vulputate dignissim rhoncus....",
  //     src:"/images/blog-03.webp",
  //   },
  //   {
  //     id:4,
  //     headtext:"Elevate Your Home With Stylish Furniture’s And ...",
  //     paratext:"Porttitor potenti condimentum pulvinar etiam imperdiet inceptos. Cras consectetur risus suscipit venenatis natoque curabitur ligula. ",
  //     src:"/images/blog-04_1f730a28-ccd5-4d96-a834-b3ee4d07e036.webp",
  //   },
  //   {
  //     id:5,
  //     headtext:"The Ultimate Guide To Buying Luxury Furniture",
  //     paratext:"Sagittis risus praesent suscipit tempor consectetur taciti. Nisi efficitur platea, montes fames convallis efficitur? Vitae...",
  //     src:"/images/blog-05.webp",
  //   },
  //   {
  //     id:6,
  //     headtext:"Tips For Designing Reading Area Space Smartly",
  //     paratext:"Gravida platea nostra mauris aptent eleifend suspendisse integer. Aporta mus ullamcorper finibus suscipit ultricies neque...",
  //     src:"/images/blog-06.webp",
  //   },
  // ]
  return (
    <>
      <Heroimg text="news" page="news" icon="'>'" />
      <div style={{margin:"100px 0"}}> 
        <div className="row m-0 g-4" >

          {
            blogproducts.map((el)=>{
              return <Blobitem key={el.documentId} ele={el}/>
            })
          }
          
        </div>
      </div>
    </>
  )
}
