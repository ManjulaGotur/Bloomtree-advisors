import React from "react";
import "../styles/Blogs.css";
import { Link } from "react-router-dom";


const Blogs = () => {
  return (
    <div className="blogsec">
      <div className="blogs d-flex flex-column flex-md-row p-4 text-light">
        <h1 className="ms-3 ms-md-5 fs-1 mb-4 mb-md-0 o">Blogs</h1>
        <div className="d-flex align-items-center ms-auto">
          <h3 className="me-3 me-md-5 mb-0">
            <u id="two" className="one">
            <Link to='/' className="nav-link active" >Home</Link>
            </u>
          </h3>
          <h3 className="me-3 ms-2 mb-0">Blogs</h3>
        </div>
      </div>

      <div className="gst mt-4 mt-md-5 ms-md-5 d-flex flex-column flex-md-row">
        <img
          src="https://bloomtreeadvisors.com/assets/uploads/news/gst.png"
          alt=""
          className="img-fluid"
        />
        <div className="searchin ms-3 ms-md-5 mt-3 mt-md-0">
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>

          <div className="category mt-4">
            <h2 className="p-2 text-light ">Categories</h2>
            <h3 className="p-5">BloomTree Articles(3)</h3>

            <h2 className="p-2 text-light mt-4">Recent Photos</h2>
            <h3 className="p-5">Indirect Taxes and GST</h3>
          </div>
        </div>
      </div>

      <div className="tax mt-4 mt-md-5 ms-md-5 d-flex flex-column flex-md-row">
        <img
          src="https://bloomtreeadvisors.com/assets/uploads/news/directtax.jpg"
          alt=""
          className="img-fluid"
        />

        <div className="categoriess mt-4 d-flex justify-content-center align-items-center">
          <h2 className="p-3 ms-4 rounded fs-4 text-center">
            Got any Questions? Call us Today!
            <br />
            +91-8867474079 <br />
             +91-9035309350
            <br />
            anantha@bloomtreeadvisors.com 
             prathik@bloomtreeadvisors.com
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
