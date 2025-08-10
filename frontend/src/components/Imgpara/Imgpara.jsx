import './Imgpara.css'
import { FiCornerDownRight } from "react-icons/fi";
export default function Imgpara() {
  return (
    <>
        <div className="Imgpara">
            <div className="row g-5">
                <div className="col-lg-6 col-12">
                    <div className='d-flex flex-column gap-3'>
                        <p className='headp'>HOME DECOR HUB</p>
                        <h4>Exceptional Furniture's For Indoor & Outdoor</h4>
                        <p className='text-white-50'>
                            Ut eleifend mattis ligula, porta finibus urna gravida at.
                            Aenean vehicula sodales arcu non mattis. Integer dapibus 
                            ac dui pretium blandit. Class aptent taciti sociosqu ad 
                            litora torquent per conubia nostra, per inceptos himenaeos.
                        </p>
                        <div className='mt-4'>
                            <img src="images/Group_131808.webp" alt="#"  className='w-100'/>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 col-12">
                    <div className='d-flex flex-column gap-3'>
                        <div>
                            <img src="images/Rectangle_38880.webp" alt="#"  className='w-100'/>
                        </div>
                        <h4>Discover Endless Designs</h4>
                        <p className='text-white-50'>
                            Integer dapibus ac dui pretium blandit. Class aptent taciti sociosqu 
                            ad litora torquent per conubia nostra, per inceptos himenaeos. Ut eleifend 
                            mattis ligula, porta finibus urna gravida at. Aenean vehicula sodales arcu non mattis.
                        </p>
                        <div className='d-flex flex-column gap-3 mt-5'>
                            <p className='d-flex align-items-center'><FiCornerDownRight className='headp me-2'/>Ut eleifend mattis ligula, porta finibus urna gvida at.</p>
                            <p><FiCornerDownRight className='headp me-2'/>Aenean vehicula sodales arcu non mattis.</p>
                            <p><FiCornerDownRight className='headp me-2'/>Integer dapibus ac dui pretium blanss aptent.</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </>
  )
}
