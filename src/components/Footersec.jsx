import React from 'react'
import '../styles/Footer.css'

const Footersec = () => {
  return (
   <div className="Footersection">
     <div className="Quickbloomtree">
      <div className="bloomtre mt-4 d-flex">
       
       
        <div className="advisors">
        <div className="logosec ms-5 ">
            <img className='ms-lg-2' src="https://bloomtreeadvisors.com/assets/uploads/headerlogo/newlogo.png" alt="" style={{ width: "200px", height: "55px" }} />
         
          <p>
            Bloomtree Advisors was established with a <br />vision  to support the
            functionalities of an <br /> organization by  complimenting the work  of <br /> a 
            CEO/the  founders by  acting as their  <br />shadow in the  finance domain of 
            the company. We app… read more
          </p>
          </div>
        </div>

        <div className="quiklinks ms-5">
          <h2>
            <u> Quick links</u>
          </h2>
          <li>Home</li>
          <li>About Us</li>
          <li> Our Team</li>
          <li> Blogs</li>
          <li> Services</li>
          <li>Contact us</li>
        </div>

        <div className="ourservice ms-5">
          <h2>
        
            <u>Our Services</u>
          </h2>
          <li>Outsourced Accounting</li>
          <li>Consulting and Advisory</li>
          <li>Virtual CFO and Allied Services</li>
          <li>Taxation and Compliances</li>
          <li>Corporate Finance and Audit</li>
          <li>Investor Relation</li>
        </div>

        <div className="contact-us ms-5">
          <h2>Contact us</h2>
          <p>
         <strong>   Phone:</strong> +91-8867474079 <br />
            +91-9035309350
          </p>
          <p>
           <strong> Email:</strong> anantha@bloomtreeadvisors.com <br />
            prathik@bloomtreeadvisors.com
          </p>
          <p>
          <strong>  Address:</strong> 42, 12th Main Rd, 4th T Block East, KV Layout, Jayanagar,
            Bengaluru, Karnataka 560011
          </p>
        </div>
        
      </div>
      
    <div className='footer-section d-flex justify-content-center mt-5'>
      <h3 className='mt-4' >copyrights@ 2024, All rights reserved by Bloomtree Advisors</h3>
    </div>
    </div>



   </div>
  )
}

export default Footersec;
