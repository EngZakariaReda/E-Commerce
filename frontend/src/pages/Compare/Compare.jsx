import Footer from "../../components/Footer/Footer";
import Heroimg from "../../components/Heroimg/Heroimg";
import Merque from "../../components/Merque/Merque";
import Navbar from "../../components/Navbar/Navbar";

export default function Compare() {
  return (
    <>
      <Merque />
      <Navbar />
      <Heroimg text="compare" page="compare" icon="'>'"/>
      <div style={{backgroundColor:"#2b2b2b",padding:"100px 0px"}}>
        <h4 className='d-flex justify-content-center text-capitalize fs-2'>
            Nothing found to compare!
        </h4>
      </div>
      <Footer />  
    </>
  )
}
