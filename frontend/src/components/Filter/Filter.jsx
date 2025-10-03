import React, { useState } from 'react'

export default function Filter({products , setproducts}) {
    const newarr = [...products];
    const handlechange = (e)=>{
        let comparefilter = e.target.name;
        const filterarr = 
            comparefilter === "atoz" ?
                newarr.sort((a, b) => a.product_name.localeCompare(b.product_name)) :
            comparefilter === "ztoa" ?
                newarr.sort((a, b) => b.product_name.localeCompare(a.product_name)) :
            comparefilter === "low" ?
                newarr.sort((a, b) => a.product_price - b.product_price) :
                newarr.sort((a, b) => b.product_price - a.product_price) 
        setproducts(filterarr)
    }
  return (
    <div>
        <div className="d-flex flex-column gap-4 filter">
            <div className="d-flex align-items-center gap-3">
                <input 
                    type="checkbox" 
                    name="atoz" 
                    onChange={handlechange}
                />
                <label>Alphabetically, A-Z </label>
            </div>
            <div className="d-flex align-items-center gap-3">
                <input
                    type="checkbox"
                    name="ztoa"
                    onChange={handlechange}
                />
                <label>Alphabetically, Z-A</label>
            </div>
            <div className="d-flex align-items-center gap-3">
                <input
                    type="checkbox"
                    name="low"
                    onChange={handlechange}
                />
                <label>Price, low to high</label>
            </div>
            <div className="d-flex align-items-center gap-3">
                <input
                    type="checkbox"
                    name="high"
                    onChange={handlechange}
                />
                <label>Price, high to low</label>
            </div>
        </div>
    </div>
  )
}
