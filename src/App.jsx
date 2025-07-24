import "./App.css"
import React, { useRef, useState } from 'react';
import { BrowserRouter, Route } from "react-router";
import { Routes } from "react-router";
import Home from "./pages/Home/Home";
import Collections from "./pages/Collections/Collections";
import Shop from "./pages/Shop/Shop";
import Blog from "./pages/Blog/Blog";
import About from "./pages/About/About";
import FAQ from "./pages/FAQ/FAQ";
import Contact from "./pages/Contact/Contact";
import Mistake from "./pages/Mistake/Mistake";
import Favourite from "./pages/Favourite/Favourite";
import Compare from "./pages/Compare/Compare";
import Homedecoration from "./pages/Homedecoration/Homedecoration";
import Indoordecoration from "./pages/Indoordecoration/Indoordecoration";
import Officedecoration from "./pages/Officedecoration/Officedecoration";
import Outdoordecoration from "./pages/Outdoordecoration/Outdoordecoration";
import Singleproduct from "./pages/Singleproduct/Singleproduct";
import Singleblogitem from "./pages/Singleblogitem/Singleblogitem";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home/>} />
            <Route path="/collections">
              <Route index element={<Collections />}/>
              <Route path="/collections/homedecoration" element={<Homedecoration />} />
              <Route path="/collections/indecoration" element={<Indoordecoration />} />
              <Route path="/collections/officedecoration" element={<Officedecoration />} />
              <Route path="/collections/outdecoration" element={<Outdoordecoration />} />
            </Route>
            <Route path="/shop" >
              <Route index element={<Shop />} />
              <Route path="/shop/singleproduct" element={<Singleproduct />} />
            </Route>
            <Route path="/blog">
              <Route index element={<Blog />} />
              <Route path="/blog/singleblogitem" element={<Singleblogitem />} />

            </Route>
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/favourite" element={<Favourite />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/*" element={<Mistake />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

// <Heroimgthree text="kkkkkkkk" main="reda" page="zeko" icon="'>'" link="/contact"/>
//<Heroimg text="faq" page="faq" icon="'>'"/>

{/* <Merque /> */}
     {/* <Navbar /> */}
     {/* <Slider />
     <Footer />
     <Textslider /> */}
     {/* <div  className="mouseover"
      style={{
        backgroundImage: hover
          ? 'url("/images/img-1.webp")': 'url("/images/blog.avif")'
        }}>
        <div className="row w-100 g-3">

          <div className="col-4 my-4 active" onMouseOver={()=>{
            sethover(true)
          }} onMouseOut={()=>{
            sethover(false)
          }}>
            <h4 className="active"><span>Sofa</span></h4>
          </div>

          <div className="col-4 my-4">
            <h4>Cabinet</h4>
          </div>

          <div className="col-4 my-4">
            <h4>Shelving Units</h4>
          </div>

          <div className="col-6 my-4">
            <h4>Tea Table</h4>
          </div>

          <div className="col-6 my-4">
            <h4>Kitchen Furniture</h4>
          </div>

          <div className="col-4 my-4">
            <h4>Decors</h4>
          </div>

          <div className="col-4 my-4">
            <h4>Office Table</h4>
          </div>

          <div className="col-4 my-4">
            <h4>Storage Furniture</h4>
          </div>
      
        </div>
     </div> */}