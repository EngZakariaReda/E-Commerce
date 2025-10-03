import "./Home.css"
import Slider from "../../components/Slider/Slider";
import { motion } from 'framer-motion'
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
          <motion.div 
            className="col-lg-6 col-12"
            initial={{ x: -150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className='d-flex flex-column gap-3'>
                <div className="homeblogimg">
                    <Link to={"/blog/bgeqpozd7em3w844p82uz9r0"}>
                      <img src="/images/blog-01.webp" className="w-100" />
                    </Link>
                </div>
                <div className='d-flex flex-column gap-2'>
                    <p className="m-0">
                      <span>Jul 08</span>
                    </p>
                    <h3>
                      <Link to={"/blog/bgeqpozd7em3w844p82uz9r0"}>
                         The Modest Living Space Furnishings Ideas
                      </Link>
                    </h3>
                    <p className="text-secondary">
                      Amet nunc condimentum praesent fames blandit viverra. 
                      Pretium accumsan commodo ridiculus auctor vulputate dignissim rhoncus....
                    </p>
                </div>
            </div>
          </motion.div>

          <div className="col-lg-6 col-12 d-flex flex-column gap-4">
            <motion.div 
              className='d-flex gap-3 align-items-center smallblog'
              initial={{ x: 150, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                <div className='h-100 smallimg'>
                  <Link to={"/blog/do2q793foy2nw1c187u32stu"}>
                    <img src="/images/blog-02.webp" className="h-100 w-100" />
                  </Link>
                </div>
                
                <div className='d-flex flex-column h-100 justify-content-between smalltext'>
                  <p className="m-0">
                    <span>Jul 08</span>
                  </p>
                  <h3>
                    <Link to={"/blog/do2q793foy2nw1c187u32stu"}>
                      Elevate Your Home With Stylish Furniture’s And ...
                    </Link>
                  </h3>
                  <p className="m-0 text-secondary">
                    Porttitor potenti condimentum pulvinar etiam imperdiet inceptos. 
                    Cras consectetur risus suscipit venenatis natoque curabitur ligula.
                  </p>
                </div>
            </motion.div>

            <motion.div 
              className='d-flex gap-3 align-items-center smallblog'
              initial={{ x: 150, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                <div className='h-100 smallimg'>
                  <Link to={"/blog/teeo8qov4bkxqn1ns5kugcek"}>
                    <img src="/images/blog-03.webp" className="h-100 w-100" />
                  </Link>
                </div>
                <div className='d-flex flex-column h-100 justify-content-between smalltext'>
                  <p className="m-0">
                    <span>Jul 08</span>
                  </p>
                  <h3>
                    <Link to={"/blog/teeo8qov4bkxqn1ns5kugcek"}>
                      The Ultimate Guide To Buying Luxury Furniture
                    </Link>
                  </h3>
                  <p className="m-0 text-secondary">
                    Sagittis risus praesent suscipit tempor consectetur taciti. 
                    Nisi efficitur platea, montes fames convallis efficitur? Vitae.. 
                  </p>
                </div>
            </motion.div>

            <motion.div 
              className='d-flex gap-3 align-items-center smallblog'
              initial={{ x: 150, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                <div className='h-100 smallimg'>
                  <Link to={"/blog/wpcnwsqwqtvb05xlsnspm7m3"}>
                    <img src="/images/blog-04_1f730a28-ccd5-4d96-a834-b3ee4d07e036.webp" className="h-100 w-100" />
                  </Link>
                </div>
                <div className='d-flex flex-column h-100 justify-content-between smalltext'>
                  <p className="m-0">
                    <span>Jul 08</span>
                  </p>
                  <h3>
                    <Link to={"/blog/wpcnwsqwqtvb05xlsnspm7m3"}>
                      Tips For Designing Reading Area Space Smartly
                    </Link>
                  </h3>
                  <p className="m-0 text-secondary">
                    Gravida platea nostra mauris aptent eleifend suspendisse integer.
                     Aporta mus ullamcorper finibus suscipit ultricies neque...
                  </p>
                </div>
            </motion.div>

          </div>

        </div>
      </div>
    </>
  )
}
