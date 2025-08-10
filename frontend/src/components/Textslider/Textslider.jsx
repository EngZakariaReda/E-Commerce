import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./Textslider.css"

import { Autoplay } from 'swiper/modules';
import { SiDiscourse } from "react-icons/si";

export default function Textslider() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        autoplay={{
            delay:1500,
            disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='h-100 d-flex align-items-center fs-2 '>
                Find Your Dream Furniture
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='h-100 d-flex align-items-center justify-content-center fs-3 '>
                <SiDiscourse />
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='h-100 d-flex align-items-center fs-3 '>
            Luxurious Comfort for Home
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='h-100 d-flex align-items-center justify-content-center fs-3 '>
                <SiDiscourse />
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='h-100 d-flex align-items-center fs-3 '>
            Revamp Your Home Elegantly
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='h-100 d-flex align-items-center justify-content-center fs-3 '>
                <SiDiscourse />
            </div>
        </SwiperSlide>

      </Swiper>
    </>
  );
}
