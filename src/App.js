import React, { Component } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import MovieAPI from './components/MovieAPI'

class App extends Component {

  render() {
    return (
      <div>
          <Header />
          <MovieAPI />
          <Footer />  
      </div>
    )
  }
}

export default App

