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
      <Footer />
    </>
  )
}
