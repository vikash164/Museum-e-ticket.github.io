
import React, {useState} from 'react';
import data from './inc/data';
import { Link } from 'react-router-dom'


// import Service3 from '../../images/img8.jpg'


// import Slider1 from '../images/Slider1.png'
// import Slider2 from '../images/Slider2.png'
// import Slider3 from '../images/Slider3.png'
// import img8 from '../images/img8.jpg';
//  import img7 from '../images/img7.jpg';
//  import img5 from '../images/img5.jpg';

//<img src={Service1} className='w-10 border-botton' alt='Services'/> 
const Eticket = () => {
    const [filter, setFilter] = useState('');

    
     
    const searchText = (event) =>{
        // setFilter({value: event.target.value});
         setFilter(event.target.value);
        }
        console.warn(filter)
    let dataSearch = data.cardData.filter(item =>{
        return Object.keys(item).some(key =>
            item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
            )
    });
    return (
        <section className="py-9 container">
         <div className="row justify-content-center">
             
             <div className="col-12 mb-5">
                 <div className="mb-4 col-5 mx-auto text-center">
                     <label className="form-label h5"> Search --</label>
                     <input
                     type="text"
                     placeholder='Search city'
                     className="from-control"
                     value={filter}
                     onChange={searchText.bind(this)}
                     />
                     
                     </div>
                 </div>
             {dataSearch.map((item, index)=>{
                 return(
                     <div className="col-12 col-md-5 col-lg-4 mx-0 mb-4">
                         <div className="card p-1 overflow-hidden h-400 shadow">
                             
                              <img src={item.images} className="card-img-top img-fluid" alt="images" />
                             
                              <div className="card-body">
                                    <h6 className="card-text">{item.title}</h6>
                                    <h5 className="card-title">{item.desc}</h5>
                                    <Link to='/contact' className='btn btn-link'>Book now</Link>
                                    {/* <Link to='/navigate' className='btn btn-link'>Start Tour</Link> */}
                                    <a href="https://maps.google.com/" className="btn btn-outline-primary">Navigate</a>
                                </div>
                            </div>
                        </div>
                    )
                
                })}

            </div>   
        </section>
        
    )
}


export default Eticket