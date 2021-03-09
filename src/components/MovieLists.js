import React from 'react'
import Movie from './Movie'
import style from './MovieAPI.module.css'
import Error from './Error'
const MovieLists =(props)=> {
     
       const resultLayout=props.movies.map((movie)=> (
            <Movie 
            key={Math.random()*10000}
            movie={movie}
            />))
        return (
            <div className={style.movieLists}>
               {resultLayout}
            </div>
        )
}

export default MovieLists
