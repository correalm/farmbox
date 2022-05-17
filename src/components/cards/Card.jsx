import "./Card.css";

//  npm install --save-dev sass

const Card = ({ note }) => {
  console.log("NOTE NO COMP ->", note);
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
          <img className="img" key={image.id} src={image.high_url} />
        ))}
      </div>

      <div className="text">
        <p>{note.description}</p>
      </div>
    </div>
  );
};

export default Card;
