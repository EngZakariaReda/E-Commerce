import { Link } from 'react-router'
import './Blobitem.css'

export default function Blobitem({ele}) {
  return (
    <>
        <div className="col-lg-4 col-md-6 col-12" >
            <div className="d-flex flex-column gap-3 w-100 p-3 blogitem" >
                <div className="blogimgparent">
                  <Link to={"/blog/singleblogitem"}>
                    <img src={ele.src} className="w-100 h-100 blogimg" loading="lazy" />
                  </Link>
                </div>
                <p><span>Jul 08</span> {"-"} John Mathew </p>
                <h3><Link to={"/blog/singleblogitem"}>{ele.headtext}</Link></h3>
                <p className="fs-6">{ele.paratext}</p>
            </div>
        </div>
    </>
  )
}
