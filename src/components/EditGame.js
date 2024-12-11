import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EditGame = () => {
  const { id } = useParams(); // Extract game ID from URL
  const navigate = useNavigate(); // Redirect after successful update

  // State for game details
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [price, setPrice] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  // Fetch game details on component load
  useEffect(() => {
    // Backend route for fetching game by ID
    axios.get(`http://localhost:4000/api/game/${id}`) 
      .then((response) => {
        const game = response.data;
        // Populate the form fields with the fetched game data
        setTitle(game.title);
        setGenre(game.genre);
        setPrice(game.price);
        setReleaseDate(game.releaseDate);
        setImageUrl(game.imageUrl);
      })
      .catch((error) => {
        console.error("Error fetching game data:", error);
        alert("Failed to load game data.");
      });
  }, [id]);

  // Handle form submission for updating the game
  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedGame = { title, genre, price, releaseDate, imageUrl };
    // Backend route for updating the game
    axios.put(`http://localhost:4000/api/game/${id}`, updatedGame) 
      .then(() => {
        alert("Game updated successfully!");
        // Redirect to the Browse page
        navigate("/read"); 
      })
      .catch((error) => {
        console.error("Error updating game:", error);
        alert("Failed to update game.");
      });
  };

  return (
    <div className="container my-5">
      <h3 className="text-center mb-4">Edit Game</h3>
      <form onSubmit={handleSubmit} className="shadow p-4 rounded bg-light">
        <div className="mb-3">
          <label className="form-label">Game Title</label>
          <input
            type="text"
            className="form-control"
            value={title} // Pre-filled with the current game 
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Genre</label>
          <input
            type="text"
            className="form-control"
            value={genre} 
            onChange={(e) => setGenre(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            type="number"
            className="form-control"
            value={price} 
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Release Date</label>
          <input
            type="date"
            className="form-control"
            value={releaseDate} 
            onChange={(e) => setReleaseDate(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Image URL</label>
          <input
            type="text"
            className="form-control"
            value={imageUrl} 
            onChange={(e) => setImageUrl(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Update Game</button>
      </form>
    </div>
  );
};

export default EditGame;
