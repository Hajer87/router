import React, { useState } from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-ui-kit/css/mdb.min.css';
import { Row, Col} from 'react-bootstrap'

import Footer from "./Footer";
import Header from "./Header";
import MovieList from "./MovieList";
import AddMovie from "./AddMovie";
import  DataMovies  from "./DataMovies";
import SearchName from "./SearchName";

function Home() {
  //states
const [Movieslist, setMovieslist] = useState(DataMovies)
const [Keyword, setKeyword] = useState("")
const [Rating, setRating] = useState("")

console.log(DataMovies)

//Add Movie
const addMovie = (newMovie) => setMovieslist([...Movieslist, newMovie]);

  return (
    <div className="App">
      
     <header className='header'>
    
      <Header   setRating={setRating}/>
      <SearchName setKeyword={setKeyword}/>
      </header>
     
     <Row style={{ margin: '200'}}>
       <Col>
       <MovieList Movies={DataMovies} Keyword={Keyword} setSearchRating={Rating}/>
       </Col>
     </Row>
     <AddMovie addMovie={addMovie} />

      <Footer/> 
      
    </div>
  );
}

export default Home;
