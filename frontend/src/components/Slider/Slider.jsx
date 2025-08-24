import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
import "./Slider.css"
import { Link } from 'react-router';

export default function Slider() {
  const images = [
  {
    id: 1,
    nameclass: "slid_1",
    headtext: "Enjoy style And Comfort",
    headp: "CRAFTSMANSHIP",
    headpara:
      "Consectetur a erat nam at. Facilisis magna etiam tempor orci. Sem et tortor consequat id. Fermentum egestas tellus. Nunc eu hendrerit turpis. Fusce non lectus sem. In pellentesque nunc non Donec pretium gravida neque et placerat",
  },
  {
    id: 2,
    class: "slid_2",
    headtext: "Browse living room pieces",
    headp: "LUXURIOUS LIFESTYLE",
    headpara:
      "Consectetur a erat nam at. Facilisis magna etiam tempor orci. Sem et tortor consequat id. Fermentum egestas tellus. Nunc eu hendrerit turpis. Fusce non lectus sem. In pellentesque nunc non Donec pretium gravida neque et placerat",
  },
  {
    id: 3,
    class: "slid_3",
    headtext: "The Art of Beautiful Living",
    headp: "MASTERPIECE",
    headpara:
      "Consectetur a erat nam at. Facilisis magna etiam tempor orci. Sem et tortor consequat id. Fermentum egestas tellus. Nunc eu hendrerit turpis. Fusce non lectus sem. In pellentesque nunc non Donec pretium gravida neque et placerat",
  },
];
  return (
    <>
      <Swiper loop={true}
              navigation={true}
              modules={[Navigation]}
              className="slid"
      >
        {images.map((item) => (
          <SwiperSlide
            key={item.id}
            className={`${item.nameclass} d-flex gap-3 flex-column justify-content-center align-items-center`}
          >
            <p className="m-0 activelink">
              <Link to={"/"} className="activelink">{item.headp}</Link>
            </p>
            <h3>{item.headtext}</h3>
            <p className="m-0 w-50 text-center">{item.headpara}</p>
            <button className="activebtn py-2 px-3 rounded-pill border-0">
              Shop Now
            </button>
          </SwiperSlide>
        ))}
    </Swiper>
    </>
  );
}