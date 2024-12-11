import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EditGame = () => {
  const { id } = useParams(); // Extract the ID from the URL
  const navigate = useNavigate(); // Redirect after form submission

  // State variables for the game's data
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [price, setPrice] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  // Fetch game details on component mount
  useEffect(() => {
    axios.get(`http://localhost:4000/api/game/${id}`)
      .then((response) => {
        const game = response.data;
        setTitle(game.title);
        setGenre(game.genre);
        setPrice(game.price);
        setReleaseDate(game.releaseDate);
        setImageUrl(game.imageUrl);
      })
      .catch((error) => {
        console.error("Error fetching game data:", error);
      });
  }, [id]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedGame = { title, genre, price, releaseDate, imageUrl };
    axios.put(`http://localhost:4000/api/game/${id}`, updatedGame)
      .then(() => {
        alert("Game updated successfully!");
        navigate("/read"); // Redirect to the Browse page
      })
      .catch((error) => {
        console.error("Error updating game:", error);
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
            value={title}
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
