import { useContext } from "react";
import { Datacontext } from "../../Context/Data";
import Card from "./Card";

import "./FarmNotes.css";

const FarmNotes = () => {
  const { notes, load, error } = useContext(Datacontext);

  if (!notes) return null;
  const farmNotes = notes.results.filter((note) => {
    if (note.location_type === "Farm") return note;
  });

  console.log(farmNotes);
  return (
    <div className="cardsFarm">
      {farmNotes.map((note) => (
        <Card note={note} />
      ))}
    </div>
  );
};

export default FarmNotes;
