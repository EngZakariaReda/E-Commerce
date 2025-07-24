import { Swiper, SwiperSlide } from 'swiper/react';
import './Textimgslider.css'
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { IoStarSharp } from "react-icons/io5";
import { IoIosStarHalf } from "react-icons/io";

export default function Textimgslider() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="imgSwiper">
        <SwiperSlide className='pt-3 d-flex flex-column justify-content-center align-items-center gap-2'>
            <p className='headp'><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /></p>
            <p className='lorem'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit excepturi corrupti quasi doloremque
                vero culpa voluptatibus, nihil iure totam, sint asperiores et maiores provident ea accusamus. Omnis
                facilis id aspernatur laudantium similique obcaecati, ex voluptate.
            </p>
            <img src="images/Home_2_Team_-_01.webp" alt="#" className='rounded-circle' width={150} height={150} />
            <h5>zakaria reda</h5>
            <p>egypt</p>
        </SwiperSlide>
        
        <SwiperSlide className='pt-3 d-flex flex-column justify-content-center align-items-center gap-2'>
            <p className='headp'><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoIosStarHalf /></p>
            <p className='lorem'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit excepturi corrupti quasi doloremque
                vero culpa voluptatibus, nihil iure totam, sint asperiores et maiores provident ea accusamus. Omnis
                facilis id aspernatur laudantium similique obcaecati, ex voluptate.
            </p>
            <img src="images/Home_2_Team_-_01.webp" alt="#" className='rounded-circle' width={150} height={150} />
            <h5>zakaria reda</h5>
            <p>egypt</p>
        </SwiperSlide>

        <SwiperSlide className='pt-3 d-flex flex-column justify-content-center align-items-center gap-2'>
            <p className='headp'><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoIosStarHalf /></p>
            <p className='lorem'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit excepturi corrupti quasi doloremque
                vero culpa voluptatibus, nihil iure totam, sint asperiores et maiores provident ea accusamus. Omnis
                facilis id aspernatur laudantium similique obcaecati, ex voluptate.
            </p>
            <img src="images/Home_2_Team_-_01.webp" alt="#" className='rounded-circle' width={150} height={150} />
            <h5>zakaria reda</h5>
            <p>egypt</p>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
