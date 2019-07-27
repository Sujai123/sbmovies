import React from 'react';
import MoviesList from './components/MoviesList/MoviesList'
import Navigation from './components/Navigation/Navigation' 
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import 'tachyons';
import ReactPlayer from 'react-player'
import './App.css'
import Logo from './logo.png'
import Tilt from 'react-tilt'

class App extends React.Component {
  constructor(){
    super()
    this.state={
      route:"Home"
    }
  }

  HomeChange=()=>{
    this.setState({
      route:"Home"
    })
  }

  RegisterChange=()=>{
    this.setState({
      route:"Register"
    })
  }

  LoginChange=()=>{
    this.setState({
      route:"signin"
    })
  }

  render(){
    let messsage=<div>
      <MoviesList />
      </div>;

    if(this.state.route==="signin")
    messsage=<div><Login Home={this.HomeChange} Register={this.RegisterChange} /></div>
    if(this.state.route==="Register")
    messsage=<div><Register Home={this.HomeChange}/></div>
    if(this.state.route==="Home")
    messsage=<div><MoviesList /></div>
    return (
      <div>
        <div className="title">
        <Tilt className="Tilt" options={{ max : 40 }} style={{ height: 250, width: 250 }} >
        <div className="Tilt-inner"> <img src={Logo} alt="logo" className="logo" title="SB Movies" /> </div>
        </Tilt>
          <h1>SB Movies</h1>
          </div>
      <Navigation route={this.state.route} Login={this.LoginChange} Register={this.RegisterChange} Home={this.HomeChange}/>
      {messsage}
      {/* <Login /> */}
      
      </div>
    );
  }
}

export default App;
