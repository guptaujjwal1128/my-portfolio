import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import calculator from '../../node_modules/detect-port-alt/calculator.jpg';
import tictactoe from '../../node_modules/detect-port-alt/tictactoe.png';
import othello from '../../node_modules/detect-port-alt/othello.jpeg';
import spaceship from '../../node_modules/detect-port-alt/spaceship.png';
import chattingapp from '../../node_modules/detect-port-alt/chattingapp.png';
import collaborator from '../../node_modules/detect-port-alt/collaborator.png';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(

        <Grid col={12} colclassName="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto',marginBottom:'30px'}}>
            <CardTitle style={{color: 'black', height: '176px', background:'{tictactoe} center / cover'}} >Calculator</CardTitle>
            <CardText>
              A simple calculator is made using html, css, javaScript.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
            </CardActions>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto',marginBottom:'30px'}}>
            <CardTitle style={{color: 'black', height: '176px', background:'{tictactoe} center / cover'}} >Tic Tac Toe</CardTitle>
            <CardText>
              A simple calculator is made using html, css, javaScript.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
            </CardActions>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto',marginBottom:'30px'}}>
            <CardTitle style={{color: 'black', height: '176px', background:'{tictactoe} center / cover'}} >SpaceShip</CardTitle>
            <CardText>
              A simple calculator is made using html, css, javaScript.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
            </CardActions>
          </Card>
          </Grid>
      )
    } else if(this.state.activeTab === 1) {
      return (
        <div><h1>This is Angular</h1></div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div><h1>This is VueJS</h1></div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div><h1>This is MongoDB</h1></div>
      )
    }

  }



  render() {
    return(
      <div className="projects">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Web Development</Tab>
          <Tab>Java</Tab>
          <Tab>React</Tab>
          <Tab>Verilog</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
