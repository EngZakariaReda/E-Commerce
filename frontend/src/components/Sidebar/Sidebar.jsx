import { Link } from 'react-router';
import './Sidebar.css'
import { IoMdClose } from "react-icons/io";

export default function Sidebar({open,click}) {
  return (
    <>
        <div className={open ? 'sidebar activesidebar' : "sidebar"}>
            <ul className='d-flex flex-column gap-3 p-4 sidebartab'>
                <li className='d-flex justify-content-between'>
                  <Link to={"/"} onClick={()=> click()}>home</Link>
                  <p><IoMdClose  style={{cursor:"pointer"}} className='fs-1 text-danger ' 
                    onClick={()=> click()}/>
                  </p>
                </li>
                <li onClick={()=> click()}>
                  <Link to={"/collections"}>collections</Link>
                </li>
                <li onClick={()=> click()}>
                  <Link to={"/shop"}>shop</Link>
                </li>
                <li onClick={()=> click()}>
                  <Link to={"/blog"}>blog</Link>
                </li>
                <li onClick={()=> click()}>
                  <Link to={"/about"}>about</Link>
                </li>
                <li onClick={()=> click()}>
                  <Link to={"/faq"}>faq</Link>
                </li>
                <li onClick={()=> click()}>
                  <Link to={"/contact"}>contact</Link>
                </li>
            </ul>
        </div>
    </>
  )
}
