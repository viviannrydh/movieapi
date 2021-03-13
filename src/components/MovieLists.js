import React from 'react'
import Movie from './Movie'
import style from './MovieAPI.module.css'

const MovieLists =(props)=> {
       let resultLayout;
       if(props.error){
           return (<h1>{props.error}</h1>)
       } else {
        resultLayout=props.movies.map((movie)=> (
                <Movie 
                key={Math.random()*10000}
                movie={movie}
                />))
       }
        return (
            <div className={style.movieLists}>
               {resultLayout}
            </div>
        )
}

export default MovieLists
