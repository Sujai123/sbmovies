import React,{Component} from 'react';
import './Login.css'

class Login extends Component{
    render(){
        return(
            <div>
                
            <main className="pa4 black-80">
            <form className="measure center b--black ba br3 pa3 form shadow-3">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f4 fw6 ph0 mh0 align">Sign In</legend>
                <div className="mt3">
                    <label className="db fw6 lh-copy f6" for="email-address">Email</label>
                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
                </div>
                <div className="mv3">
                    <label className="db fw6 lh-copy f6" for="password">Password</label>
                    <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
                </div>
                </fieldset>
                <div className="align">
                <input 
                className="b ph3 align pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Sign in"
                onClick={this.props.Home} />
                </div>
                <div className="lh-copy mt3">
                <p className="f6 align link dim black db pointer" onClick={this.props.Register}>Sign up</p>
                </div>
            </form>
            </main>

            </div>
        )
    }
}

export default Login