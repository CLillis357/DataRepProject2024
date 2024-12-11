import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EditGame = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [price, setPrice] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:4000/api/games/${id}`)
      .then((response) => {
        const game = response.data;
        setTitle(game.title);
        setGenre(game.genre);
        setPrice(game.price);
        setReleaseDate(game.releaseDate);
        setImageUrl(game.imageUrl);
      })
      .catch((error) => {
        console.error("Error fetching game:", error);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedGame = { title, genre, price, releaseDate, imageUrl };
    axios.put(`http://localhost:4000/api/games/${id}`, updatedGame)
      .then(() => {
        alert("Game updated successfully!");
        navigate("/read");
      })
      .catch((error) => {
        console.error("Error updating game:", error);
      });
  };

  return (
    <div className="container my-5">
      <h3 className="text-center mb-4">Edit Game</h3>
      <form onSubmit={handleSubmit} className="shadow p-4 rounded bg-light">
        {/* Input fields same as AddGame */}
      </form>
    </div>
  );
};

export default EditGame;
