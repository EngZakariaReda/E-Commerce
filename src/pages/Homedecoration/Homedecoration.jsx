import Footer from "../../components/Footer/Footer";
import Heroimgthree from "../../components/Heroimgthree/Heroimgthree";
import Merque from "../../components/Merque/Merque";
import Navbar from "../../components/Navbar/Navbar";



export default function Homedecoration() {
  return (
    <>
        <Merque />
        <Navbar />
        <Heroimgthree text="Home Decoration" main="all collections" page="products" icon="'>'" link="/collections" />
        <Footer />
    </>
  )
}
