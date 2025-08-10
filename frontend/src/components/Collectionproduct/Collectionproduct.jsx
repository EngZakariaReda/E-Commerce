import { Link } from "react-router"
import "./Collectionproduct.css"

export default function Collectionproduct(props) {
  return (
    <>
       <div className="col-lg-3 col-md-6 col-12 text-center">
            <Link to={props.ele.link}>
              <img src={props.ele.img} alt="#" className="w-100 mb-2" />
            </Link>
            <h4 className="m-0">
                <Link to={props.ele.link} className="text-capitalize fs-2">{props.ele.name}</Link>
            </h4>
            <span className="m-0 text-white">11 Item</span>
       </div> 
    </>
  )
}
