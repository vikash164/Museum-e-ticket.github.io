/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
// import { Link } from 'react-router-dom'
import Slider from '../inc/Slider'
// import Vmc from './inc/Vmc'
//import Callouts from './inc/Callouts'
import Service1 from '../images/turn by turn.webp'
import Service3 from '../images/img7.jpg'
// import Service4 from '../images/img8.jpg'
import Service5 from '../images/images.jpg'
import Service6 from '../images/about.jpg'
const Navigate = () => {
    return (
        <div>
            <Slider/>
       {/* /* <section className='section'>
           <div className='container'>
               <div className='row'>
                   <div className='col-md-4'>
                       <h2 className='main-heading'>Tour</h2>
                       <div className='underline mx-auto'></div>
                       <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora maxime distinctio consequuntur non similique? Ex molestias earum dolore aut sequi?</p>
                       <Link to="/about" className='btn btn-warning shadow'>Read More</Link>

                   </div>
               </div>
           </div>

       </section> */}

       
       
       

       {/* Our Services */}

       <section className='section  border-top'>
           <hr/>
           <div className='container '>
               
               <div className='row'>
                   <div className='col-md-12 mb-8 text-center'>
                       <h2 className='main-heading'>Monument and Museam</h2>
                       <div className='underline mx-auto'></div>
                       < div class="relative h-32 w-32 ..."><hr/>
                       <div class="absolute inset-x-0 left-0 w-1 ..."></div>
                     <div className='col-sm-12 py-9'>
                         <div className='card shadow text-center'><div width="500px"><hr/>
                         <img src={Service5} className='w-10 border-botton' alt='Services' width="400" height="400"/>
                             <div className='card-body'>
                                 <h4>How To Reach</h4>
                                 <div className='underline mx-auto'></div>
                                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cupiditate 
                                     consectetur error fugiat aut vero nulla, molestias similique 
                                     iure quasi deserunt eligendi minus temporibus rem blanditiis repellendus nisi autem. Eligendi.</p>
                                     
                                     <a href="https://maps.google.com/" className="btn btn-outline-success">Location</a></div>
                                     </div>
                                     </div>
                                

                             </div>
                             < div class="relative h-32 w-32 ..."><hr/>
                    <div class="absolute inset-y-0 left-0 w-1 ...">
                    </div>
                     {/* <div className='col-md-3 '><hr/> */}
                    
                         <div className='card shadow text-center'><div width="530px"><hr/>
                         <img src={Service1} className='w-10 border-botton' alt='Services' width="400" height="400"/>
                             <div className='card-body'>
                                 
                                 <h4>Navigate</h4>
                                 <div className='underline mx-auto'></div>
                                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cupiditate 
                                     consectetur error fugiat aut vero nulla, molestias similique 
                                     iure quasi deserunt eligendi minus temporibus rem blanditiis repellendus nisi autem. Eligendi.</p>
                                    
                                     <a href="https://mcn.edu/a-guide-to-virtual-museum-resources/" className="btn btn-outline-success">Navigate</a>
                                </div>

                             </div>
                         
                        </div>
                       <hr/>
                        <div className='card shadow text-center'><div width="530px"><hr/>
                         <img src={Service3} className='w-10 border-botton' alt='Services'/>
                             <div className='card-body'>
                                 
                                 <h4>Monument</h4>
                                 <div className='underline mx-auto'></div>
                                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cupiditate 
                                     consectetur error fugiat aut vero nulla, molestias similique 
                                     iure quasi deserunt eligendi minus temporibus rem blanditiis repellendus nisi autem. Eligendi.</p>
                                    
                                     <a href="https://www.fabhotels.com/blog/monuments-in-india/" className="btn btn-outline-success">Show</a>
                                </div> 
                                 
                                

                             </div>
                         
                        </div>
                 < div class="relative h-32 w-32 ..."><hr/>
                    <div class="absolute inset-x-0 left-0 w-1 ..."></div>
                    
                        <div className='card shadow text-center'><div width="530px">
                         <img src={Service6} className='w-10 border-botton' alt='Services' />
                             <div className='card-body'>
                                 
                                 <h4>Museam</h4>
                                 <div className='underline mx-auto'></div>
                                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cupiditate 
                                     consectetur error fugiat aut vero nulla, molestias similique 
                                     iure quasi deserunt eligendi minus temporibus rem blanditiis repellendus nisi autem. Eligendi.</p>
                                    
                                 <a href="https://en.wikipedia.org/wiki/List_of_museums_in_India" className="btn btn-outline-success">Show</a>
                                </div> 
                                 
                                

                             </div>
                         
                        </div>

                   </div>
               
           
        </div>
         </div>
         </div>
         </div>
         </div>
         
       </section>

        </div>
        
    )
}

export default Navigate
