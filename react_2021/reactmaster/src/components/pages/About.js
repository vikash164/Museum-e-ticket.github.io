import React from 'react'
import Vmc from './inc/Vmc'
import Slider3 from '../images/about.jpg'

const About = () => {
    return (
         

        <div>
            
            <section className='py-4 bg-info'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-7 my-auto'>
                        
                        </div>
                        <div className='col-md-7 my-auto'>
                            <h1 className='float-end'>
                            About us
                            </h1>
                        </div>
                        <div>
      <img src={Slider3} alt=".../" width="1300" height="600"/>
      </div>



                    </div>

                </div>
            </section>

            <section className='section  border-bottom '>
                <div className='container col-md-9 my-auto'>
                    <h5 className='main-heading text-lg-center'>Indoor Navigation</h5>
                    <div className='underline mx-auto'></div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis perferendis nobis
                         atque, autem sint fuga delectus, dicta iste reiciendis consectetur nemo sit tempore 
                         in porro voluptas dignissimos explicabo ullam laudantium!</p>
                </div>
            </section>

              {/* Our vision, mission and values */}

       <Vmc/>
            
        </div>
    )
}

export default About