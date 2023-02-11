import './App.css';
import FetchFilms from './FetchFilms';
import Characters from './FetchCharacters';

import {
    BrowserRouter as Router,
    Routes,
    Route, 
    Link } from "react-router-dom";
import StarrySky from './Stars';


function App () {

   
    return (
        <Router>
            <StarrySky/> 
        <header>
            <img src={process.env.PUBLIC_URL + "star.svg"} alt="Star" className="label"/>
            <img src={process.env.PUBLIC_URL + "wars.svg"} alt="Wars" className="label"/>
        </header> 

        <nav>
            <Link to="/" className='link'>FILMS</Link>
            <Link to="/FetchCharacters" className='link'>CHARACTERS </Link>

        </nav>
        
        <Routes>
            <Route path="/"  element={<FetchFilms/>}/>
            <Route path="/FetchCharacters" element={<Characters/>}/>
        </Routes>

        

    </Router>

    )

}

export default App;