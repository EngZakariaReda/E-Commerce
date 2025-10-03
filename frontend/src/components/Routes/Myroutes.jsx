import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../../pages/Home/Home";
import Collections from "../../pages/Collections/Collections";
import Homedecoration from "../../pages/Homedecoration/Homedecoration";
import Indoordecoration from "../../pages/Indoordecoration/Indoordecoration";
import Officedecoration from "../../pages/Officedecoration/Officedecoration";
import Outdoordecoration from "../../pages/Outdoordecoration/Outdoordecoration";
import Shop from "../../pages/Shop/Shop";
import Singleproduct from "../../pages/Singleproduct/Singleproduct";
import Singleblogitem from "../../pages/Singleblogitem/Singleblogitem";
import Blog from "../../pages/Blog/Blog";
import About from "../../pages/About/About";
import FAQ from "../../pages/FAQ/FAQ";
import Contact from "../../pages/Contact/Contact";
import Favourite from "../../pages/Favourite/Favourite";
import Compare from "../../pages/Compare/Compare";
import Mistake from "../../pages/Mistake/Mistake";
import ScrollToTop from "../Scrolltotop/Scrolltotop";
import Layout from "../Layout/Layout";
import Search from "../../pages/Search/Search";
import Cart from "../../pages/Cart/Cart";
import Register from "../../pages/Register/Register";
import Login from "../../pages/Login/Login";
import Order from "../../pages/Order/Order";

export default function Myroutes() {
  return (
    <>
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route path="/">
                        <Route index element={<Home />} />
                        <Route path="/collections">
                        <Route index element={<Collections />}/>
                        <Route path="/collections/homedecoration" element={<Homedecoration />} />
                        <Route path="/collections/indecoration" element={<Indoordecoration />} />
                        <Route path="/collections/officedecoration" element={<Officedecoration />} />
                        <Route path="/collections/outdecoration" element={<Outdoordecoration />} />
                        </Route>
                        <Route path="/shop" >
                            <Route index element={<Shop />} />
                            <Route path="/shop/:productid" element={<Singleproduct />} />
                        </Route>
                        <Route path="/blog">
                        <Route index element={<Blog />} />
                            <Route path="/blog/:blogid" element={<Singleblogitem />} />
                        </Route>
                        <Route path="/about" element={<About />} />
                        <Route path="/faq" element={<FAQ />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/search" element={<Search />} />
                        <Route path="/favourite" element={<Favourite />} />
                        <Route path="/compare" element={<Compare />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/orders" element={<Order />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/*" element={<Mistake />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}
