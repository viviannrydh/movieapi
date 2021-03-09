import React, { Component } from 'react'
import style from './MovieAPI.module.css'

class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             userInput:''
        }
    }
    handleOnChange=(e)=>{
        this.setState({
            userInput:e.target.value})
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.handleFetch(this.state.userInput)
        console.log('Hello from form.js')
        e.target.value='all'
    }
    handleTypeSelect=(e)=>{
        if(e.target.value==='all'){
            this.props.handleFetch(this.state.userInput)
        } else {
            this.props.handleFilter(this.state.userInput,e.target.value)
        }
    }
    /*handleSelect=(e)=>{
        this.props.handleSelectOptions(e.target.value)
        console.log(e.target.value)
        console.log('hello from form')
    }*/
    
    render() {
        return (
            <div>
                <form action="" className={style.form} onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        value={this.state.userInput}
                        onChange={this.handleOnChange}
                       
                      />
                    <select name="shows" id="shows" onChange={this.handleTypeSelect} className={style.dropDown}>
                        <option value="all" defaultValue>All</option>
                        <option value="movie">Movie</option>
                        <option value="series">Series</option>
                        <option value="game">Game</option>
                    </select>
                </form>
            </div>
        )
    }
    
    
}

export default Form
