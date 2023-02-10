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



/*
import { useEffect, useState } from 'react';
import Films from './Films';
import { Dimmer, Loader } from 'semantic-ui-react';


function FetchFilms() {*/
  /*

  fetch("https://www.swapi.tech/api/planets/1")
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.error(err))


  */
 /*
  const [starwars, setStarwars] = useState([])
  const [loading, setLoading] = useState(true)

  const getInfo = async () => {
    const response = await fetch("https://swapi.dev/api/films/");
    const data = await response.json();
    console.log(data.results)
    setStarwars(data.results)
    setLoading(false)
  }

  useEffect (  () => {
    getInfo()
  }, []
  )

  return (
    
    <div className="App">
      {loading ? (
      <Dimmer active inverted> 
      <Loader inverted>Loading...</Loader>
      </Dimmer>) : ( 

        <div>
          {starwars.map ( (film, id) => (
        <Films key={id} filmsData={film}/>
      )
      )}
        </div>

      ) }


      
    
    </div>
  );
}

export default FetchFilms;*/
