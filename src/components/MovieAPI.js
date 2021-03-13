import React, { Component } from 'react';
import Form from './Form';
import MovieLists from './MovieLists';

class MovieAPI extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             movies:[],
             error:''
             
        }
    }
    
    handleFetch=async (input)=>{
      try{
        const response=await fetch(`http://www.omdbapi.com/?apikey=2b591b5a&s=${input}`)
        const data=await response.json();
        console.log(data)
        console.log(data.Response)
        console.log(data.Error)
            if(data.Response==="True"){
                this.setState({
                    movies:data.Search})
            } else{
             this.setState({
                error: data.Error
             })
             console.log('Hello')
             } 
        console.log(this.state.error)
        
    } catch(error){
          
   }}

    handleFilter=async (input,type)=>{
        try{
        const response=await fetch(`http://www.omdbapi.com/?apikey=2b591b5a&s=${input}&type=${type}`)
        const data=await response.json();
        console.log(data.Response)
        console.log(data.Error)
       
        if(data.Response==='True'){
                this.setState({
                    movies:data.Search})
        } else {
             this.setState({
                error: data.Error
             })}
        
        console.log(this.state.error)
    } catch(error){
          
    }} 

    componentDidMount=()=>{
        this.handleFetch('Mission Impossible','all')
    }
    
    render() {
        return (
            <div>
                   <Form 
                       movies={this.state.movies}
                       userInput={this.state.userInput}
                       handleFetch={this.handleFetch}
                       handleFilter={this.handleFilter}
                   />
                   <MovieLists
                       movies={this.state.movies}
                       error={this.state.error}
                   />
                
            </div>
        )
    }
        
    
}

export default MovieAPI

