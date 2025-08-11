import { useRef, useState } from 'react'
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

export default function Singleproduct() {
    const images = [
    {
      id: 1,
      src: "/images/chair1.jpg", // Replace with your image paths
      alt: "Chair 1",
    },
    {
      id: 2,
      src: "/images/chair2.jpg",
      alt: "Chair 2",
    },
    {
      id: 3,
      src: "/images/chair3.jpg",
      alt: "Chair 3",
    },
    {
      id: 3,
      src: "/images/chair3.jpg",
      alt: "Chair 3",
    },
    {
      id: 3,
      src: "/images/chair3.jpg",
      alt: "Chair 3",
    },
    {
      id: 3,
      src: "/images/chair3.jpg",
      alt: "Chair 3",
    },
]

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [quantity , setquantity] =useState(1);
    const price =25000;
    const swiperimages = [
        {
            id:1,
            src:"https://swiperjs.com/demos/images/nature-1.jpg",
        },
        {
            id:2,
            src:"https://swiperjs.com/demos/images/nature-2.jpg"
        },
        {
            id:3,
            src:"https://swiperjs.com/demos/images/nature-3.jpg"
        },
        {
            id:4,
            src:"https://swiperjs.com/demos/images/nature-4.jpg"
        },
        {
            id:5,
            src:"https://swiperjs.com/demos/images/nature-5.jpg"
        },
        {
            id:6,
            src:"https://swiperjs.com/demos/images/nature-6.jpg"
        },
        {
            id:7,
            src:"https://swiperjs.com/demos/images/nature-7.jpg"
        },
    ]
  return (
    <>
        <Heroimg text="all" page="singleproduct" icon="'>'" />
        <div className='singleproduct'>
            <div className="row g-5 singleproduct">
                <div className="col-lg-6 d-flex swiper-parent">
                    
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        loop={true}
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
                            swiperimages.map((ele)=>{
                                return <SwiperSlide key={ele.id} style={{cursor:"pointer",objectFit:"cover"}}>
                                    <img src={ele.src} className='w-100 h-100' />
                                </SwiperSlide>
                            })
                        }
                    </Swiper>

                    <Swiper
                        style={{
                        '--swiper-navigation-color': '#fff',
                        '--swiper-pagination-color': '#fff',
                        }}
                        loop={true}
                        spaceBetween={10}
                        navigation={true}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper2"
                    >
                        {
                            swiperimages.map((ele)=>{
                                return <SwiperSlide key={ele.id} style={{objectFit:"cover"}} >
                                    <img src={ele.src} className='w-100 h-100'/>
                                </SwiperSlide>
                            })
                        }
                    </Swiper>
                </div>
                <div className="col-lg-6">
                    <div className="d-flex flex-column justify-content-between h-100 ">
                        <h6 className='h2'>Adjustable Leather Sofa</h6>
                        <p>Rs. {price}</p>
                        <p className='star'><IoStar /><IoStar /><IoStar /><IoStar /><FaRegStarHalfStroke /> 1 review</p>
                        <p>Vestibulum dapibus ultrices arcu, id varius mauris viverra ac. 
                          Aliquam erat volutpat. Pellentesque commodo ut elit at gravida.
                          Nunc ac molestie turpis. san, fermentum condimentum ligula.
                        </p>
                        <p>Vendor: <span className='text-secondary'>Office DecorationSeat</span></p>
                        <p>Height: <span className='text-secondary'>20 Inches</span></p>
                        <p>Seat Depth:<span className='text-secondary'> 70 Centimeters</span></p>
                        <p><GrDeliver /><span className='text-secondary'> Estimate delivery times:12-26 days (International)</span></p>
                        <p><IoMdReturnLeft /><span className='text-secondary'> Free return within 30 days of purchase.$79</span></p>
                        <div className='d-flex gap-4 align-items-center'>
                            <p className='parentofqty'>
                                <button className='py-2 px-3 hovernav plus' onClick={()=>{setquantity(quantity+1)}}><FaPlus /></button>
                                <span className='py-2 px-3'>{quantity}</span>
                                <button className='py-2 px-3 hovernav minus' onClick={()=>{
                                    if (quantity === 1){
                                        setquantity(1)
                                    }else{
                                        setquantity(quantity - 1)
                                    }
                                    }}><FaMinus />
                                </button>
                            </p>
                            <button className='w-50 h-100 py-2 px-3 text-capitalize hovernav addcart'>add to cart</button>
                            <div className='d-flex gap-3 align-items-center'>
                                <button className='hoverwhite d-flex justify-content-center align-items-center'>
                                    <CiHeart />
                                </button>
                                <button className='hoverwhite d-flex justify-content-center align-items-center'>
                                    <VscGitCompare />
                                </button>
                            </div>
                        </div>
                        <p>Sub total: <span className='text-secondary'>Rs. {quantity * price}</span></p>

                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
