import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import profilepic from '../../node_modules/detect-port-alt/ujjwal.jpg';
import facebook from '../../node_modules/detect-port-alt/facebook.jpg';
import linkedin from '../../node_modules/detect-port-alt/linkedin.png';
import github from '../../node_modules/detect-port-alt/github.png';

class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Ujjwal Gupta</h2>
            <img
            className="avatar-img-2"
              src={profilepic}
              alt="avatar"
              style={{height: '250px'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>I am persuing my engineering from BVCOE(IP University) in Electronics and Communication.I have learned coding both in IT as well as Enbedded.I am currently looking for a internship in related domain and enthuastic in learning new technologies.</p>

          </Cell>
        </Grid>
        <Grid className="contact-grid-2">
          <Cell col={3}>
            <div className="contact-list">
              <List>
  <ListItem>
    <ListItemContent icon="+91"><div className="contact-list">8860043068</div></ListItemContent>
  </ListItem>
  <ListItem>
    <ListItemContent icon="+91"><div className="contact-list">9350484835</div></ListItemContent>
  </ListItem>
</List>

            </div>
          </Cell>
        <Cell col={3}>
            <div className="contact-list">
              <a href="https://www.facebook.com/ujjwal.gupta.developer">
<img border="0"  src={facebook} width="150" height="110" />
</a>
            </div>
          </Cell>

          <Cell col={3}>
            <div className="contact-list">
                    <a href="https://www.linkedin.com/in/ujjwal-gupta-671588154/">
<img border="0"  src={linkedin} width="130" height="110" />
</a>
            </div>
          </Cell>

          <Cell col={3}>
            <div className="contact-list">
            <a href="https://github.com/guptaujjwal1128">
<img border="0"  src={github} width="130" height="110" />
</a>   
            </div>
            </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
