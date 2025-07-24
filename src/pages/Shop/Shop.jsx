import { Link } from "react-router";
import Footer from "../../components/Footer/Footer";
import Heroimgthree from "../../components/Heroimgthree/Heroimgthree";
import Merque from "../../components/Merque/Merque";
import Navbar from "../../components/Navbar/Navbar";

export default function Shop() {
  return (
    <>
      <Merque />
      <Navbar />
      <Heroimgthree text="products" main="all collections" page="products" icon="'>'" link="/collections"/>
      <div>
        <Link to={"/shop/singleproduct"}>
            singleproduct
        </Link>
      </div>
      <Footer />
    </>
  )
}
