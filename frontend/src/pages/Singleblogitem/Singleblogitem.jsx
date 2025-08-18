import './Singleblogitem.css'
import Heroimgthree from '../../components/Heroimgthree/Heroimgthree'
import Categorieslinks from '../../components/Categorieslinks/Categorieslinks'
import { FaCheck } from "react-icons/fa";
import { Link, useParams } from 'react-router'
import { useEffect, useState} from 'react'
import axios from 'axios';

export default function Singleblogitem() {
  const [blogproduct , setblogproduct] = useState({})
  const [sorce , setsorce] = useState("#")

  const {blogid} = useParams();

  useEffect(()=>{
    let isMounted = true
    const getsingleproducts = async ()=>{
       try {
          const res = await axios.get(`http://localhost:1337/api/blogs/${blogid}` 
            ,{
            params:{
              populate:"*"
            }
          })
          if (isMounted) {
          setblogproduct(res.data.data)
          setsorce(`http://localhost:1337${res.data.data.blog_images.url}`)
          }
       }catch (error) {
          console.error(error)
       }
    }
    getsingleproducts();
    return () => {
      isMounted = false;
    };
  },[])

  return (
    <>
        <Heroimgthree text={blogproduct.blog_name} 
          main="News" page={blogproduct.blog_name}
          icon="'>'" link="/blog"/>
        <div className='.singleblog' style={{margin:"100px 20px"}}>
          <div className="row m-0 g-4" >
            <div className="col-lg-8 col-12 border-end detailsparent">
              <div className='p-3 d-flex flex-column gap-3 text-capitalize'>
                <img src={sorce}
                 className='w-100 singleblogimg'loading='lazy' />
                <p><span>Jul 08</span> {"-"} John Mathew </p>
                <h3>{blogproduct.blog_name}</h3>
                <p className="fs-6 text-secondary">Suspendisse viverra commodo semper. Donec facilisis odio vitae diam lacinia,
                   vel venenatis nibh mattis. Vestibulum odio dolor, gravida vel tincidunt vel, laoreet nec erat. 
                   Aliquam erat volutpat. Donec tincidunt magna dui, sit amet faucibus tortor dignissim ut. Nulla 
                   eget urna et nisl facilisis elementum nec ac ex. Phasellus quis hendrerit nibh, vitae sagittis 
                   ligula. Phasellus ante libero, varius quis felis sit amet, luctus bibendum nisl. Ut erat mi, 
                   bibendum id nibh sed, rutrum mollis dolor. Vivamus aliquet laoreet enim quis lobortis. Maecenas 
                   laoreet faucibus justo nec placerat. Sed finibus risus quis nisl pulvinar, gravida aliquet turpis 
                   vehicula. Morbi et arcu quis quam rhoncus congue eu vitae velit. Phasellus tristique mauris eget
                    magna ullamcorper vulputate. Integer consequat fermentum ipsum. Duis mi lectus, elementum id tellus sed, 
                    sodales scelerisque eros.
                </p>

                <p className="fs-6 text-secondary">Nulla facilisi. Quisque laoreet mi non ipsum tempor condimentum. Nullam elit metus, 
                  rhoncus eu viverra ac, posuere at mi. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci 
                  luctus et ultrices posuere cubilia curae; Cras consectetur ipsum a viverra tincidunt. Phasellus accumsan 
                  consequat nunc vel euismod. Suspendisse potenti. Nullam a libero sed ex euismod commodo nec ornare urna. 
                  Interdum et malesuada fames ac ante ipsum primis in faucibus.
                </p>
                

                <div className='imgmotion d-flex justify-content-center align-items-center'>
                  <p className='text-center'>
                    Quisque Bibendum Sem Nibh, Quis Fermentum Odio Suscipit Vitae. Integer Et Sem Id Dui Fringilla Vestibulum 
                    Non Vitae Lectus. Nunc At Consequat Sem. Duis Sollicitudin Orci Eleifend Dui Pharetra.
                  </p>
                </div>

                <h5>Ink Composition and Tattooing Techniques</h5>
                <p className="fs-6 text-secondary">Eleifend nullam primis ullamcorper dictum amet, nisl accumsan varius. Fames ut libero 
                  posuere senectus nec justo. Taciti facilisi erat per nam cursus adipiscing vulputate proin. Magnis suscipit 
                  augue ad nunc suscipit sociosqu. Quisque ad condimentum mauris feugiat est semper curabitur turpis varius. 
                  Eget primis velit malesuada habitant dignissim maecenas bibendum taciti. Vel pellentesque curae himenaeos 
                  ridiculus velit laoreet mi mollis. Fermentum bibendum sollicitudin consequat eget purus curabitur fermentum. 
                </p>

                <div className='d-flex flex-column gap-3'>
                  <p className='d-flex align-items-center gap-3'>
                    <FaCheck /> Tellus elementum sagittis vitae et. Proin nibh nisl condimentum id.
                  </p>
                  <p className='d-flex align-items-center gap-3'>
                    <FaCheck />  Diam quis enim lobortis scelerisque fermentum dui faucibus in ornare.
                  </p>
                  <p className='d-flex align-items-center gap-3'>
                    <FaCheck />  Vitae tempus quam dui faucibus pellentesque nec nam aliquam.
                  </p>
                  <p className='d-flex align-items-center gap-3'>
                    <FaCheck /> Tellus elementum sagittis vitae et. Proin nibh nisl condimentum id.
                  </p>
                  <p className='d-flex align-items-center gap-3'>
                    <FaCheck /> Purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus.
                  </p>
                  <p className='d-flex align-items-center gap-3'>
                    <FaCheck /> Condimentum id venenatis a condimentum vitae sapien pellent.
                  </p>
                  <p className='d-flex align-items-center gap-3'>
                    <FaCheck /> Odio eu feugiat pretium est placerat nibh ipsum consequat nisl.
                  </p>
                </div>
                <img src="/images/blog-03.webp" className='w-50 my-4' />

                <p>
                  Sem varius hendrerit potenti ornare massa iaculis. Vehicula massa potenti euismod etiam aliquet. 
                  Sem parturient elit vel ridiculus; habitasse aliquam habitasse. Vel mollis primis morbi, lectus 
                  consectetur praesent. Pellentesque fusce turpis semper auctor ligula. Phasellus imperdiet nullam 
                  congue ad duis primis lacinia dapibus. Ridiculus suspendisse pretium condimentum dapibus risus, hac convallis. 
                </p>

                <div className="line container"></div>
              </div>
            </div>
            
            <div className="col-lg-4 col-12 p-4">
              <div className='text-capitalize'>
                <h4 className='my-5 fs-2'>recent posts</h4>

                <div className='d-flex flex-column gap-3'>

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
                      <img src="/images/blog-02.webp"/>
                    </div>
                    <div className='d-flex flex-column gap-2'>
                      <p className="m-0">
                        <span>Jul 08</span>
                      </p>
                      <h3>Advantages Of Choosing Custom-Crafted Furniture...</h3>
                    </div>
                  </div>

                  <div className='d-flex gap-3 align-items-center recentpost'>
                    <div className='parentimg'>
                      <img src="/images/blog-03.webp"/>
                    </div>
                    <div className='d-flex flex-column gap-2'>
                      <p className="m-0">
                        <span>Jul 08</span>
                      </p>
                      <h3>The Modest Living Space Furnishings Ideas...</h3>
                    </div>
                  </div>

                  
                </div>

                <Categorieslinks />
                <div>
                  <Link to={"/collections/homedecoration"} className='w-100'>
                      <img src="/images/MFC.webp" className='w-100' />
                  </Link>
                </div>
              </div>
            </div>  

          </div>
        </div>
    </>
  )
}
