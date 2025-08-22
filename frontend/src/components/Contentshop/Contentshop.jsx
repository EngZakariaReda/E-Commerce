import { useState } from 'react'
import Categorieslinks from '../Categorieslinks/Categorieslinks'
import Loader from '../Loader/Loader'
import Singleshopitem from '../Singleshopitem/Singleshopitem'
import Pagination from '../Pagination/Pagination'
import { div } from 'framer-motion/client'

export default function Contentshop({allproducts , loading}) {
    const [currentpage,setcurrentpage] = useState(1)
    const [productsnumber,setproductsnumber] = useState(5)

    const lastindex = currentpage * productsnumber
    const firstindex = lastindex - productsnumber
    const viewproducts = allproducts.slice(firstindex , lastindex)
  return (
    <>
        <div className="row m-0">
          <div className="col-lg-4 border-end p-4 text-capitalize">

            <h5>filters</h5>
            <h3>Availability</h3>
            <div className="d-flex flex-column gap-3">
              <div className="d-flex align-items-center gap-2">
                <input type="checkbox" name="In stock"/>
                <label>In stock </label>
              </div>
              <div>
                <input type="checkbox" name="Out of stock"/>
                <label>Out of stock</label>
              </div>
            </div>
            <Categorieslinks />
            <div>
              <h4>best seller</h4>
            </div>
          </div>
          
          <div className="col-lg-8">
            {
              loading === true ? (<Loader />) :(
                <div className="row m-0 g-3">
                  {viewproducts.map((product)=>(
                  <Singleshopitem key={product.documentId}
                    id={product.documentId}
                    name={product.product_name}
                    category={product.product_category}
                    price={product.product_price}
                    images={product.product_image}
                    item={product}
                  />
                  ))} 
                </div>
                
              )
            }

            {
                allproducts.length > 5 ? 
                (<Pagination totalproducts={allproducts.length}
                  productsnumber={productsnumber}
                  setcurrentpage={setcurrentpage}
                  currentpage={currentpage}
                />) 
                    : 
                <div className='d-none'></div>
            }

    
          </div>
        </div>
    </>
  )
}
