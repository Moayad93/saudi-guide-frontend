import React from "react";
import "./about.scss";
export const About = () => {
  return (
    <div>
      <React.Fragment>
        <div className="about">
        {/* <br/><br/><h1> Saudi Guide </h1><br/><br/> */}

          <h4>ABOUT THE PROJECT</h4>
          <p className="lead">
            The tourism sector is one of the most promising parts of the
            kingdomʼs diversification efforts, and its vision in 2030 plans. The
            government has identified several projects aimed at expanding and
            establishing the tourism sector along with training programs for
            operators and employees in the tourism sector.
          </p><br/><br/>

          <h4>TARGETED AUDIENCE</h4>
          <p className="lead">
            Locals and tourists who like to be updated and enjoy their time in
            Saudi.
          </p><br/><br/>

          <h4>THE PROBLEM</h4>
          <p className="lead">
            Many people donʼt know about the beautiful places and tours
            happening in Saudi Arabia, and get confused trying to search for
            tours and by all the many city guide applications.
          </p><br/><br/>

          <h4>UNDERSTANDING THE USERES</h4>
          <p className="lead">
            we conducted a research, by interviewing 8 potential users (4 locals
            and 3 tourists), asked them about their current and past experiences
            with the city guides apps and how they felt about it.
          </p>
        </div>
        ;
      </React.Fragment>
    </div>
  );
};
export default About;