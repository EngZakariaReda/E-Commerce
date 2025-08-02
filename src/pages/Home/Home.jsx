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

      <div className={`row w-100 g-4 my-5`}>{
              itemscontact.map((el)=>{
                return <Iconitem key={el.id} ele={el} />
              })
            }
      </div>

      <div className="blogpart d-flex flex-column gap-3">
        <p>ACCESS THE LATEST STORIES</p>
        <h3>Explore Our Blog</h3>

        <div className="row m-0">
          <div className="col-lg-6">
            <div className='d-flex flex-column gap-3'>
                <div className="homeblogimg">
                    <img src="/images/blog-01.webp" className="w-100" />
                </div>
                <div className='d-flex flex-column gap-2'>
                    <p className="m-0">
                      <span>Jul 08</span>
                    </p>
                    <h3>Elegant & Essential Dinning Hall Furniture & De...</h3>
                    <p className="text-secondary">Tincidunt a pharetra tempor potenti pharetra donec. 
                      Turpis magna cubilia finibus aenean tempor ultrices ligula...
                    </p>
                </div>
            </div>
          </div>
          <div className="col-lg-6">

            <div className='d-flex gap-3 align-items-center recentpost'>
                <div className='parentimg'>
                  <img src="/images/blog-01.webp" />
                </div>
                <div className='d-flex flex-column gap-2'>
                  <p className="m-0">
                    <span>Jul 08</span>
                  </p>
                  <h3>Elegant & Essential Dinning Hall Furniture & De...</h3>
                </div>
            </div>
            <div className='d-flex gap-3 align-items-center recentpost'>
                <div className='parentimg'>
                  <img src="/images/blog-01.webp" />
                </div>
                <div className='d-flex flex-column gap-2'>
                  <p className="m-0">
                    <span>Jul 08</span>
                  </p>
                  <h3>Elegant & Essential Dinning Hall Furniture & De...</h3>
                </div>
            </div>
            <div className='d-flex gap-3 align-items-center recentpost'>
                <div className='parentimg'>
                  <img src="/images/blog-01.webp" />
                </div>
                <div className='d-flex flex-column gap-2'>
                  <p className="m-0">
                    <span>Jul 08</span>
                  </p>
                  <h3>Elegant & Essential Dinning Hall Furniture & De...</h3>
                </div>
            </div>


          </div>

        </div>
      </div>
      <Footer />
    </>
  )
}
