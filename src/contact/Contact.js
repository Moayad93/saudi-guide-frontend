import React from "react";
import "./contact.scss";
export const Contact = () => {
  return (
    <div className="contact">
      <React.Fragment>
        <h2>Build By :</h2><br></br>
        <div className="us">
          <div className="one">
            <h3>Fahad </h3>
            <h3>
              
              <a href="https://www.linkedin.com/in/fahad-softwareengineer/">
                <i class="zmdi zmdi-linkedin-box"></i>
              </a>
              <a href="https://github.com/fahadaldawish">
              <i class="zmdi zmdi-github"></i>
              </a>
            </h3>
          </div>

          <div className="one">
            <h3>Moayad</h3>
            <h3>
              <a href="https://www.linkedin.com/in/moayad-alnuwaysir/">
                <i class="zmdi zmdi-linkedin-box"></i>
                </a>
              <a href="https://github.com/Moayad93">
              <i class="zmdi zmdi-github"></i>
              </a>
              

            </h3>
          </div>

          <div className="one">
            <h3>Saud </h3>
            <h3>
              <a href="https://www.linkedin.com/in/saud-webdev/">
                <i class="zmdi zmdi-linkedin-box"></i>
              </a>
              <a href="https://github.com/i23ud">
              <i class="zmdi zmdi-github"></i>
              </a>
            </h3>
          </div>
        </div>
      </React.Fragment>
    </div>
  );
};
export default Contact;
