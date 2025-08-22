import { useEffect, useRef, useState } from 'react'
import Heroimg from '../../components/Heroimg/Heroimg'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { VscGitCompare } from "react-icons/vsc";
import { GrDeliver } from "react-icons/gr";
import { IoMdReturnLeft } from "react-icons/io";
import { IoStar } from "react-icons/io5";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import "./Singleproduct.css"
import { useParams } from 'react-router';
import axios from 'axios';
import Loader from '../../components/Loader/Loader';
import { useStore } from '../../Store/Store';

export default function Singleproduct() {
    
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [swiperimages , setswiperimages] = useState([])
    const [product , setproduct] = useState([])
    const [loading , setloading] = useState(false)
    const [quantity , setquantity] =useState(1);
    const {domain , addtocart , increasequantity ,decreasequantity,
    addtowishlist,addtocomparelist,
    } = useStore()
    const {productid} = useParams();
    const baseurl = `${domain}/api/products/${productid}`;

    useEffect(()=>{
        let isMounted = true
        setloading(true)
        const getsingleproduct = async ()=>{
           try {
              const res = await axios.get(baseurl
                ,{
                params:{
                  populate:"*"
                }
              })
              if (isMounted) {
                setproduct(res.data.data);
                setswiperimages(res.data.data.product_image);
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
        <Heroimg text="all" page="singleproduct" icon="'>'" />
        <div className='singleproduct'>
            <div className="row g-5 singleproduct">
                <div className="col-lg-6 d-flex swiper-parent">
                    
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        loop={swiperimages.length > 3}
                        spaceBetween={20}
                        slidesPerView={3}
                        direction='vertical'
                        navigation={true}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper"
                    >
                        {
                            swiperimages.length === 0 ? (<Loader/>) :swiperimages.map((ele)=>{
                                return <SwiperSlide key={ele.documentId} style={{cursor:"pointer",objectFit:"cover"}}>
                                    <img src={`http://localhost:1337${ele.url}`} className='w-100 h-100' />
                                </SwiperSlide>
                            })
                        }
                    </Swiper>

                    <Swiper
                        style={{
                        '--swiper-navigation-color': '#fff',
                        '--swiper-pagination-color': '#fff',
                        }}
                        loop={swiperimages.length > 3}
                        spaceBetween={10}
                        navigation={true}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper2"
                    >
                        {
                            swiperimages.length === 0 ? (<Loader/>) : swiperimages.map((ele)=>{
                                return <SwiperSlide key={ele.documentId} style={{objectFit:"cover"}} >
                                    <img src={`http://localhost:1337${ele.url}`} className='w-100 h-100'/>
                                </SwiperSlide>
                            })
                        }
                    </Swiper>
                </div>

                <div className="col-lg-6">
                    <div className="d-flex flex-column justify-content-between h-100 ">
                        <h6 className='h2'>{product.product_name}</h6>
                        <p>EGP. {product.product_price}</p>
                        <p className='star'><IoStar /><IoStar /><IoStar /><IoStar /><FaRegStarHalfStroke /> 1 review</p>
                        <p>Vestibulum dapibus ultrices arcu, id varius mauris viverra ac. 
                          Aliquam erat volutpat. Pellentesque commodo ut elit at gravida.
                          Nunc ac molestie turpis. san, fermentum condimentum ligula.
                        </p>
                        <p>Vendor: <span className='text-secondary'>{product.product_category}</span></p>
                        <p>Height: <span className='text-secondary'>20 Inches</span></p>
                        <p>Seat Depth:<span className='text-secondary'> 70 Centimeters</span></p>
                        <p><GrDeliver /><span className='text-secondary'> Estimate delivery times:12-26 days (International)</span></p>
                        <p><IoMdReturnLeft /><span className='text-secondary'> Free return within 30 days of purchase.$79</span></p>
                        <div className='d-flex gap-4 align-items-center'>
                            <p className='parentofqty'>
                                <button className='py-2 px-3 hovernav plus' onClick={()=>{
                                    increasequantity(product.documentId,quantity + 1)
                                    setquantity(quantity + 1)
                                }}>
                                <FaPlus /></button>
                                <span className='py-2 px-3'>{quantity}</span>
                                <button className='py-2 px-3 hovernav minus' onClick={()=>{
                                    decreasequantity(product.documentId,quantity - 1)
                                    if (quantity === 1){
                                        setquantity(1)
                                    }else{
                                        setquantity(quantity - 1)
                                    }
                                    }}><FaMinus />
                                </button>
                            </p>
                            <button className='w-50 h-100 py-2 px-3 text-capitalize hovernav addcart'
                                onClick={()=>{
                                    addtocart(product);
                                }}
                            >add to cart</button>

                            <div className='d-flex gap-3 align-items-center'>
                                <button className='hoverwhite d-flex justify-content-center align-items-center'
                                onClick={()=>addtowishlist(product)}
                                >
                                    <CiHeart />
                                </button>
                                <button className='hoverwhite d-flex justify-content-center align-items-center'
                                onClick={()=>addtocomparelist(product)}
                                >
                                    <VscGitCompare />
                                </button>
                            </div>
                        </div>
                        <p>Sub total: <span className='text-secondary'>EGP. {quantity * product.product_price}</span></p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
/* 






*/