import React,{Component} from 'react'
import './MovieCard.css'


class MovieCard extends Component{

    render(){
        const {title,year,rated,release,runtime,genre,director,writer,actors,plot,language,country,awards,poster,
                ratings,metascore,imdbrating,imdbvotes,type,dvd,boxoffice,production,website}=this.props
        
        return(
            <div className="Moviecard">
                <h3 className="green text1 f2">{title}</h3>
                <img src={poster} alt={title} />
                <p><span className="green">Year : </span>{year}</p>
                <p><span className="green">Rated : </span>{rated}</p>
                <p><span className="green">Released : </span>{release}</p>
                <p><span className="green">Runtime : </span>{runtime}</p>
                <p><span className="green">Genre : </span>{genre}</p>
                <p><span className="green">Director : </span>{director}</p>
                <p><span className="green">Writer : </span>{writer}</p>
                <p><span className="green">Actors : </span>{actors}</p>
                <p><span className="green">Plot : </span>{plot}</p>
                <p><span className="green">Language : </span>{language}</p>
                <p><span className="green">Country : </span>{country}</p>
                <p><span className="green">Awards : </span>{awards}</p>
                <p><span className="green">Ratings : </span></p>
                {ratings.map((data,i)=>{
                    return <div key={i}>
                    <p><span className="green"></span>{data.Source} : {data.Value}</p>    
                    </div>
                })}
                <p><span className="green">MetaScore : </span>{metascore}</p>
                <p><span className="green">imdbRating : </span>{imdbrating}</p>
                <p><span className="green">imdbVotes : </span>{imdbvotes}</p>
                <p><span className="green">Type : </span>{type}</p>
                <p><span className="green">DVD : </span>{dvd}</p>
                <p><span className="green">BoxOffice : </span>{boxoffice}</p>
                <p><span className="green">Production : </span>{production}</p>
                <p><span className="green">Website : </span>{website}</p>

            </div>
        )
    }
}

export default MovieCard