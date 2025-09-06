import { motion } from 'framer-motion'
import "./Accordiation.css"

export default function Accordiation() {
  return (
    <div className="container my-5">
        <div className="row m-0 g-5">
            <motion.div
            className="col-lg-7 col-12 accord"
            initial={{ x: -150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                <div>
                    <p>Products & Service</p>
                    <h4>Products & Service</h4>
                </div>

                <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne1">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                Are there any financing options available for furniture purchases?
                            </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne1" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Dolor sit amet consectetur adipiscing. Elit duis tristique sollicitudin nibh sit amet. Ultrices eros in cursus turpis. Ultricies tristique nulla aliquet enim tortor at auctor urna nunc.Volutpat diam ut venenatis tellus. 
                                Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne1" aria-expanded="false" aria-controls="flush-collapseOne1">
                            Do you offer Eco friendly furniture?
                        </button>
                        </h2>
                        <div id="flush-collapseOne1" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                            Ultrices dui sapien eget mi. Quam viverra orci sagittis eu volutpat odio. Bibendum neque egestas congue quisque egestas diam in arcu cursus. A pellentesque sit amet porttitor. Aliquet lectus proin nibh nisl condimentum id.Ridiculus mus mauris vitae ultricies leo integer.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne2" aria-expanded="false" aria-controls="flush-collapseOne2">
                             Is there a way to track the delivery of my furniture?
                        </button>
                        </h2>
                        <div id="flush-collapseOne2" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the className. This is the first item's accordion body.</div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne3" aria-expanded="false" aria-controls="flush-collapseOne3">
                             Do you offer custom furniture options?
                        </button>
                        </h2>
                        <div id="flush-collapseOne3" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Fermentum dui faucibus in ornare quam viverra orci sagittis eu. Dui ut ornare lectus sit amet. Morbi leo urna molestie at elementum eu facilisis sed. Eu mi bibendum neque egestas congue quisque. Non odio euismod lacinia at quis risus sed vulputate odio.</div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne4" aria-expanded="false" aria-controls="flush-collapseOne4">
                            Is it possible to place a special order for a specific piece of furniture?
                        </button>
                        </h2>
                        <div id="flush-collapseOne4" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the className. This is the first item's accordion body.</div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne5" aria-expanded="false" aria-controls="flush-collapseOne5">
                             Can I purchase an extended warranty for my furniture?
                        </button>
                        </h2>
                        <div id="flush-collapseOne5" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the className. This is the first item's accordion body.</div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                Is there any chance for me to buy an extended furniture warranty?
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the className. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                How can I obtain a pricing quote for a certain set of furniture?
                            </button>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                        </div>
                    </div>
                </div>
            </motion.div>

            <motion.div
            className="col-lg-5 col-12 imgpart"
            initial={{ x: 150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }} 
            transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                <div className="d-flex flex-column h-100 justify-content-between">
                    <div className="d-flex flex-column gap-3">
                        <h5>contact us</h5>
                        <p>No: 58 A, East Madison Street, Baltimore, MD, USA 4508</p>
                        <p>+20 29044321 mzkryarda@gmail.com</p>
                    </div>
                    <img src="/images/Group_131809.webp" alt="#" className='w-100'/>
                </div>
            </motion.div>
        </div>
    </div>
  )
}
