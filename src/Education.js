import React from "react";
import "./Education.css";
import services from "./Data/Education.json";

const Education = () => {
  return (
    <div id="education" >
      <div className="container">
        <div className="row">
          <div className="col-sm-11 offset-sm-1">
            <h1>
              EDUCATION
            </h1>
            <div className="tab-content">
              <div className="tab-pane active" id="education">
                {services.map((item, i) => (
                  <div className="educationblock" key={i}>
                    <div className="row" key={i}>
                      <div className="col-sm-5">
                        <h5 data-aos="fade-right">
                          {item.coursename}
                        </h5>
                        <h5 data-aos="fade-right">
                          {item.courseyear}
                        </h5>
                      </div>
                      <div className="col-sm-7">
                        <div className="educationright">
                          <h5 data-aos="fade-left">{item.institute} </h5>
                          <h6 data-aos="fade-left"> {item.grade}</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
