import './App.css';
import FetchFilms from './FetchFilms';
import Characters from './FetchCharacters';


import Home from './Home';
import {

    BrowserRouter as Router,
  
    Routes,
  
    Route,
  
    Link
  
  } from "react-router-dom";

function App () {
    
    return (
        <Router>
<nav>
<Link to="/" className='link link-mobile'>HOME</Link>
<Link to="/FetchFilms" className='link '>Films</Link>
<Link to="/FetchCharacters" className='link'>Characters </Link>
</nav>
           
        

    <Routes>
        <Route path="/"  element={<Home />}/>
        <Route path="/FetchFilms"  element={<FetchFilms/>}/>
        <Route path="/FetchCharacters" element={<Characters />}/>
    </Routes>
    </Router>

    )
}

export default App;