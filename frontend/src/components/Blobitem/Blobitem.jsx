import { Link } from 'react-router'
import './Blobitem.css'
// documentId
export default function Blobitem({ele}) {
  return (
    <>
        <div className="col-lg-4 col-md-6 col-12 mx-auto" >
            <div className="d-flex flex-column gap-3 w-100 p-3 blogitem" >
                <div className="blogimgparent">
                  <Link to={`/blog/${ele.documentId}`}>
                    <img src={`http://localhost:1337${ele.blog_images.url}`}
                    className="w-100 h-100 blogimg" 
                    loading="lazy" 
                    alt={ele.blog_name}
                    />
                  </Link>
                </div>
                <p><span>Jul 08</span> {"-"} John Mathew </p>
                <h3>
                  <Link to={`/blog/${ele.documentId}`} >
                    {ele.blog_name}
                  </Link>
                </h3>
                <p className="fs-6">{ele.blog_description}</p>
            </div>
        </div>
    </>
  )
}
