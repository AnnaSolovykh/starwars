import Films from "./Films";
import React from "react";
import { Component } from "react";



class FetchFilms extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
    }
  }


componentDidMount() {
  const url = 'https://swapi.dev/api/films/';

  fetch(url) 
  .then (response => response.json())
  .then (films => this.setState ( {data: films.results} ))
  
}

render() {

  const { data } = this.state;
  return (
    <div >
      <Films data={data}/>

    </div>
  );
}
}

export default FetchFilms;
