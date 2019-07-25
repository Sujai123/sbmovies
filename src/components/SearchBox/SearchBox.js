import React,{Component} from 'react'
import './SearchBox.css'

class SearchBox extends Component{
    constructor(){
        super()
        this.state={
            search:""
        }
    }

    keypress=(event)=>{
        if(event.which===13&&this.state.search.length!==0){
        this.props.searchValue(this.state.search)
        this.props.route()
        }
    }

    movieNameChange = (event) => {
        this.setState({
            search:event.target.value
        })
    }

    movieClick=()=>{
        if(this.state.search.length!==0){
        this.props.searchValue(this.state.search)
        this.props.route()
        }
    }


    render(){
        return(
            <div>
                <p className="f2 measure green font" style={{"textShadow":"0 0 2px black"}}>Enter to Search : </p>
                <input 
                type="text" 
                className="text b--black pa1 bg-gray white dib br3"
                autoFocus
                onChange={this.movieNameChange}
                onKeyPress={this.keypress}
                />
                <input 
                type="button" 
                value="Search" 
                className="grow bg-green pa1 ba br3 bw1 b--black"
                onClick={this.movieClick}
                />
            </div>
        )
    }
}

export default SearchBox;