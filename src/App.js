import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import { Link,NavLink } from 'react-router-dom';

class App extends Component {
  render() {
    return(
      <div className="demo-big-content">
    <Layout>
        <Header waterfall className="header-color" title={<NavLink activeStyle={{color:"silver"}} style={{fontSize:"34px",textDecoration: 'none', color: 'white'}} exact to="/">Ujjwal Gupta</NavLink>} scroll>
            <Navigation>
                <NavLink activeStyle={{color:"grey"}} style={{fontSize:"20px"}}to="/resume">Resume</NavLink>
                <NavLink activeStyle={{color:"grey"}} style={{fontSize:"20px"}}to="/projects">Projects</NavLink>
                <NavLink activeStyle={{color:"grey"}} style={{fontSize:"20px"}}to="/contact">Contact</NavLink>
            </Navigation>
        </Header>
        <Drawer title={<NavLink activeStyle={{color:"orange"}} style={{textDecoration: 'none', color: 'black'}} exact to="/">Ujjwal Gupta</NavLink>}>
            <Navigation>
              <NavLink activeStyle={{color:"black"}} style={{fontSize:"20px"}} to="/resume">Resume</NavLink>
              <NavLink activeStyle={{color:"black"}} style={{fontSize:"20px"}} to="/projects">Projects</NavLink>
              <NavLink activeStyle={{color:"black"}} style={{fontSize:"20px"}} to="/contact">Contact</NavLink>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>

    );
  }
}

export default App;
