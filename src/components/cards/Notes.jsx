import React from "react";
import Card from "./Card";
import HeaderNotes from "../headerNotes/HeaderNotes";
import { useContext } from "react";
import { Datacontext } from "../../Context/Data";

const Notes = () => {
  const { notes, load, error } = useContext(Datacontext);
  const { plantations } = useContext(Datacontext);

  if (!notes) return null;
  if (!plantations) return null;
  console.log("Plantations ->", plantations);

  const Plantationsnotes = notes.results.filter((note) => {
    if (note.location_type === "Plantation") return note;
  });
  console.log(Plantationsnotes);

  return (
    <div>
      {plantations.results.map((plantation) => {
        return <HeaderNotes element={plantation} notes={Plantationsnotes} />;
      })}
    </div>
  );
};

export default Notes;
