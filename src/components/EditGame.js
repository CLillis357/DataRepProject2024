import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditGame = () => {
  // Extract the `id` parameter from the URL
  const { id } = useParams();
  // Allows navigation to another page after form submission
  const navigate = useNavigate(); 

  // State variables to store game details
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [price, setPrice] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  // Fetch the game data from the backend when the component loads
  useEffect(() => {
    axios.get(`http://localhost:4000/api/game/${id}`) // Fetch game by ID
      .then((response) => {
        // Backend response should contain game details
        const game = response.data; 
        // Set state variables with the fetched game data
        setTitle(game.title);
        setGenre(game.genre);
        setPrice(game.price);
        setReleaseDate(game.releaseDate);
        setImageUrl(game.imageUrl);
      })
      .catch((error) => {
        console.error("Error fetching game:", error); // Log any errors in fetching the game
      });
      // Dependency array ensures this effect runs only when the `id` changes
  }, [id]); 

  // Function to handle form submission and update the game in the database
  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedGame = { title, genre, price, releaseDate, imageUrl };

    // Send a PUT request to update the game in the backend
    axios.put(`http://localhost:4000/api/game/${id}`, updatedGame)
      .then(() => {
        alert("Game updated successfully!");
        navigate("/read"); // Redirect to the Browse page after successful update
      })
      // Log errors
      .catch((error) => {
        console.error("Error updating game:", error);
      });
  };

  // Render the form with pre-filled game details
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


        <button type="submit" className="btn btn-primary w-100">
          Update Game
        </button>
      </form>
    </div>
  );
};

export default EditGame;
