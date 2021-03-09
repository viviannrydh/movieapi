import React, { Component } from 'react'
import style from './MovieAPI.module.css'

class Movie extends Component {
    render() {
        return (
            
                <div className={style.movie}>
                    <article>
                        <h6>{this.props.movie.Title}</h6>
                        <span>{this.props.movie.Year}</span>
                        <p>{this.props.movie.Type}</p>  
                        <p>{this.props.movie.Director}</p>
                    </article>
                    <img src={this.props.movie.Poster} alt="movie" />
                </div>
        
        )
    }
}

export default Movie
