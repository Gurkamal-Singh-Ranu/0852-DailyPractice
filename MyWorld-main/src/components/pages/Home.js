import React, { useState, useEffect } from "react";
import tech from "./tech.jpeg";
import tech2 from "./tech2.jpeg";
import tech3 from "./tech3.jpeg";
import ds from './ds.jpeg'
import wd from './wd.jpeg'
import sales from './sales.jpeg'
const Home = () => {
  return (
    <React.Fragment>
      <h1 className="text-center text-danger text-capitalize my-4">Carrier In Tech Companies</h1>
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
    <h5 className="card-title">Cyber Security</h5>
    <p className="card-text">Cyber security is the practice of defending computers, servers, mobile devices, electronic systems, networks, and data from malicious attacks.</p>
    <a href="https://en.wikipedia.org/wiki/Computer_security" target="blank" className="btn btn-primary">Open</a>
  </div>
</div></div>
  <div className="col-sm"><div className="card">
    {/* <a href="https://en.wikipedia.org/wiki/Artificial_intelligence" target="blank"> */}
      <img src={tech2} className="card-img-top" alt="..." height="250px" />
    {/* </a> */}
  <div className="card-body">
    <h5 className="card-title">Artificial Intelligence</h5>
    <p className="card-text">Artificial intelligence (AI) is intelligence demonstrated by machines, as opposed to the natural intelligence displayed by animals and humans.</p>
    <a href="https://en.wikipedia.org/wiki/Artificial_intelligence" target="blank" className="btn btn-primary">Open</a>
  </div>
</div></div>
  <div className="col-sm"><div className="card">
  <img src={tech3} className="card-img-top" alt="..." height="250px" />
  <div className="card-body">
    <h5 className="card-title">Machine Learning</h5>
    <p className="card-text">Machine learning is a branch of artificial intelligence (AI) and computer science which focuses on the use of data and algorithms.</p>
    <a href="https://en.wikipedia.org/wiki/Machine_learning" target="blank" className="btn btn-primary">Open</a>
  </div>
</div></div>
</div><br/>
<div className="row">
<div className="col-sm"><div className="card">
  <img src={ds} className="card-img-top" alt="..." height="250px" />
  <div className="card-body">
    <h5 className="card-title">Data Science</h5>
    <p className="card-text">Data science is an interdisciplinary field that uses scientific methods, processes, algorithms and systems to extract or extrapolate knowledge and insights from noisy, structured and unstructured data,</p>
    <a href="https://en.wikipedia.org/wiki/Data_science" target="blank" className="btn btn-primary">Open</a>
  </div>
</div></div>
{/* </div> */}
{/* <div className="row"> */}
<div className="col-sm"><div className="card">
  <img src={wd} className="card-img-top" alt="..." height="250px" />
  <div className="card-body">
    <h5 className="card-title">Web Developement</h5>
    <p className="card-text">Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network).[</p>
    <a href="https://en.wikipedia.org/wiki/Web_development" target="blank" className="btn btn-primary">Open</a>
  </div>
</div></div>
<div className="col-sm"><div className="card">
  <img src={sales} className="card-img-top" alt="..." height="250px" />
  <div className="card-body">
    <h5 className="card-title">Sales and Marketing</h5>
    <p className="card-text">Sales are activities related to selling or the number of goods sold in a given targeted time period. The delivery of a service for a cost is also considered a sale.
</p>
    <a href="https://en.wikipedia.org/wiki/Sales" target="blank" className="btn btn-primary">Open</a>
  </div>
</div></div>
</div>
</div>
</React.Fragment>
  );
};

export default Home;
