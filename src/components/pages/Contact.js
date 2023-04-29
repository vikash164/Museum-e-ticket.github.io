import React,{ useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
const Contact = ({setcontactUser}) => {
    
    const [ user, setUser] = useState({
        Name: "",
        Phone:"",
        Email:"",
        Message:"",
        
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const contact = () => {
        const { Name, Phone, Email, Message } = user
        if( Name && Phone && Email && Message){
            axios.post("http://localhost:9002/contact", user)
          
        } 
        
    }

    return (
        <div className ='container'>
                 <section className='py-4 bg-info'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-8 my-auto'>
                        
                        </div>
                        <div className='col-md-8 my-auto'>
                            <h6 className='float-end'>
                            
                            </h6>
                        </div>

                    </div>

                </div>
            </section>
        
        <section className='section'>
     
            <div className='contact'>
            {console.log("User", user)}
                <div className='card shadow'>
                    <div className='card-body'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <h1>Booking Ticket</h1>
                                <hr/>
                                <div className='form-group'>
                                    <label className='mb-1'> Name</label>
                                    <input type='text'name="Name" value={user.name} className='form-control' placeholder='Enter full Name'onChange={ handleChange }/>
                                </div>
                                <div className='form-group'>
                                    <label className='mb-1'>Phone </label>
                                    <input type='number' name="Phone" value={user.Phone}className='form-control' placeholder='Enter phone number' onChange={ handleChange }/>
                                </div>
                                <div className='form-group'>
                                    <label className='mb-1'>Email </label>
                                    <input type='text' name="Email" value={user.Email}className='form-control' placeholder='Enter email adderess' onChange={ handleChange }/>
                                </div>
                                <div className='form-group'>
                                    <label className='mb-1'>Place and Member</label>
                                    <textarea rows='3' name="Message" value={user.Message}className='form-control' placeholder='Write Monument or Museam Name and Total member'onChange={ handleChange }></textarea>
                                </div>
                               
                                <div className='form-group py-3'>
                                <Link to='/Eticket' className='btn btn-link shadow w-100' onClick={contact}>Submit</Link>
                                   {/* <Link to='/Eticket' className='button'></Link> */}
                            </div>
                        </div>
                        <div className='col-md-6 border-start'>
                            <h5 className='main-heading'>Address Information</h5>
                            <div className='underline'></div>
                            <p>
                                #xxx, haryana - 56789, India
                            </p>
                            <p>
                                Phone: +91 8765432190
                            </p>
                            <p>
                                Email: email@domain.com
                            </p>

                        </div>
                    </div>
                </div>
          
            </div>
            </div>
        </section>
    </div>   
    )
}

export default Contact