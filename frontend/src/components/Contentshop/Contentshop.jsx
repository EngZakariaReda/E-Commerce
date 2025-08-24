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
          <div className="col-lg-4 border-lg-end p-4 text-capitalize">

            <h5 className='my-4 fs-1'>filters</h5>
            <div className="d-flex flex-column gap-3">
              <div className="d-flex align-items-center gap-2">
                <input type="checkbox" name="Alphabetically, A-Z"/>
                <label>Alphabetically, A-Z </label>
              </div>
              <div>
                <input type="checkbox" name="Alphabetically, Z-A"/>
                <label>Alphabetically, Z-A</label>
              </div>
              <div>
                <input type="checkbox" name="Price, low to high"/>
                <label>Price, low to high</label>
              </div>
              <div>
                <input type="checkbox" name="Price, high to low"/>
                <label>Price, high to low</label>
              </div>
            </div>
            <Categorieslinks />
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
