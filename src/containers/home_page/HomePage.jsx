import React from "react";
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";

import "./HomePage.css";
import SearchBar from "../../components/search_bar/SearchBar";

const HomePage = () => {
  return (
    <div className="home">
      <div className="home-header">
        {/* Header */}
        <div className="home-header-left">
          <Link to="/about"> About </Link>
          <Link to="/store"> Store </Link>
        </div>

        <div className="home-header-right">
          {/* 3 Links and an avatar */}
          <Link to="/gmail"> Gmail </Link>
          <Link to="/images"> Images </Link>
          <AppsIcon />
          <Avatar />
        </div>
      </div>
      <div className="home-body">
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt=""
        />
        <div className="home-body-input">
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
