import React, {
  Component
} from 'react';
// import logo from './logo.svg';
import Navbar from './components/Navbar';
import Home from './containers/Home'
import RouterContainer from './containers/RouterContainer'
import './App.css';
import {
  Route,
  Link,
  withRouter
} from 'react-router'

class App extends Component {

  state = {
    currentUser: {}
  }

  componentDidMount() {
    let token = localStorage.getItem('token')
    if(token) {
      fetch('http://dry-shelf-10302.herokuapp.com/api/v1/current_user', { headers: { Authorization: `Bearer ${token}` } })
      .then( r => r.json() )
      .then( data => this.setState({ currentUser: data }))
      this.props.history.push('/')
    } else {
      this.props.history.push('/')
    }
  }

  signupSubmitHandler = (e, userInfo) => {
    e.preventDefault()
    fetch("http://dry-shelf-10302.herokuapp.com/api/v1/users", {
        method: "POST",
        headers: {
          'Content-Type': "application/json",
          'Accept': "application/json"
        },
        body: JSON.stringify({
          user: userInfo
        })
      })
      .then(resp => resp.json())
      .then(userData => {
          console.log(userData)
          localStorage.setItem("token", userData.jwt);
          this.setState({
            currentUser: userData
          }, () => {
            console.log("This is what I'm getting after signing up: ", userData)
          });
      });
  };

  loginSubmitHandler = (e, userInfo) => {
    e.preventDefault()
    console.log('user info is', userInfo)
    fetch("http://dry-shelf-10302.herokuapp.com/api/v1/login", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          accepts: "application/json"
        },
        body: JSON.stringify({
          user: userInfo
        })
      })
      .then(resp => resp.json())
      .then(userData => {
        console.log('this is from the login', userData
        );
        if (userData.jwt) {
          localStorage.setItem('token', userData.jwt)
          this.setState({
            currentUser: userData
          }, () => console.log('app user login', this.state.currentUser.user))
        }
      });
  };

  handleLogout = () => {
    this.setState({
      currentUser: {}
    })
    localStorage.removeItem("token");
    this.props.history.push("/");
  }


  render() {
    console.log(this.state.currentUser.user)
    return (
      <div className="Ask-Tom center">
        <Navbar currentUser={this.state.currentUser} handleLogout={this.handleLogout} loginSubmitHandler={this.loginSubmitHandler} signupSubmitHandler={this.signupSubmitHandler} />
        {/*<Home signupSubmitHandler={this.signupSubmitHandler} loginSubmitHandler={this.loginSubmitHandler}/>*/}

        {this.state.currentUser.user ? <RouterContainer currentUser={this.state.currentUser} /> : <Route exact path="/" render={() => <Home signupSubmitHandler={this.props.signupSubmitHandler} loginSubmitHandler={this.props.loginSubmitHandler}/>}/> }  

      </div>
    );
  }
}

export default withRouter(App);
// <Home path="/"/>
