import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
    <Link to="/" class="navbar-brand"><span>Vision</span>Map</Link>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to="/" class="nav-link active">Home</Link>
        </li>
        <li class="nav-item">
        <Link to="/about" class="nav-link active">About</Link>
        </li>
        <li class="nav-item">
        <Link to="/contact" class="nav-link active"></Link>
        </li>
        <li class="nav-item">
        <Link to="/navigate" class="nav-link active">Tour</Link>
        </li>
        <li class="nav-item">
        <Link to="/eticket" class="nav-link active">E-ticket</Link>
        </li>
      
      </ul>
    
    </div>
  </div>
</nav>
    )
}

export default Navbar