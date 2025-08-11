import './About.css'
import Heroimg from '../../components/Heroimg/Heroimg'
import Teamcard from '../../components/Teamcard/Teamcard'
import { useEffect, useState } from 'react'
import Imgpara from '../../components/Imgpara/Imgpara'
import Textimgslider from '../../components/Textimgslider/Textimgslider'
import Havorcard from '../../components/Havorcard/Havorcard'

export default function About() {
  const team=[
    {
      id:1,
      img:"images/Home_2_Team_-_01.webp",
      name:"Petro Ago",
      pos:"CEO",
    },
    {
      id:2,
      img:"images/Home_2_Team_-_01.webp",
      name:"Nyssa Carina",
      pos:"Designer",
    },
    {
      id:3,
      img:"images/Home_2_Team_-_01.webp",
      name:"Meshulam Rudi",
      pos:"Marketing",
    },
    {
      id:4,
      img:"images/Home_2_Team_-_01.webp",
      name:"Berach Ingram",
      pos:"Customer Support",
    },
  ]
  
  const [count,setcount]=useState(0);

  return (
    <>
      <Heroimg text="about" page="about" icon="'>'"/>
      <Imgpara />
      <div className="counter">
        <div className="row w-100">
          <div className="col-12 col-lg-3 col-md-6 counteritem">
            <h2>{count}k</h2>
            <p>Products Sold</p>
          </div>
          <div className="col-12 col-lg-3 col-md-6 counteritem">
            <h2>{0}k</h2>
            <p>Years Service</p>
          </div>
          <div className="col-12 col-lg-3 col-md-6 counteritem">
            <h2>{0}</h2>
            <p>Outlets Worldwide</p>
          </div>
          <div className="col-12 col-lg-3 col-md-6 counteritem">
            <h2>{0}k</h2>
            <p>Satisfied Customers</p>
          </div>
        </div>
      </div>

      <div className='bestteam text-center text-capitalize'>
        <p className='headp'>COMFORT CRAFTERS</p>
        <h4>Our Best Team</h4>

        <div className="container my-5">
          <div className="row g-3">
            {
              team.map((el)=>{
                return <Teamcard key={el.id} ele={el}/>
              })
            }
          </div>
        </div>
      </div>

      <div>
        <div className='upslid text-center text-capitalize pt-5'>
          <p>customer comments</p>
          <h4>words from our valuable customers</h4>
        </div>
        <Textimgslider />
      </div>
      <Havorcard />
    </>
  )
}