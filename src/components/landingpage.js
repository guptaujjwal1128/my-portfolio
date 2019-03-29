import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import logo from '../../node_modules/detect-port-alt/ujjwal.jpg';
class Landing extends Component {
  render() {
    return (
      <Grid className="landing-grid">
        <Cell col={12}>
          <img
            src={logo}
            alt="avatar"
            className="avatar-img"
          />

          <div className="banner-text">
            <h1>Software Developer</h1>

            <hr />

            <p>
              Web-Development | firebase | React-js | java | 
              | algorithms | C++ | data strutures | IOT | VLSI | VERILOG 
            </p>

          </div>
        </Cell>
      </Grid>
    );
  }
}

export default Landing;
