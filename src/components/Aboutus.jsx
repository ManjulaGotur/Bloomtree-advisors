
import React, { useState, useEffect } from "react";
import "../styles/Aboutus.css";
import { Link } from "react-router-dom";


const Aboutus = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "https://bloomtreeadvisors.com/assets/uploads/about/aboutbloomtree.jpg",
    "https://bloomtreeadvisors.com/assets/uploads/about/our_culture.jpg",
    "https://bloomtreeadvisors.com/assets/uploads/about/our_history.jpg",
    
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 2000); // Change slide every 2 seconds
  
    return () => clearInterval(interval);
  },);
  

  return (
    <div className="Aboutsection">
      <div className="aboutus d-flex flex-column flex-md-row p-4 text-light">
        <h1 className="ms-5 fs-1 mb-4 mb-md-0 o">About Us</h1>
        <div className="d-flex align-items-center ms-auto">
          <h3 className="me-5 mb-0">
            <u id="two" className="one">
            <Link to='/' className="nav-link active" >Home</Link>           </u>
          </h3>
          <h3 className="me-5 ms-2 mb-0">About Us</h3>
        </div>
      </div>

      <div className="section1">
        <div className="row image1 mt-5 ">
          <div className="col-md-6">
            <img
              className="ms-5 img-fluid"
              src={slides[currentSlide]}
              alt=""
            />
          </div>
          <div className="col-md-5 para mt-2">
            <h1 className="fs-1">Welcome To Bloomtree Advisors</h1>
            <p className="fs-5 mt-2">
              Bloomtree Advisors was established with a vision to support the
              functionalities of an organization by complimenting the work of a
              CEO/the founders by acting as their shadow in the finance domain of
              the company. We approach work by aligning our subject expertise and
              industry knowledge to your organization’s internal way of
              operations. And this comes with us knowing that, in order to
              maximize the potential of success for your organization, we need to
              shape our expert advice in a way that applies to your way of doing
              business. The team comprises of subject matter experts who provide
              professional, results-driven and high-quality advisory services to
              all our clients with time-bound precision.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;










