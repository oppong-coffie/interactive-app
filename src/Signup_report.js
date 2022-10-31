import React from "react";
import "./css/Signup_report.css";
import "./css/Forms.css";
import { FaCheck } from "react-icons/fa";

const Signup_report = () => {
  return (
    <div>
      <div className="form1">
        <div className="icon"><p className="mainicon"> {<FaCheck />} </p> </div><br></br>
        <div className="thankyou">THANK YOU!</div><br></br>
        <div className="lowertxt">We've added your card details</div><br></br>
        <div className="condv">
        <input className="continue" value='Continue' />
      </div>
      </div>
    </div>
  );
}; 

export default Signup_report;
