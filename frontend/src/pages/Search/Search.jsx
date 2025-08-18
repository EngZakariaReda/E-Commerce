import React, { useState } from 'react'
import "./Search.css"
export default function Search() {
    const [searcharray , setsearcharray] = useState([])
  return (
    <>
        <form className='mx-auto col-lg-6 col-md-10 col-12'>
          <input type="search" name='search' 
          placeholder='search here about you want'
          className='w-100' 
          />
        </form>
        <div className="row m-0">

        </div>
    </>
  )
}
