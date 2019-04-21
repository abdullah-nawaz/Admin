import React, { Component } from 'react';
// import Products from './components/LoginView';
import Nav from './components/Navbar';
import 'antd/dist/antd.css';
import {connect} from 'react-redux';
import {LoggedIn} from './actions/LoginSignup';
import {Route,Switch,BrowserRouter as Router} from 'react-router-dom';
import {ProtectedRoute} from  './components/ProtectedRoute/ProtectedRoute'
import driversList from './components/driversList'
import createDriverForm from "./components/createDriverForm";
import './components/carousel.css';
import {Carousel, Avatar} from "antd";

class App extends Component {
  componentDidMount() {
    console.log('AAAAAAAAAA', this.props.user);
    if (this.props.user) {
      this.props.dispatch(LoggedIn(this.props.user));
    }
  }
  render() {
    return (
      <Router>
        <div>
          <Nav/>
          <Switch>
            {this.props.user==="" && <Route exact path ='/' render={()=>(
              <div style={{textAlign:'center'}}>
                <Avatar style={{marginTop:'40px'}} size={200} src={require('./icons/admin.png')}/>
                <Carousel effect="fade" autoplay>
                  <div><h1>MEDICARE</h1></div>
                  <div><h1>ADMIN</h1></div>
                  <div><h1>PANEL</h1></div>
                </Carousel>
              </div>
            )} />}
            <ProtectedRoute exact path='/' component={driversList} user={this.props.user}/>
            <ProtectedRoute exact path='/addDriver' component={createDriverForm} user={this.props.user}/>
          </Switch>
        </div>
      </Router>
    );
  }
}
const mapStateToProps = (state)=>{
  return {
    user:state.user
  };
};
export default connect(mapStateToProps)(App);
