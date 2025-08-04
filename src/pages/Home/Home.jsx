import "./Home.css"
import Footer from "../../components/Footer/Footer";
import Merque from "../../components/Merque/Merque";
import Navbar from "../../components/Navbar/Navbar";
import Slider from "../../components/Slider/Slider";
import Textslider from "../../components/Textslider/Textslider";
import Iconitem from "../../components/Iconitem/Iconitem";
import Havorcard from "../../components/Havorcard/Havorcard";
import Accordiation from "../../components/Accordiation/Accordiation";
import Textimgslider from "../../components/Textimgslider/Textimgslider";
import { Link } from "react-router";

export default function Home() {
  const itemscontact=[
    {
      id:1,
      text:"Transmission Protocol",
      para:"Eget arcu dictum varius duis at lorem donec",
    },
    {
      id:2,
      text:"Chat Helpdesk",
      para:"Eget arcu dictum varius duis at lorem donec",
    },
    {
      id:3,
      text:"Email Interaction",
      para:"Eget arcu dictum varius duis at lorem donec",
    },
    {
      id:4,
      text:"Global Stores",
      para:"Eget arcu dictum varius duis at lorem donec",
    },
  ]
  return (
    <>
      <Merque />
      <Navbar />

      <Slider />
      <Accordiation />
      <Havorcard />    

      <div>
        <div className='upslid text-center text-capitalize pt-5'>
         <p>customer comments</p>
          <h4>words from our valuable customers</h4>
        </div>
        <Textimgslider />
      </div>

      <div className={`container my-5`}>
            <div className="row m-0">
              {
              itemscontact.map((el)=>{
                return <Iconitem key={el.id} ele={el} />
              })
              }
            </div>
      </div>

      <div className="blogpart d-flex flex-column gap-3">
        <p className="para">ACCESS THE LATEST STORIES</p>
        <h3>Explore Our Blog</h3>

        <div className="row m-0 g-5">
          <div className="col-lg-6 col-12">
            <div className='d-flex flex-column gap-3'>
                <div className="homeblogimg">
                    <Link to={"/blog/singleblogitem"}>
                      <img src="/images/blog-01.webp" className="w-100" />
                    </Link>
                </div>
                <div className='d-flex flex-column gap-2'>
                    <p className="m-0">
                      <span>Jul 08</span>
                    </p>
                    <h3>
                      <Link to={"/blog/singleblogitem"}>
                         Elegant & Essential Dinning Hall Furniture & De...
                      </Link>
                    </h3>
                    <p className="text-secondary">
                      Tincidunt a pharetra tempor potenti pharetra donec. 
                      Turpis magna cubilia finibus aenean tempor ultrices ligula..
                    </p>
                </div>
            </div>
          </div>

          <div className="col-lg-6 col-12 d-flex flex-column gap-4">
            <div className='d-flex gap-3 align-items-center smallblog'>
                <div className='h-100 smallimg'>
                  <Link to={"/blog/singleblogitem"}>
                    <img src="/images/blog-02.webp" className="h-100 w-100" />
                  </Link>
                </div>
                
                <div className='d-flex flex-column h-100 justify-content-between smalltext'>
                  <p className="m-0">
                    <span>Jul 08</span>
                  </p>
                  <h3>
                    <Link to={"/blog/singleblogitem"}>
                      Advantages Of Choosing Custom-Crafted Furniture...
                    </Link>
                  </h3>
                  <p className="m-0 text-secondary">
                    Habitasse nostra potenti potenti diam integer; odio mauris. 
                    Tempus dui urna felis mauris molestie donec...
                  </p>
                </div>
            </div>

            <div className='d-flex gap-3 align-items-center smallblog'>
                <div className='h-100 smallimg'>
                  <Link to={"/blog/singleblogitem"}>
                    <img src="/images/blog-03.webp" className="h-100 w-100" />
                  </Link>
                </div>
                <div className='d-flex flex-column h-100 justify-content-between smalltext'>
                  <p className="m-0">
                    <span>Jul 08</span>
                  </p>
                  <h3>
                    <Link to={"/blog/singleblogitem"}>
                      The Modest Living Space Furnishings Ideas
                    </Link>
                  </h3>
                  <p className="m-0 text-secondary">
                    Porttitor potenti condimentum pulvinar etiam imperdiet inceptos. 
                    Cras consectetur risus suscipit venenatis natoque curabitur ligula. 
                  </p>
                </div>
            </div>

            <div className='d-flex gap-3 align-items-center smallblog'>
                <div className='h-100 smallimg'>
                  <Link to={"/blog/singleblogitem"}>
                    <img src="/images/blog-04_1f730a28-ccd5-4d96-a834-b3ee4d07e036.webp" className="h-100 w-100" />
                  </Link>
                </div>
                <div className='d-flex flex-column h-100 justify-content-between smalltext'>
                  <p className="m-0">
                    <span>Jul 08</span>
                  </p>
                  <h3>
                    <Link to={"/blog/singleblogitem"}>
                      Elevate Your Home With Stylish Furniture’s And ...
                    </Link>
                  </h3>
                  <p className="m-0 text-secondary">
                    Amet nunc condimentum praesent fames blandit viverra. 
                    Pretium accumsan commodo ridiculus auctor vulputate 
                    dignissim rhoncus....
                  </p>
                </div>
            </div>

          </div>

        </div>
      </div>
      <Footer />
    </>
  )
}
/**working on ui of home page
 */