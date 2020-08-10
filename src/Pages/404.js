import React from "react";
import Menu from "../components/Menu";

const NotFound = () => (
  <div className="body_wrapper">
    <Menu hbtnClass="new_btn" />
    <section className="error_two_area">
      <div className="container flex">
        <div className="error_content_two text-center">
          <img src={require("../img/error.png")} alt="" />
          <h3>Error. We can’t find the page you’re looking for.</h3>
          <br></br>
          <a href="/" style={{ backgroundColor: " #E36387" }} className="about_btn btn_hover">
            Back to Home Page <i className="arrow_right"></i>
          </a>
        </div>
      </div>
    </section>
  </div>
);
export default NotFound;
