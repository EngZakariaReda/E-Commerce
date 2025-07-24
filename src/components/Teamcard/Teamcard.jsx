import React from 'react'
import './Teamcard.css'
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
export default function Teamcard({ele}) {
  return (
    <>

        <div className="col-12 col-md-6 col-lg-3 teamcard">
                <div className='containimg'>
                    <img src={ele.img} alt="#" className='w-100' />
                    <div className='w-100 d-flex justify-content-center gap-3 containicon'>
                          <button className='bg-white border-0 rounded-circle'>
                            <FaXTwitter className='text-dark'/>
                          </button>
                          <button className='bg-white border-0 rounded-circle'>
                            <FaFacebook className='text-dark'/>
                          </button>
                          <button className='bg-white border-0 rounded-circle'>
                            <FaLinkedin className='text-dark'/>
                          </button>
                    </div>
                </div>
                <div className='my-4 d-flex flex-column gap-2'> 
                        <h3>{ele.name}</h3>
                        <p className='text-secondary'>{ele.pos}</p>
                </div>
        </div>
        
    </>
  )
}
