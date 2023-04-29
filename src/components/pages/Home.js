import React from 'react'
import { Link } from 'react-router-dom'
import Slidert from '../inc/Slidert'
import Vmc from './inc/Vmc'
//import Callouts from './inc/Callouts'
import Service1 from '../images/gallery image 01.webp'
import Service2 from '../images/bd.jpg'
const Home = () => {
    return (
        <div>
            <Slidert/>
       <section className='section'>
           <div className='container'>
               <div className='row'>
                   <div className='col-md-12'>
                       <h2 className='main-heading text-lg-center' >Tour</h2>
                       <div className='underline mx-auto' style={{textAlign: "center"}}></div>
                       <p style={{textAlign: "center"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br></br> Tempora maxime distinctio consequuntur non similique? Ex molestias earum dolore aut sequi?</p>
                       <Link to="/about" className='btn btn-primary accordion-button align-content-xl-center text-lg-center' >Read More</Link>

                   </div>
               </div>
           </div>

       </section>
       {/* Our vision, mission and values */}

       <Vmc/>

       
       
       

       {/* Our Services */}

       <section className='section  border-top'>
           <hr/>
           <div className='container '><div width="530px">
               
               <div className='row'>
                   <div className='col-md-12 mb-8 text-center'>
                       <h2 className='main-heading'>Our Services</h2>
                       <div className='underline mx-auto'></div>
                     <div className='col-sm-12 py-6'>
                         <div className='card shadow text-center'><div width="530px">
                         <img src={Service1} className='w-10 border-botton' alt='Services' width="400" height="400"/>
                             <div className='card-body'>
                                 <h4>Indoor Map</h4>
                                 <div className='underline mx-auto'></div>
                                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cupiditate 
                                     consectetur error fugiat aut vero nulla, molestias similique 
                                     iure quasi deserunt eligendi minus temporibus rem blanditiis repellendus nisi autem. Eligendi.</p>
                                     <Link to='/Navigate' className='btn btn-link'>Read More</Link></div>
                                     </div>
                                

                             </div>
                             <hr/>

                              < div class="relative h-32 w-32 ...">
                    <div class="absolute inset-x-0 left-0 w-1 ..."></div>
                    </div> 
                     {/* <div className='col-md-3 '><hr/> */}
                   
                         <div className='card shadow text-center'><div width="730px">
                         <img src={Service2} className='w-13 border-botton' alt='Services' width="400" height="400"/>
                             <div className='card-body'>
                                 
                                 <h4>Eticket</h4>
                                 <div className='underline mx-auto'></div>
                                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cupiditate 
                                     consectetur error fugiat aut vero nulla, molestias similique 
                                     iure quasi deserunt eligendi minus temporibus rem blanditiis repellendus nisi autem. Eligendi.</p>
                                    
                                 <Link to='/Eticket' className='btn btn-link'>Read More</Link>
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

export default Home
