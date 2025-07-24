import Navbar from '../../components/Navbar/Navbar'
import Merque from '../../components/Merque/Merque'
import Footer from '../../components/Footer/Footer'
import Heroimg from '../../components/Heroimg/Heroimg'
import Accordiation from '../../components/Accordiation/Accordiation'
import "./Faq.css"

export default function FAQ() {
  return (
    <>
      <Merque />
      <Navbar />
      <Heroimg text="faq" page="faq" icon="'>'"/>
      <div className='products'>
        <Accordiation />
      </div>
      <Footer />
    </>
  )
}