import React from "react";
import "./Best.css";
import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/3.jpg";
import img4 from "../../assets/4.jpg";
import img5 from "../../assets/5.jpg";

const Best = () => {
  return (
    <>
      <div className="best">
        <h1>Find the best Properties</h1>
        <div className="all">
          <p>
            <span className="bold">All</span>
          </p>
          <p>Commercial</p>
          <p>Residential</p>
          <p>Recreational</p>
        </div>
        <div className="img-container">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
          <img src={img5} alt="" />
        </div>
        <button className="btn">View All</button>
      </div>
    </>
  );
};

export default Best;
