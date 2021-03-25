import React from "react";
import ReactPlayer from "react-player";
import "../styles/DescriptionPage.css";
import Header from "./Header";
import DataMovies from "./DataMovies";

const DescriptionPage = (props) => {
  const movie = DataMovies.find((movie) => movie.id == props.match.params.Id);
  return (
    <div>
      <Header />
      <div className="description">
       <div>
          <img className="Poster" src={movie.image} />
          </div>
        <div>
          <span style={{ color: "red" }}>{movie.name}</span>
          <p> {movie.description}</p>
          <div className="trailer">
          <ReactPlayer className="player" url={movie.trailer} />
        </div>
        </div>
        </div>
       
      
    </div>
  );
};

export default DescriptionPage;
