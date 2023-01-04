import React from "react";
import Navbar from "../Navbar/Navbar";
import { Input , Button } from 'semantic-ui-react';
import './Homepage.css'
 
const Homepage = () => {

  return (
    <div>
      < Navbar />
      <div className="rightcontent">
        <Input icon='search' placeholder='Search |Topic' />     
      </div>
      <div className="image">
      <img src='.../Assets/ILLUSTRATION.png' alt='Loading' />
      </div>
      <div className="leftcontent">
        <h2 className="claim">Claim a Free Quote</h2>
        <h2 className="content">Get started on fulfilling
          your Dubai or UAE
          dream.</h2>
        <h6 className="subcontent">UAE & Offshore Company</h6>
        <p className="extracontent">We provide you with information about UAE or
          Offshore Company Registration & help you
          setup your company with a bank account and
          visas</p>
        <Button.Group >
          <Button >Start a Company</Button>
          <Button>Renew A company</Button>
        </Button.Group>
      </div>
      <div className="middle">Watch the video about UAE or Offshore Company Registration</div>
    </div>
  )
}

export default Homepage;