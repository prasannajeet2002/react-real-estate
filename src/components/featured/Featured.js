import React from "react";
import "./Featured.css";
import img1 from "../../assets/1.jpg";
import img3 from "../../assets/3.jpg";
import img4 from "../../assets/4.jpg";
import img5 from "../../assets/5.jpg";
import img6 from "../../assets/6.jpg";
import img7 from "../../assets/7.jpg";
import img2 from "../../assets/2.jpg";

const Featured = () => {
  return (
    <>
      <div className="featured">
        <h1 className="featured-text">top featured listings</h1>
        <p className="featured-text">selected listings by city , state & zip based on views</p>
        <div className="image-container">
          <img className="span-3 image-grid-row-2" src={img1} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
          <img src={img5} alt="" />
          <img src={img7} alt="" />
          <div className="span img-details">
            <div className="top">
              <h2>soubhagyanagar,angul</h2>
              <p>houses for sale</p>
              <p className="price">Rs.100000</p>
            </div>
            <div className="info-grid">
              <div>
                <div className="info">
                  <p className="bold">Bedrooms:</p>
                </div>
                <div className="info">
                  <p className="bold">Bathrooms:</p>
                </div>
              </div>
              <div>
                <div className="info">
                  <p className="bold">Square Feet:</p>
                </div>
                <div className="info">
                  <p className="bold">Payment:</p>
                </div>
              </div>
            </div>
          </div>
          <div className="span-3 right-img-details">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              dolorum vero mollitia, quisquam laboriosam, fugiat non nam nulla a
              earum dolorem asperiores eius. Voluptates ut natus voluptas porro
              eligendi in cumque ullam quo debitis.
            </p>
            <button className="btn">View Listing</button>
          </div>
        </div>

        {/* second section */}

         <div className="image-container">
          <img src={img3} alt="" />
          <img src={img2} alt="" />
          <img className="span-3 image-grid-row-2" src={img1} alt="" />
          <img src={img5} alt="" />
          <img src={img6} alt="" />
          <div className="span-3 right-img-details">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              dolorum vero mollitia, quisquam laboriosam, fugiat non nam nulla a
              earum dolorem asperiores eius. Voluptates ut natus voluptas porro
              eligendi in cumque ullam quo debitis.
            </p>
            <button className="btn">View Listing</button>
          </div>

          <div className="span img-details">
            <div className="top">
              <h2>soubhagyanagar,angul</h2>
              <p>houses for sale</p>
              <p className="price">Rs.100000</p>
            </div>
            <div className="info-grid">
              <div>
                <div className="info">
                  <p className="bold">Bedrooms:</p>
                </div>
                <div className="info">
                  <p className="bold">Bathrooms:</p>
                </div>
              </div>
              <div>
                <div className="info">
                  <p className="bold">Square Feet:</p>
                </div>
                <div className="info">
                  <p className="bold">Payment:</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
