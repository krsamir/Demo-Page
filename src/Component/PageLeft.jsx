import React from "react";
import "./PageLeft.css";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
function PageLeft() {
  return (
    <div>
      <div className="contentLeft">
        <p className="title">View Profile</p>
        <p className="text">Loreum Epsium</p>
        <p className="text">Loreum Epsium</p>
        <div className="single">
          <p>All Work</p>
          <ChevronRightIcon />
        </div>
      </div>
    </div>
  );
}

export default PageLeft;
