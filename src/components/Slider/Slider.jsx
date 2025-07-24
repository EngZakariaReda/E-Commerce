import "./Slider.css"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

export default function Slider() {
  return (
    <>
      <Swiper rewind={true} navigation={true} modules={[Navigation]} className={`slid`}>
        <SwiperSlide className={`slid_1 d-flex gap-4 flex-column justify-content-center align-items-center`}>
          <p className={`m-0 activelink`}><a href="#" className={`activelink`}>CRAFTSMANSHIP</a></p>
          <h3 className="fs-1">Enjoy style And Comfort</h3>
          <p className="m-0 w-50 text-center">
            Consectetur a erat nam at. Facilisis magna etiam tempor orci. Sem et tortor consequat 
            id. Fermentum egestas tellus. Nunc eu hendrerit turpis. Fusce non lectus sem
            . In pellentesque nunc non Donec pretium gravida neque et placerat.
          </p>
          <button className={`py-2 px-3 rounded-pill border-0 activebtn`}>Shop Now</button>
        </SwiperSlide>

        <SwiperSlide className={`slid_2 d-flex gap-4 flex-column justify-content-center align-items-center`}>
          <p className={`m-0 activelink`}><a href="#" className={`activelink`}>LUXURIOUS LIFESTYLE</a></p>
          <h3>Browse living room pieces</h3>
          <p className="m-0 w-50 text-center">
            Consectetur a erat nam at. Facilisis magna etiam tempor orci. Sem et tortor consequat id.
            Fermentum egestas tellus. Nunc eu hendrerit turpis. Fusce non lectus sem. In pellentesque
              nunc non Donec pretium gravida neque et placerat.
          </p>
          <button className={`py-2 px-3 rounded-pill border-0 activebtn`}>Shop Now</button>
        </SwiperSlide>

        <SwiperSlide className={`slid_1 d-flex gap-4 flex-column justify-content-center align-items-center`}>
          <p className={`m-0 activelink`}><a href="#" className={`activelink`}>MASTERPIECE</a></p>
          <h3>The Art of Beautiful Living</h3>
          <p className="m-0 w-50 text-center">
          Consectetur a erat nam at. Facilisis magna etiam tempor orci. Sem et tortor consequat id. 
          Fermentum egestas tellus. Nunc eu hendrerit turpis. Fusce non lectus sem. In pellentesque nunc non 
          Donec pretium gravida neque et placerat.
          </p>
          <button className={`py-2 px-3 rounded-pill border-0 activebtn`}>Shop Now</button>
        </SwiperSlide>

        <SwiperSlide className={`slid_1 d-flex gap-4 flex-column justify-content-center align-items-center`}>
          <p className={`m-0 activelink`}><a href="#" className={`activelink`}>CRAFTSMANSHIP</a></p>
          <h3>Enjoy style And Comfort</h3>
          <p className="m-0 w-50 text-center">
            Consectetur a erat nam at. Facilisis magna etiam tempor orci. Sem et tortor consequat 
            id. Fermentum egestas tellus. Nunc eu hendrerit turpis. Fusce non lectus sem
            . In pellentesque nunc non Donec pretium gravida neque et placerat.
          </p>
          <button className={`py-2 px-3 rounded-pill border-0 activebtn`}>Shop Now</button>
        </SwiperSlide>

        <SwiperSlide className={`slid_3 d-flex gap-4 flex-column justify-content-center align-items-center`}>
          <p className={`m-0 activelink`}><a href="#" className={`activelink`}>MASTERPIECE</a></p>
          <h3>The Art of Beautiful Living</h3>
          <p className="m-0 w-50 text-center">
          Consectetur a erat nam at. Facilisis magna etiam tempor orci. Sem et tortor consequat id. 
          Fermentum egestas tellus. Nunc eu hendrerit turpis. Fusce non lectus sem. In pellentesque nunc non 
          Donec pretium gravida neque et placerat.
          </p>
          <button className={`py-2 px-3 rounded-pill border-0 activebtn`}>Shop Now</button>
        </SwiperSlide> 
      </Swiper>
    </>
  );
}
