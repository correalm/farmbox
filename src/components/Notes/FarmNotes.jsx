import "./cardsFarm.css";
import Card from "../Card/Card";

const FarmNotes = ({ notes }) => {
  if (!notes) return;
  const farmNotes = notes.results.filter((note) => {
    if (note.location_type === "Farm") {
      return note;
    }
    return;
  });

  return (
    <>
      <h2 className="content-title">Anotações da fazenda</h2>
      <div className="cardsFarm">
        {farmNotes.map((note, index) => (
          <Card key={index} note={note} />
        ))}
      </div>
    </>
  );
};

export default FarmNotes;
