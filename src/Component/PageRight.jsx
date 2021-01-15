import React from "react";
import image from "../image/image.jpg";
import "./PageRight.css";
function PageRight() {
  return (
    <div>
      <div className="main">
        <div className="part1">
          <div className="part1__top">
            <div className="part1__left">
              <h4>Plumbing job</h4>
            </div>
            <div className="part1__right">
              <h4>$10 / hr</h4>
            </div>
          </div>

          <div className="description_text">
            <p>
              your summary for profile. CAD files need to bee cleaned up and
              confirm update riser diagram to match architectural backgrounds.
              <p className="more">...More</p>
            </p>
          </div>
        </div>
        <div className="part2">
          <div className="title">
            <h2>Portfolio(2)</h2>
          </div>
          <div className="image">
            <img src={image} alt="" />
          </div>
        </div>
        <div className="part3">
          <div className="title">
            <h2>Skills</h2>
            <div className="pushbuttons">
              <p className="innerText">2D Design</p>
              <p className="innerText marleft">Engineering Drawing</p>
              <p className="innerText marleft">Mechanical Engineering</p>
              <p className="innerText marleft">2D Design</p>
              <p className="innerText marleft">Engineering Drawing</p>
              <p className="innerText marleft">2D Design</p>
              <p className="innerText marleft">Engineering Drawing</p>
            </div>
          </div>
        </div>
        <div className="part4">
          <div className="title">
            <h2>Employment History</h2>
          </div>
          <p style={{ fontSize: "15px", color: "eef3ef" }}>
            Plumbing Expert Company
          </p>
          <p style={{ fontSize: "15px", color: "eef3ef" }}>
            May 2020 - Present
          </p>
        </div>
      </div>
    </div>
  );
}

export default PageRight;
