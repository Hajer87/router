import React from "react";
import { Card } from "react-bootstrap";
import RatingStar from './RatingStars'

import '../styles/MovieCard.css'
import { Link } from "react-router-dom";

function Cards(props) {

  return (
    <div >
      <div>
       <Link to={`/movie/${props.Movie.id}`}>
        <Card  className="card">
          <Card.Img className='image' variant="top" src={props.Movie.image} />
          <Card.Body  >
            <Card.Title className='title'>{props.Movie.name}</Card.Title>
            <Card.Text  style={{ color: "black"}}>
            
            <strong className='rate'>{props.Movie.rating}/5 </strong>
            <RatingStar rating={props.Movie.rating}/>
            </Card.Text>
             </Card.Body>
        </Card>
        </Link>
       
      
      </div>
    </div>
  );
}

export default Cards;
