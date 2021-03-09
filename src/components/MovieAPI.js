import React, { Component } from 'react';
import Form from './Form';
import MovieLists from './MovieLists';
import style from './MovieAPI.module.css'


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
        let   fetchData=[]
        const response=await fetch(`http://www.omdbapi.com/?apikey=2b591b5a&s=${input}`)
        const data=await response.json();
        console.log(data);
        fetchData=data.Search;
        //const totalResults=data.totalResults;
        //const pages=Math.ceil(totalResults/10);
        this.setState({
            movies:fetchData})
       
       /*for (let i=2; i<=pages; i++){
            const response=await fetch(`http://www.omdbapi.com/?apikey=2b591b5a&s=${input}&page=${i}`)
            const data=await response.json();
            fetchData.push(fetchData, data.Search);
            this.setState({
                movies:fetchData})
        }*/
    } catch(error){
           alert(error) 
    }}
    handleFilter=async (input,type)=>{
        try{
        const response=await fetch(`http://www.omdbapi.com/?apikey=2b591b5a&s=${input}&type=${type}`)
        console.log(response.Error)
        const data=await response.json();
        const filteredData=data.Search;
        this.setState({
            movies:filteredData})
        
    } catch(error){
           alert(error) 
    }} 

    componentDidMount=()=>{
        this.handleFetch('Fireman Sam','all')
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
                       handleSelectOptions={this.handleSelectOptions}
                       error={this.state.error}
                      
                   />
            </div>
        )
    }
        
    
}

export default MovieAPI

