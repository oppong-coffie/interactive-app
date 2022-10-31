import React, { useState } from "react";
import "./css/Signup.css";
import cardfront from "./img/bg-card-front.png";
import cardback from "./img/bg-card-back.png";
import { Container, Row, Col } from "react-bootstrap";
import Forms from "./Forms";
import Signup_report from "./Signup_report";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Signup = () => {
  const [errormsg, setErrormsg] = useState("");
  const [number, setNumber] = useState("0000 0000 0000 0000");
  const [name, setName] = useState("JANE APPLEASED");
  const [month, setMonth] = useState("00");
  const [year, setYear] = useState("00");
  const [cvcnumber, setCvcnumber] = useState("000");
  const numberChange = (e) => {
    setNumber(e.target.value);
    number == "000" ? setErrormsg("bad input format") : setErrormsg("good");
  };
  const namechange = (e) => {
    setName(e.target.value);
  };
  const monthchange = (e) => {
    setMonth(e.target.value);
  };
  const yearchange = (e) => {
    setYear(e.target.value);
  };
  const cvcchange = (e) => {
    setCvcnumber(e.target.value);
  };

  return (
    <div className="maincontainer">
      <div className="dark-bg">
        <div className="dark-bg-items">
          <div className="colored-card">
            <div className="maindown">
              <p className="code">{number}</p>
              <div className="down">
                <div className="first">{name}</div>
                <div className="second">
                  {month}/{year}
                </div>
              </div>
            </div>
          </div>

          <div className="white-card">
            <div className="num">{cvcnumber}</div>
          </div>
        </div>
      </div>

      {/*the form section starts here*/}
      <div className="white-bg">
        <BrowserRouter>
          <Routes>
            <Route
              path="signup/forms"
              element={
                <Forms
                  numberChange={numberChange}
                  namechange={namechange}
                  monthchange={monthchange}
                  yearchange={yearchange}
                  cvcchange={cvcchange}
                  error={errormsg}
                />
              }
            />
            <Route path="signup/report" element={<Signup_report />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default Signup;
