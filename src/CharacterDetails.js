import React from "react";
import { Component } from "react";


class CharacterDetails extends Component {
    constructor() {
        super()
        this.state = {
            films: ['Loading films...'],
        }
    }

    componentDidMount() {

        const filmsArray = [];
        
        const fetchFilms = this.props.films.map ( (filmrUrl, id) => fetch(filmrUrl)
        .then (res => res.json())
        .then ( dataFilm => {
            filmsArray.push(`${dataFilm.title}`)
            filmsArray.sort();
        } ))

        Promise.all(fetchFilms)
        .then(promisesArray => {this.setState( {films: filmsArray} )})
        .catch( (err) => console.log ( 'error:', err ) )
    }

    render() {

        return (
        <div className="container">

            <p className="heading">{this.props.personName}</p>
            <p className="subheading">Birth date: <span className="text">{this.props.date}</span></p>
            <p className="subheading">Gender: <span className="text">{this.props.gender}</span></p>
            <p className="subheading">Skin color: <span className="text">{this.props.skin}</span></p>
            <p className="subheading">Featured in:</p>

            {this.state.films.map ( (film, id) => (
                <div key={id}>
                    <p className="list over">{film} </p> 
                </div>      
            )
            )}  
    </div>
    )
    }
}

export default CharacterDetails;