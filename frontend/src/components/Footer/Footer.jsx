import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";
import styles from "./Footer.module.css"

export default function Footer() {
  return (
    <>
      <div className='row gx-3 gy-5 w-100 py-5 px-5'>

        <div className='col-12 col-md-6 col-lg-3  d-flex flex-column gap-3'>
          <img src="\images\logo.webp" width={250} height={50} />
          <p>Donec elementum aliquet dui, ut feugiat est vulputate quis. 
            Etiam egestas nulla nec odio posuere, ut porta tortor pretiumt.
          </p>
          <div className="d-flex gap-4 fs-3">
            <button className='bg-transparent border-0 text-white'>
              <FaFacebook />
            </button>
            <button className='bg-transparent border-0 text-white'>
              <FaLinkedin />
            </button>
            <button className='bg-transparent border-0 text-white fs-2'>
              <CiInstagram />
            </button>
          </div>
        </div>

        <div className='col-12 col-md-6 col-lg-3 d-flex flex-column align-items-center gap-3'>
          <p><a href="#">About</a></p>
          <p><a href="#">History</a></p>
          <p><a href="#">Our Team</a></p>
          <p><a href="#">Privacy Policy</a></p>
          <p><a href="#">Services Offered</a></p>
          <p><a href="#">Product Catalog</a></p>
        </div>

        <div className='col-12 col-md-6 col-lg-3 d-flex flex-column align-items-center gap-3'>
          <p><a href="#">Information</a></p>
          <p><a href="#">Store Location</a></p>
          <p><a href="#">Order Tracking</a></p>
          <p><a href="#">Privacy Policy</a></p>
          <p><a href="#">Sizing Guide</a></p>
          <p><a href="#">Accessibility</a></p>
        </div>

        <div className='col-12 col-md-6 col-lg-3 d-flex flex-column align-items-center gap-3'>
          <p><a href="#">Support</a></p>
          <p><a href="#">Your Account</a></p>
          <p><a href="#">Press Release</a></p>
          <p><a href="#">Return Centre</a></p>
          <p><a href="#">App Download</a></p>
          <p><a href="#">Advertisements</a></p>
        </div>

      </div>
    </>
  )
}
