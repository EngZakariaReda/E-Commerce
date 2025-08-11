import { useState } from 'react'
import { Outlet } from 'react-router'
import Sidebar from '../Sidebar/Sidebar'
import Merque from '../Merque/Merque'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

export default function Layout() {
  const [open , setopen] = useState(false)
    const click=()=>{
      setopen(!open)
    }
  
  return (
    <>
        <Merque />
        <Navbar click={click} />
        <Outlet />
        <Sidebar open={open} click={click} />
        <Footer />
    </>
  )
}
