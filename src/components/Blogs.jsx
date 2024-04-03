import React from 'react'
import '../styles/Blogs.css'

const Blogs = () => {
  return (
    <div className='blogsec'>
      <div className="blogs d-flex flex-column flex-md-row p-4 text-light">
        <h1 className="ms-5 fs-1 mb-4 mb-md-0 o">Blogs</h1>
        <div className="d-flex align-items-center ms-auto">
          <h3 className="me-5 mb-0"><u id="two" className="one">Home</u></h3>
          <h3 className="me-5 ms-2 mb-0">Blogs</h3>
        </div>
      </div>

      <div className="gst mt-5 ms-5 d-flex flex-column flex-md-row">
        <img src="https://bloomtreeadvisors.com/assets/uploads/news/gst.png" alt="" className="img-fluid"/>
        <div className="searchin ms-md-5 mt-md-0 mt-3">
          <form className="d-flex" role="search">
            <input className="form-control me-2 ms-4" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>

          <div className="category ms-4 mt-4">
            <h2 className='p-2 text-light'>Categories</h2>
            <h3 className='p-5'>BloomTree Articles(3)</h3>

            <h2 className='p-2 mt-5 text-light'>Recent Photos</h2>
            <h3 className='p-5'>Indirect Taxes and GST</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blogs
