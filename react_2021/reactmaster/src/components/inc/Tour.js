import React from 'react'
import Service5 from '../images/images.jpg'
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';
//import about from '../../images/DSC_0954.jpg'
const Tour = () => {
    return (
        
        // import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';
        
        // export default function App() {
        //   return (
            <MDBCard style={{ maxWidth: '22rem' }}>
              <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                <MDBCardImage  src={Service5} className='w-10 border-botton' alt='Services' width="400" height="400"/>
                
                  <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                
              </MDBRipple>
              <MDBCardBody>
                <MDBCardTitle>Card title</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </MDBCardText>
                <MDBBtn  href="https://maps.google.com/" className="btn btn-outline-primary">Navigate</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          );
        }
    

export default Tour