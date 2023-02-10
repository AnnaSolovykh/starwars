
import React from "react";
import { Component } from "react";
import Characters from "./Characters";


class FetchCharacters extends Component {
  constructor(props) {
    super(props)
    this.state = {
      peopleData: [],
      loading: true
    }
  }


componentDidMount() {
  const url = 'https://swapi.dev/api/people/';

  fetch(url) 
  .then (this.setState ({loading : true}))
  .then (response => response.json())
  .then (people => this.setState ( {
    peopleData: people.results, 
    loading : false} ))
  
}

render() {
  const { peopleData, loading } = this.state;
  return (
    <div>
      {loading ? 
      <div className="loading-container">
        <div className="spinner"></div>
        <h1 className="loader">Loading...</h1>
      </div> :
      <Characters peopleData={peopleData}/>
      }
    </div>
  );
}
}

export default FetchCharacters;

