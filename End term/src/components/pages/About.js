import React from "react";
import "./About.css";
import aboutpic from "./aboutpage.jpg";
import { AiFillSignal,AiOutlinePoweroff,AiFillHeart,AiOutlineFileDone,AiTwotoneHighlight,AiFillSafetyCertificate,AiFillTool } from "react-icons/ai";
import {BsGlobe2} from "react-icons/bs";
// import { FaGlobeAmericas } from "react-icons/ai";
const About = () => {
  return (
    <>
 <div className="container-fluid text-center " >
  <h2>About</h2>
  <h4>What we offer</h4>
  <br/>
  <div className="row">
    <div className="col-sm-4">
      <span className="glyphicon glyphicon-off logo-small" style={{color: "#f4511e",fontSize: "50px"}}><AiOutlinePoweroff/></span>
      <h4>SPECIALITY</h4>
      <p>	Award winning, fine dining restaurants</p>
    </div>
    <div className="col-sm-4">
      <span className="glyphicon glyphicon-heart logo-small" style={{color: "#f4511e",fontSize: "50px"}}><AiFillHeart/></span>
      <h4>LOVE</h4>
      <h6>Pet Friendly</h6>
    </div>
    <div className="col-sm-4">
      <span className="glyphicon glyphicon-lock logo-small" style={{color: "#f4511e",fontSize: "50px"}}><AiOutlineFileDone/></span>
      <h4>JOB DONE</h4>
      <h6>Fully equipped business centre</h6>
    </div>
  </div>
   <br></br>
    <div className="row">
    <div className="col-sm-4">
      <span className="glyphicon glyphicon-leaf logo-small"><AiTwotoneHighlight/></span>
      <h4>GREEN</h4>
      <h6 style={{fontWeight:"bold"}}>Luxurious rooms & suites</h6>
    </div>
    <div className="col-sm-4">
      <span className="glyphicon glyphicon-certificate logo-small"><AiFillSafetyCertificate/></span>
      
      <h4>CERTIFIED</h4>
      <h6>	24-hour fitness centre</h6>
    </div>
    <div className="col-sm-4">
      <span className="glyphicon glyphicon-wrench logo-small"><AiFillTool/></span>
      <h4 >PARKING</h4>
      <h6>Terrace Parking</h6>
    </div>
  </div>
</div>
</>
  )

};

export default About;
