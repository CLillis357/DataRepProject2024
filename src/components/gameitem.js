import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import axios from "axios";

// Component to display a single game item
const GameItem = ({ mygame, onDelete }) => {

  const [rating, setRating] = useState(mygame.rating || 0);
  // Update rating on the backend and update local state
  const handleRatingChange = (newRating) => {
    axios.put(`http://localhost:4000/api/game/rating/${mygame._id}`, { rating: newRating })
      .then(() => {
        setRating(newRating); // Update the local rating
      })
      .catch((error) => {
        console.error("Error updating rating:", error);
      });
  };

  //returns game cards in correct format
  return (
    <Card className="h-100 shadow-sm">
      <Card.Img
        variant="top"
        src={mygame.imageUrl || "https://via.placeholder.com/300x400"}
        alt={mygame.title}
        style={{ objectFit: "cover", height: "200px" }}
      />
      <Card.Body>
        <Card.Title>{mygame.title}</Card.Title>
        <Card.Subtitle className="mb-2">{mygame.genre}</Card.Subtitle>
        <Card.Text>
          <strong>Price:</strong> ${mygame.price}
          <br />
          <strong>Release Date:</strong> {mygame.releaseDate}
        </Card.Text>
        {/*Adds star rating to a game*/}
        <div>
          <strong>Rating:</strong> {rating}⭐
          <div className="rating-buttons">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                className={`btn ${star <= rating ? "btn-warning" : "btn-outline-warning"}`}
                onClick={() => handleRatingChange(star)}
              >
                {star}⭐
              </button>
            ))}
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <Link to={`/edit/${mygame._id}`} className="btn btn-edit">Edit</Link>
          <button className="btn btn-delete" onClick={() => onDelete(mygame._id)}>Delete</button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default GameItem;
