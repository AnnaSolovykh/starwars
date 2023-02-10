import Films from "./Films";
import React from "react";
import { Component } from "react";



class FetchFilms extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      loading: true
    }
  }


componentDidMount() {
  const url = 'https://swapi.dev/api/films/';

  fetch(url) 
  .then (this.setState ({loading : true}))
  .then (response => response.json())
  .then (films => this.setState ( {
    data: films.results, 
    loading : false} ))

}

render() {

  const { data, loading } = this.state;
  return (

    <div>
      {loading ? 
      <div className="loading-container">
        <div className="spinner"></div>
        <h1 className="loader">Loading...</h1>
      </div> :
      <Films data={data}/>}
    </div>
  
  );
}
}

export default FetchFilms;
