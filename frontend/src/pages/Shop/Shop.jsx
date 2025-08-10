import Footer from "../../components/Footer/Footer";
import Heroimgthree from "../../components/Heroimgthree/Heroimgthree";
import Merque from "../../components/Merque/Merque";
import Navbar from "../../components/Navbar/Navbar";
import Singleshopitem from "../../components/Singleshopitem/Singleshopitem";
import Categorieslinks from "../../components/Categorieslinks/Categorieslinks";
import "./Shop.css"
export default function Shop() {
  return (
    <>
      <Merque />
      <Navbar />
      <Heroimgthree text="products" main="all collections" page="products" icon="'>'" link="/collections"/>
      <div>
        <div className="row m-0">
          <div className="col-lg-4 border-end p-4 text-capitalize">

            <h5>filters</h5>
            <h3>Availability</h3>
            <div className="d-flex flex-column gap-3">
              <div className="d-flex align-items-center gap-2">
                <input type="checkbox" name="In stock"/>
                <label>In stock </label>
              </div>
              <div>
                <input type="checkbox" name="Out of stock"/>
                <label>Out of stock</label>
              </div>
            </div>
            <Categorieslinks />
            <div>
              <h4>best seller</h4>
            </div>
          </div>
          <div className="col-lg-8">
            <Singleshopitem />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
