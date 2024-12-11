import Games from "./games";
import { useEffect, useState } from "react";
import axios from "axios";

const Browse = () => {
  const [games, setGames] = useState([]);

  // Fetch games data from the backend
  useEffect(() => {
    axios.get('http://localhost:4000/api/games')
      .then((response) => {
        console.log(response.data);
        setGames(response.data.games); // Ensure backend response structure matches this
      })
      .catch((error) => {
        console.error("Error fetching games:", error);
      });
  }, []);

  // Handle delete functionality
  const handleDelete = (id) => {
    axios.delete(`http://localhost:4000/api/game/${id}`)
      .then(() => {
        setGames(games.filter((game) => game._id !== id)); // Remove the deleted game from the state
      })
      .catch((error) => {
        console.error("Error deleting game:", error);
      });
  };

  return (
    <div className="container my-5">
      <h3 className="text-center mb-4">Available Games</h3>
      {/* Game cards grid */}
      <div className="row">
        {games.length > 0 ? (
          <Games myGames={games} onDelete={handleDelete} />
        ) : (
          <p className="text-center">No games available. Please add some!</p>
        )}
      </div>
    </div>
  );
};

export default Browse;
