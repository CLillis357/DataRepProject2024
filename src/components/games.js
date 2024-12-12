import GameItem from "./GameItem";

const Games = ({ myGames, onDelete }) => {
  return (
    <>
      {myGames.map((game) => (
        <div className="col-md-4 col-sm-6 mb-4" key={game._id}>
          <GameItem mygame={game} onDelete={onDelete} />
        </div>
      ))}
    </>
  );
};

export default Games;
