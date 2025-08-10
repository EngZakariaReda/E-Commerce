import { Link } from 'react-router'
import './Heroimg.css'

export default function Heroimg(props) {
  return (
    <>
        <div className="Heroimg">
            <h3 className='text-capitalize'>{props.text}</h3>
            <nav className='text-white' style={{ "--bs-breadcrumb-divider": `${props.icon}` }} aria-label="breadcrumb">
              <ol className="breadcrumb fs-2 text-capitalize" >
                <li className="breadcrumb-item"><Link to={"/"}>Home</Link></li>
                <li className="breadcrumb-item" aria-current="page">{props.page}</li>
              </ol>
            </nav>
        </div>
    </>
  )
}
