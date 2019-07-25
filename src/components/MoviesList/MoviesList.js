import React,{Component} from 'react'
import SearchBox from '../SearchBox/SearchBox'
import CardList from '../CardList/CardList'
import './MoviesList.css'

class MoviesList extends Component{
    constructor(){
        super()
        this.state={
            arr:[],
            search:"",
            route:false
        }
    }

    searchHandler=(value)=>{
        this.setState({
            arr:[],
            search:value
        },() => {
        fetch('https://shielded-basin-93043.herokuapp.com/',{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                search:this.state.search
            })
        })
        .then(response=>response.json())
        .then(data=>{
            this.setState({
                arr:data
            })
        })
        .catch(err=>console.log("error"))
        })
    }
    routeHandler=()=>{
        this.setState({
            route:false
        })
    }
    routeHandlertrue=()=>{
        this.setState({
            route:true
        })
    }
    render(){
        return(
            <div className="flex justify-center">
            <div className="content bg-dark-gray br3">
                <SearchBox  searchValue={this.searchHandler} route={this.routeHandler} />
                <div className="scroll">
                <CardList Movies={this.state.arr} route={this.routeHandlertrue} oneMovie={this.state.route} />
                </div>
            </div>
            </div>
        )
    }
}

export default MoviesList;