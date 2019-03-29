import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import profilepic from '../../node_modules/detect-port-alt/ujjwal.jpg';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                className="avatar-img-3"
                src={profilepic}
                alt="avatar"
                 />
            </div>

            <h2 style={{paddingTop: '1em'},{color:'#4B3A3A'}}>Ujjwal Gupta</h2>
            <h4 style={{color: 'grey'}}>Objective</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Willing to work as a key player in challenging and creative environment and to become a successful professional to work in an innovative and competitive world.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>1128 Sector 37 Faridabad</p>
            <h5>Phone</h5>
            <p>(+91) 8860043068</p>
            <h5>Email</h5>
            <p>guptaujjwal1128@gmail.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell> 
          <Cell className="resume-right-col" col={8}>
            <h3>Education</h3>


            <Education
              startYear={2013}
              endYear={2014}
              schoolName="D.A.V Public School Sec 37 Faridabad"
              schoolDescription="CBSE Affiliated.I Scored 82% "
               />

               <Education
                 startYear={2015}
                 endYear={2016}
                 schoolName="D.A.V Public School Sec 37 Faridabad"
                 schoolDescription="CBSE Affiliated.I Scored 82%"
                  />

                  <Education
                 startYear={2016}
                 endYear={2020}
                 schoolName="Bharati VidyaPeeth College Of Engineering"
                 schoolDescription="Affiliated to IP University.I'm doing btech in Electronics and Communication"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h3>Tranings</h3>

            <Experience
              startYear="June 2017"
              endYear="July 2017"
              duration="(6 weeks)"
              jobName="Core Java by Ducat"
              jobDescription="I have learned basic java and its different libraries like applet,threading and many more.I have leaned Oops concept and functional programming as well."
              />

              <Experience
                startYear="Jan 2018"
                endYear="April 2018"
                duration="(3 months)"
                jobName="Java and Data Structures by Coding Ninjas"
                jobDescription="I have learned how to solve problems efficiently and quickly.I have practiced a lot of problems on Recursion,Data Structures and many more.I have also made some projects using java GUI."
                />

                <Experience
                startYear="June 2018"
                endYear="August 2018"
                duration="(6 weeks)"
                jobName="Web Development by Coding Elements"
                jobDescription="I have learned how to create basic web pages using html,css,js.Mostly,I have used ReactJs,FireBase,MySql to create web applications.I have created many mobile friendly sites using BootStrap."
                />

              <hr style={{borderTop: '3px solid #e22947'}} />
              <h3>Skills</h3>
              <Skills
                skill="javascript"
                progress={80}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={60}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                    <Skills
                      skill="React"
                      progress={80}
                      />
                      <Skills
                      skill="Java"
                      progress={80}
                      />
                      <Skills
                      skill="Data Structures"
                      progress={80}
                      />
                      <Skills
                      skill="Verilog"
                      progress={80}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
