import { findAllByDisplayValue } from "@testing-library/react";
import React from "react";
import { Component } from "react";
import Modal from "react-responsive-modal";
//import { Link } from "react-router-dom";
//import { Button } from "semantic-ui-react";

class CharacterDetails extends Component {
    constructor() {
        super()
        this.state = {
            films: ['Loading films...'],
            info: [],
            open: false,
        }
    }

    componentDidMount() {

        const filmsArray = [];
        
        const fetchFilms = this.props.films.map ( (filmrUrl, id) => fetch(filmrUrl)
        .then (res => res.json())
        .then ( dataFilm => {
            filmsArray.push(`${dataFilm.title}`)
            filmsArray.sort();
            this.setState( { info: dataFilm} )
           // console.log(this.state.info)
        } ))

        Promise.all(fetchFilms)
        .then(promisesArray => {this.setState( {films: filmsArray} )})
        .catch( (err) => console.log ( 'error:', err ) )
    }

    onOpenModal = () => {
        this.setState( {open: true} )
    }

    onCloseModal = () => {
        this.setState( {open: findAllByDisplayValue} )
    }

    render() {
        const {open} = this.state;
        return (
        <div className="container">

            <p className="heading">{this.props.personName}</p>
            <p className="subheading">Birth date: <span className="text">{this.props.date}</span></p>
            <p className="subheading">Gender: <span className="text">{this.props.gender}</span></p>
            <p className="subheading">Skin color: <span className="text">{this.props.skin}</span></p>
            <p className="subheading">Featured in:</p>
           
            {this.state.films.map ( (film, id) => (
                <div key={id} >
                    <button onClick={this.onOpenModal} info={this.state.info} className="list-item text over">{film}</button>
                        <Modal className="modal" open={open} onClick={this.onCloseModal}>
                            <p>{this.state.info.title}</p>
                        </Modal>
                </div>
            ))}
            {/* <ul> {this.state.films.map ( (film, id) => (
                    <Link to="/FeaturedFilms"  info={this.state.info} className="over"> <li key={id} className="list-item text over">{film}</li></Link> 
            )
            )}
            </ul>   */}
    </div>
    )
    }
}

export default CharacterDetails;