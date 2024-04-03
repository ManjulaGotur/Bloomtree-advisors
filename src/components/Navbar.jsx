import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className='navbar-section'>
      <nav className="navbar navbar-expand-lg bg-body-tertiary p-3">
        <div className="container-fluid">
          <div className="logosec ">
            <img className='ms-lg-5' src="https://bloomtreeadvisors.com/assets/uploads/headerlogo/newlogo.png" alt="" style={{ width: "200px", height: "55px" }} />
          </div>
       
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-center text-dark" id="navbarSupportedContent">
            <ul className="navbar-nav ms-lg-3">
              <li className="nav-item text-dark">
                <Link to='/' className="nav-link active" >Home</Link>
              </li>
              <li className="nav-item ms-lg-3">
                <Link to='/aboutus' className="nav-link text-dark" >About Us</Link>
              </li> 
              <li className="nav-item ms-lg-3">
                <Link to='/ourteam' className="nav-link text-dark" href="#">Our Team</Link>
              </li>
              <li className="nav-item dropdown ms-lg-3">
                <Link to='/Services' 
                className="nav-link dropdown-toggle text-dark"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Services
                </Link>
                <ul  className="dropdown-menu ms-lg-3">
                  <li className="dropdown-item" href="#">Outsourced Accounting</li>
                  <li className="dropdown-item" href="#">Consulting And Advisory</li>
                  <li className="dropdown-item" href="#">Virtual CFO And Allied Services</li>
                  <li className="dropdown-item" href="#">Taxation And Compliances</li>
                  <li className="dropdown-item" href="#">Corporate Finance And Audit</li>
                  <li className="dropdown-item" href="#">Taxation And Compliances</li>
                </ul>
              </li>
              <li className="nav-item ms-lg-3">
                <Link to='/blogs' className="nav-link text-dark" href="#">Blogs</Link>
              </li>
              <li className="nav-item ms-lg-3">
                <Link to='/contactus' className="nav-link text-dark" href="#">Contact Us</Link>
              </li>
            </ul>
            <button className="btn btn-primary text-light rounded-5 ps-5 pe-5  ms-lg-5">GET CONSULTATION</button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
