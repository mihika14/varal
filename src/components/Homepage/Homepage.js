import React from "react";
import Navbar from "../Navbar/Navbar";
import { Input, Button } from 'semantic-ui-react';
import './Homepage.css';
import image1 from './ILLUSTRATION.png';

const Homepage = () => {

  return (
    <div>
      < Navbar />
      <div className="rightcontent">
        <Input icon='search' placeholder='Search |Topic' />
      </div>
        <img className="illustration" src={image1} alt='Loading' />
      {/* <div className="leftcontent"> */}
      <>
        <h2 className="claim">Claim a Free Quote</h2>
        <h2 className="maincontent">Get started on fulfilling<br/>
          your Dubai or UAE <br/>
          dream.</h2>
        <h6 className="subcontent">UAE & Offshore Company</h6>
        <p className="extracontent">We provide you with information about UAE <br/>or
          Offshore Company Registration & help you<br/>
          setup your company with a bank account and<br/>
          visas</p>
        <Button.Group className="company">
          <Button>Start a Company</Button>
          <Button>Renew A company</Button>
        </Button.Group>
        </>
      <div className="middle">Watch the video about UAE or Offshore Company Registration</div>
      
    </div>
  )
}

export default Homepage;