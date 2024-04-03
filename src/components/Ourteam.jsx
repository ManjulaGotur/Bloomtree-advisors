import React from "react";
import "../styles/Ourteam.css";

const Ourteam = () => {
  return (
    <div className="ourteammates">
      <div className="ourteam d-flex flex-column flex-md-row p-4 text-light">
        <h1 className="ms-5 fs-1 mb-4 mb-md-0 o">Our Team</h1>
        <div className="d-flex align-items-center ms-auto">
          <h3 className="me-5 mb-0">
            <u id="two" className="one">
              Home
            </u>
          </h3>
          <h3 className="me-5 ms-2 mb-0">Our Team</h3>
        </div>
      </div>

      <div className="heading mt-5 fs-3">
        <h2 className="fs-4 ms-4 me-5" >
          Initiated by a diversified group of individuals with a common interest
          of offering the best of services in the field of finance and fields
          related to finance and members of various institutes and professional
          bodies across the world
        </h2>
      </div>

      <div className="teammates mt-2 ">
      
        <div className="teammember  ">
          <div className="person1">
            <img
              src="https://bloomtreeadvisors.com/assets/uploads/team/_MG_4437.jpg"
              alt=""
            />
            <h4 className="text-center">Anantha Padmanabha H S</h4>
            <p className="text-center">View Profile</p>
          </div>
          <div className="person2">
            <img
              src="https://bloomtreeadvisors.com/assets/uploads/team/_MG_4417.jpg"
              alt=""
            />
            <h4 className="text-center">Prathik N P</h4>
            <p className="text-center">View Profile</p>
          </div>
          <div className="person3">
            <img
              src="https://bloomtreeadvisors.com/assets/uploads/team/_MG_4473.jpg"
              alt=""
            />
            <h4 className="text-center">Shravan R K</h4>
            <p className="text-center">View Profile</p>
          </div>
</div>
<div className="text-center">
  <button className="btn btn-success">View All -&gt;</button>
</div>        {/* <button className="btn  btn-success ">View All -&gt;</button> */}
      </div>
    </div>
  );
};

export default Ourteam;
