import { MdAttachEmail } from "react-icons/md";
import Navbar from '../../components/Navbar/Navbar'
import Merque from '../../components/Merque/Merque'
import Footer from '../../components/Footer/Footer'
import Heroimg from '../../components/Heroimg/Heroimg'
import { Link } from 'react-router'
import styles from "./Contact.module.css"
import Iconitem from "../../components/Iconitem/Iconitem";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useState } from "react";

export default function Contact() {

  const [open , setopen] = useState(false)
  const click=()=>{
    setopen(!open)
  }

  const itemscontact=[
    {
      id:1,
      text:"Transmission Protocol",
      para:"Eget arcu dictum varius duis at lorem donec",
    },
    {
      id:2,
      text:"Chat Helpdesk",
      para:"Eget arcu dictum varius duis at lorem donec",
    },
    {
      id:3,
      text:"Email Interaction",
      para:"Eget arcu dictum varius duis at lorem donec",
    },
    {
      id:4,
      text:"Global Stores",
      para:"Eget arcu dictum varius duis at lorem donec",
    },
  ]
  return (
    <>
      <Merque />
      <Navbar click={click} />
      <Heroimg text="contact" page="contact" icon="'>'" />

      <div className={`${styles.formparent} text-center`}>
        <span>TEXT US A NOTE</span>
        <h4 className='mx-auto m-3'>Never-ending Customer Service</h4>
        <p className='mx-auto m-3'>Sed id semper risus in hendrerit gravida rutrum quisque. 
          Vitae proin sagittis nisl Vel elit scelerisque mauris rhoncus
           mattis rhoncus urna.
        </p>

        <div className={`mx-auto my-4 ${styles.form}`}>
          <form className='d-flex flex-column gap-5 w-100'>
            <div className="row g-4">
              <div className='col-lg-6 col-12' >
                <input type="text" className='px-4 w-100 text-capitalize' placeholder='Name'/>
              </div>
              <div className='col-lg-6 col-12' >
                <input type="text" className='px-4 w-100 text-capitalize' placeholder='call us any time'/>
              </div>
            </div>
            <input type="email" className='px-4 w-100 text-capitalize' placeholder='email'/>
            <textarea type="text" className={`${styles.textarea} px-4 py-4 w-100 text-capitalize bg-transparent`} placeholder='comment' ></textarea>
            <button type="submit" className={`${styles.subbtn} mx-auto py-2`}>Submit Query</button>
          </form>
        </div>
      </div>

      <div className={`row w-100 g-4 ${styles.contactitem}`}>{
        itemscontact.map((el)=>{
          return <Iconitem key={el.id} ele={el} />
        })
      }</div>

      <Sidebar open={open} click={click} />
      <Footer />
    </>
  )
}


/* 

import { MdAttachEmail } from "react-icons/md";
<MdAttachEmail />

.contactitem

import { SiTransmission } from "react-icons/si";
<SiTransmission />

import { BsFillChatSquareHeartFill } from "react-icons/bs";
<BsFillChatSquareHeartFill />

import { IoStorefrontSharp } from "react-icons/io5";
<IoStorefrontSharp />




*/