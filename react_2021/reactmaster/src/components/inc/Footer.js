import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        
        <section className='section footer bg-primary text-white'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>
                        <h5>Company Information</h5>
                        <hr/>
                        <p className='text-white'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem harum repellendus 
                            excepturi similique commodi necessitatibus libero illum sequi illo tempora, id 
                            reiciendis culpa possimus delectus provident sed quisquam explicabo quis.
                        </p>


                    </div>
                    <div className='col-md-4'>
                        <h6>Quick Link</h6>
                        <hr/>
                        <div><Link to='/'>Home</Link></div>
                        <div><Link to='/About'>About</Link></div>
                        <div><Link to='/Navigate'>Navigate</Link></div>
                        <div><Link to='/Eticket'>Eticket</Link></div>


                    </div>
                    <div className='col-md-4'>
                        <h6>Contact Information</h6>
                        <hr/>
                        <div><p className='text-white mb-1'> #64, India</p></div>
                        <div><p className='text-white mb-1'> +91 8877665544</p></div>
                        <div><p className='text-white mb-1'> +91 9988776655</p></div>
                        <div><p className='text-white mb-1'> email@domain.com</p></div>
                        

                </div>
                </div>

            </div>
        </section>
    )
}

export default Footer
