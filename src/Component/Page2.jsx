import React from "react";
import Avatar from "@material-ui/core/Avatar";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import FlagIcon from "@material-ui/icons/Flag";
import PageLeft from "./PageLeft";
import PageRight from "./PageRight";

import "./Page2.css";
function Page2() {
  return (
    <div className="page2">
      <div className="top">
        <div className="top__left">
          <div className="top__left__left">
            <Avatar
              style={{ height: "50px", width: "50px" }}
              className="rightIcons"
            >
              H
            </Avatar>
          </div>
          <div className="top__left__right">
            <p style={{ marginLeft: "5px", fontWeight: "650" }}>Haninaburass</p>
            <div className="content">
              <LocationOnIcon style={{ color: "#f38c69" }} />
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: "bold",
                  marginTop: "10px",
                  color: "gray",
                }}
              >
                USA
              </p>
            </div>
          </div>
        </div>
        <div className="top__right">
          <FlagIcon />
          <p>Flag as Inappropiate</p>
        </div>
      </div>
      <hr style={{ borderWidth: "1px" }} />
      <div className="middle">
        <div className="midle__left">
          <PageLeft />
        </div>
        <div className="middle__right">
          <PageRight />
        </div>
      </div>
      <div className="bottom">
        <h4 style={{ color: "#f38c69" }}>Company</h4>
        <h5 style={{ color: "#fff" }}>Career</h5>
        <h5 style={{ color: "#fff" }}>Terms and Conditions</h5>
      </div>
    </div>
  );
}

export default Page2;
