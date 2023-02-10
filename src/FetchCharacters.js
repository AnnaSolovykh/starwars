
import React from "react";
import { Component } from "react";
import Characters from "./Characters";


class FetchCharacters extends Component {
  constructor(props) {
    super(props)
    this.state = {
      peopleData: [],
    }
  }


componentDidMount() {
  const url = 'https://swapi.dev/api/people/';

  fetch(url) 
  .then (response => response.json())
  .then (people => this.setState ( {peopleData: people.results} ))
  
}

render() {
  const { peopleData } = this.state;
  return (
    <div className="App">
      <Characters peopleData={peopleData}/>

    </div>
  );
}
}

export default FetchCharacters;

