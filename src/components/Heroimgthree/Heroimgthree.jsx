import { Link } from 'react-router'
import './Heroimgthree.css'

export default function Heroimgthree(props) {
    return (
      <>
          <div className="Heroimg">
              <h3 className='text-capitalize text-center'>{props.text}</h3>
              <nav className='text-white' style={{ "--bs-breadcrumb-divider": `${props.icon}`}} aria-label="breadcrumb">
                <ol className="breadcrumb fs-2 text-capitalize" >
                  <li className="breadcrumb-item"><Link to={"/"}>Home</Link></li>
                  <li className="breadcrumb-item" aria-current="page">
                    <Link to={props.link}>{props.main}</Link>
                  </li>
                  <li className="breadcrumb-item" aria-current="page">
                    {props.page}
                  </li>
                </ol>
              </nav>
          </div>
      </>
    )
}

