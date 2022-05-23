import Plantations from "./Plantations";
import "./events.css";

const PlantationsNotes = ({ plantations, notes }) => {
  if (!(plantations && notes)) return;
  const Plantationsnotes = notes.results.filter((note) => {
    if (note.location_type === "Plantation") return note;
  });

  return (
    <div className="events">
      <h2>Eventos dos talhões</h2>
      {plantations.results.map((plantation, index) => {
        return (
          <Plantations
            key={plantation.id}
            plantation={plantation}
            notes={Plantationsnotes}
            index={index}
          />
        );
      })}
    </div>
  );
};

export default PlantationsNotes;
