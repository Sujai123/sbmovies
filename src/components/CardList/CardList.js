import React,{Component} from 'react'
import Card from '../Card/Card'
import MovieCard from '../MovieCard/MovieCard'

class CardList extends Component{
    constructor(props){
        super(props)
        this.state={
            indMovie:{},
            isMovie:false
        }
    }

    // temp=(()=>{
    // //     if(this.state.isMovie){
    // //     this.setState({
    // //         isMovie:false
    // //     })
    // // }
    // })()

    movieHandler=(id)=>{
        fetch('https://shielded-basin-93043.herokuapp.com/movie',{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                search:id
            })
        })
        .then(response=>response.json())
        .then(data=>{
            this.props.route()
            this.setState({
                indMovie:data,
                isMovie:true
            })
        })
        .catch(err=>console.log(err))
    }
    render(){
        let {Movies} = this.props
        let movie=[]
        if(typeof(Movies)!="string"){
        movie=Movies.map((user,i)=>{
            return <Card key={i} 
            title={user.Title} 
            year ={user.Year} 
            id={user.imdbID} 
            poster={user.Poster}
            MovieHandler={this.movieHandler}
            />
        })
    }
        if(this.props.oneMovie===false||this.state.isMovie===false){
        return(
            <div>
                {movie}
            </div>
        )
        }
        else if(this.props.oneMovie===true||this.state.isMovie===true){
            return(
                <div>
                    <MovieCard 
                    title ={this.state.indMovie.Title}
                    year ={this.state.indMovie.Year}
                    rated ={this.state.indMovie.Rated}
                    release ={this.state.indMovie.Released}
                    runtime ={this.state.indMovie.Runtime}
                    genre ={this.state.indMovie.Genre}
                    director={this.state.indMovie.Director}
                    writer ={this.state.indMovie.Writer}
                    actors ={this.state.indMovie.Actors}
                    plot ={this.state.indMovie.Plot}
                    language ={this.state.indMovie.Language}
                    country={this.state.indMovie.Country}
                    awards={this.state.indMovie.Awards}
                    poster={this.state.indMovie.Poster}
                    ratings={this.state.indMovie.Ratings}
                    metascore={this.state.indMovie.Metascore}
                    imdbrating={this.state.indMovie.imdbRating}
                    imdbvotes={this.state.indMovie.imdbVotes}
                    type={this.state.indMovie.Type}
                    dvd={this.state.indMovie.DVD}
                    boxoffice={this.state.indMovie.BoxOffice}
                    production={this.state.indMovie.Production}
                    website={this.state.indMovie.website}

                    />
                </div>
            )
        }
    }
}

export default CardList