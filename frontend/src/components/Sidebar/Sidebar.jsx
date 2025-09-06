import { Link} from 'react-router';
import { IoMdClose } from "react-icons/io";
import { useStore } from '../../Store/Store';
import './Sidebar.css'

export default function Sidebar({open,click}) {
  const {activevalue , changecolor} = useStore()
  return (
    <>
        <div className={open ? 'sidebar activesidebar' : "sidebar"}>
            <ul className='d-flex flex-column gap-3 p-4 sidebartab'>
                <li className='d-flex justify-content-between'>
                  <Link className={activevalue === 0 ? "active" : ""} to={"/"} onClick={()=> {click();changecolor(0)}}>home</Link>
                  <p><IoMdClose  style={{cursor:"pointer"}} className='fs-1 text-danger ' 
                    onClick={()=> click()}/>
                  </p>
                </li>

                <li onClick={()=>{ click();changecolor(1)}}>
                  <Link className={activevalue === 1 ? "active" : ""}  to={"/collections"}>collections</Link>
                </li>

                <li onClick={()=>{ click();changecolor(2)}}>
                  <Link className={activevalue === 2 ? "active" : ""}  to={"/shop"}>shop</Link>
                </li>

                <li onClick={()=>{ click();changecolor(3)}}>
                  <Link className={activevalue === 3 ? "active" : ""}  to={"/blog"}>blog</Link>
                </li>

                <li onClick={()=>{ click();changecolor(4)}}>
                  <Link className={activevalue === 4 ? "active" : ""}  to={"/about"}>about</Link>
                </li>

                <li onClick={()=>{ click();changecolor(5)}}>
                  <Link className={activevalue === 5 ? "active" : ""}  to={"/faq"}>faq</Link>
                </li>

                <li onClick={()=>{ click();changecolor(6)}}>
                  <Link className={activevalue === 6 ? "active" : ""}  to={"/contact"}>contact</Link>
                </li>
            </ul>
        </div>
    </>
  )
}
