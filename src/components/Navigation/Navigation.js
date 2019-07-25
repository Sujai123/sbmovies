import React,{ Component } from 'react';
import './Navigation.css'

class Navigation extends Component{
    render(){
        let mes
        if(this.props.route==="signin"||this.props.route==="Register")
        mes=<div className="nav">
            <button className="grow" onClick={this.props.Login}>SignIn</button>
            <button className="grow" onClick={this.props.Register}>Register</button>
            </div>
        else
        mes=<div className="nav">
            <button className="grow" onClick={this.props.Home}>Home</button>
            <button className="grow" onClick={this.props.Login}>SignOut</button>
            </div>
        return (<div>
            {mes}
        </div>)
    }
}

export default Navigation;