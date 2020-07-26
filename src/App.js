import React, { Component } from 'react';
import './App.css';
import Search from './component/movie_search';
import MovieList from './component/movie_list';

export default class App extends Component{
  state = {
    keyword: 'man'
  }
  handleSearch = (keyword) => {
    this.setState({ keyword })
  }
  render(){
    const { keyword } = this.state;
    return (
    <React.Fragment>
      <div className='header'>React电影</div> 
      <Search  handleSearch={this.handleSearch} />
      <MovieList keyword={ keyword } />
     </React.Fragment>
  );
  }
  
}

