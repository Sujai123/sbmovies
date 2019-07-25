import React from 'react'
import './Card.css'

class Card extends React.Component{
    render(){
        const {title,year,id,poster}=this.props
        return(
            <div style={{"marginTop":"30px"}}>
                <img src={poster} onClick={()=>this.props.MovieHandler(id)} alt={title} className="pointer scl" />
                <h2 className="green pointer tored" onClick={()=>this.props.MovieHandler(id)}>{title}</h2>
                <p>{year}</p>
            </div>
        )
    }
}


export default Card