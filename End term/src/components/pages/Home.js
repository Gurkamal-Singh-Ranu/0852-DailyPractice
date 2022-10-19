import React, { useState, useEffect } from "react";
import "./home.css";
import tech from "./tech.jpeg";
import tech2 from "./tech2.jpeg";
import tech3 from "./tech3.jpeg";
import ds from './ds.jpeg'
import wd from './wd.jpeg'
import sales from './sales.jpeg'

const Home = () => {
  return (
    <React.Fragment>
      <div className="hello">
      <h1 className="text-center text-white  text-capitalize my-4">POPULAR DESTINATIONS</h1>
    <div className="container ">
    <div className="row my-1">
  <div className="col-sm">
    <div className="card" >
    {/* <div class="bg-image hover-zoom"> */}
    {/* <a href="https://en.wikipedia.org/wiki/Computer_security" target="blank"> */}
  <img src={tech} alt="..." height="250px" className="card-img-top" />
  {/* </a> */}
  {/* <a src="https://en.wikipedia.org/wiki/Computer_security"> */}
  {/* <div class="mask" style="background-color: rgba(57, 192, 237, 0.2)"></div> */}
  {/* </a> */}
  {/* </div> */}
  <div className="card-body">
    <h5 className="card-title">Kashmir</h5>
    <p className="card-text">Jammu & Kashmir, a piece of heaven on earth, is the 19th largest state in India and it is located mostly all in the Himalayan mountains.</p>
    <a href="https://en.wikipedia.org/wiki/Computer_security" target="blank" className="btn btn-primary">Open</a>
  </div>
</div></div>
  <div className="col-sm"><div className="card">
    {/* <a href="https://en.wikipedia.org/wiki/Artificial_intelligence" target="blank"> */}
      <img src={tech2} className="card-img-top" alt="..." height="250px" />
    {/* </a> */}
  <div className="card-body">
    <h5 className="card-title">Maldives</h5>
    <p className="card-text">A tropical haven of white sand beaches, the Maldives is located in the south of Sri Lanka and is ideal for an adventure, honeymoon, or leisure holiday.</p>
    <a href="https://en.wikipedia.org/wiki/Artificial_intelligence" target="blank" className="btn btn-primary">Open</a>
  </div>
</div></div>
  <div className="col-sm"><div className="card">
  <img src={tech3} className="card-img-top" alt="..." height="250px" />
  <div className="card-body">
    <h5 className="card-title">Goa</h5>
    <p className="card-text">Lying on the western coast, Goa is India's smallest state, known for its endless beaches, stellar nightlife, eclectic seafood, world-heritage listed architecture.</p>
    <a href="https://en.wikipedia.org/wiki/Machine_learning" target="blank" className="btn btn-primary">Open</a>
  </div>
</div></div>
</div><br/>
<div className="row">
<div className="col-sm"><div className="card">
  <img src={ds} className="card-img-top" alt="..." height="250px" />
  <div className="card-body">
    <h5 className="card-title">Rajasthan</h5>
    <p className="card-text">Royal, Regal, Revered – Rajasthan. A magical universe of colour coded kingdoms. A place where little red turbans and green saris dance to classical music</p>
    <a href="https://en.wikipedia.org/wiki/Data_science" target="blank" className="btn btn-primary">Open</a>
  </div>
</div></div>
{/* </div> */}
{/* <div className="row"> */}
<div className="col-sm"><div className="card">
  <img src={wd} className="card-img-top" alt="..." height="250px" />
  <div className="card-body">
    <h5 className="card-title">Kolkata</h5>
    <p className="card-text">Kolkata, India's second biggest city, is a perpetually ongoing festival of human existence, concurrently luxurious and squalid, refined and frantic.</p>
    <a href="https://en.wikipedia.org/wiki/Web_development" target="blank" className="btn btn-primary">Open</a>
  </div>
</div></div>
<div className="col-sm"><div className="card yo">
  <img src={sales} className="card-img-top" alt="..." height="250px" />
  <div className="card-body">
    <h5 className="card-title">Amritsar</h5>
    <p className="card-text">Home of the glorious Golden Temple, the iconic city of Amritsar, portrays the heroic character of Punjab.Amritsar is colloquially known as Ambarsar.
</p>
    <a href="https://en.wikipedia.org/wiki/Sales" target="blank" className="btn btn-primary">Open</a>
  </div>
</div></div>
</div>
</div>
</div>
</React.Fragment>
  );
};

export default Home;
