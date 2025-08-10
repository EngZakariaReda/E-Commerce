import { Link } from 'react-router'

export default function Categorieslinks() {
  return (
    <>
                <div className='my-5 d-flex flex-column gap-3'>
                  <h4>categories</h4>
                  <div className='d-flex flex-column gap-4  fs-4'>
                    <p className="m-0 d-flex justify-content-between">
                      <Link to={"/collections/homedecoration"}>home decoration</Link>
                      <Link>+</Link>
                    </p>
                    <p className="m-0 d-flex justify-content-between">
                      <Link to={"/collections/indecoration"}>indoor decoration</Link>
                      <Link>+</Link>
                    </p>
                    <p className="m-0 d-flex justify-content-between">
                      <Link to={"/collections/officedecoration"}>office decoration</Link>
                      <Link>+</Link>
                    </p>
                    <p className="m-0 d-flex justify-content-between">
                      <Link to={"/collections/outdecoration"}>outdoor decoration</Link>
                      <Link>+</Link>
                    </p>
                  </div>
                </div>

    </>
  )
}
