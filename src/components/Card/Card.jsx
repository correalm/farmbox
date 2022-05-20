import "./card.css";

const Card = ({ note }) => {
  return (
    <div className="card">
      <h3>
        <span>
          <i className="fa-solid fa-pencil"></i>
        </span>
        Anotação
      </h3>

      <div className="image">
        {note.attachments.images.map((image) => (
          <img
            className="img"
            key={image.id}
            src={image.high_url}
            alt="imagem"
          />
        ))}
      </div>

      <div className="text">
        <p>{note.description}</p>
      </div>
    </div>
  );
};

export default Card;
