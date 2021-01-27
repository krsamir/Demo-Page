import React from "react";
import { Link } from "react-router-dom";
import "./Page1.css";
import SearchIcon from "@material-ui/icons/Search";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import HelpIcon from "@material-ui/icons/Help";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
function Page1() {
  return (
    <div className="page1">
      <div className="header">
        <div className="header__left">
          <Link to="/account" style={{ textDecoration: "none" }}>
            <p className="logo">LOGO</p>
          </Link>
          <p className="words">Find Work</p>
          <p className="words">My Jobs</p>
          <p className="words">Reports</p>
          <p className="words">Messages</p>
        </div>
        <div className="header__right">
          <div className="header__right__left">
            <SearchIcon className="objects" />
            <ExpandMoreIcon className="objects" />
            <input
              type="text"
              placeholder="Find Jobs"
              className="objects textbox"
            />
          </div>
          <div className="header__right__right">
            <HelpIcon className="objects rightIcons" />
            <NotificationsIcon className="rightIcons" />
            <Avatar
              style={{ height: "30px", width: "30px" }}
              className="rightIcons"
            >
              H
            </Avatar>
            <p className="objects rightIcons">Haninaburas</p>
            <ExpandMoreIcon className="objects rightIcons" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page1;
