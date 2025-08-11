import './Sidebar.css'
import { IoReorderThreeOutline } from "react-icons/io5";

export default function Sidebar({open,click}) {
  return (
    <>
        <div className={open ? 'sidebar activesidebar' : "sidebar"}>
            <ul className='d-flex flex-column'>
                <li>home</li>
                <li>collections</li>
                <li>shop</li>
                <li>blog</li>
                <li></li>
                <li>contact</li>
            </ul>
            <IoReorderThreeOutline style={{cursor:"pointer"}} className='fs-1' 
                onClick={()=> click()}
            />
        </div>
    </>
  )
}
