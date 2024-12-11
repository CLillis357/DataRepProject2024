import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

const GameItem = ({ mygame, onDelete }) => {
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
        <div className="d-flex justify-content-between">
          <Link to={`/edit/${mygame._id}`} className="btn btn-edit">Edit</Link>
          <button className="btn btn-delete" onClick={() => onDelete(mygame._id)}>Delete</button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default GameItem;
