import "./Content.css";
import FarmNotes from "../cards/FarmNotes";
import Notes from "../cards/Notes";

import React from "react";

const Content = () => {
  return (
    <div className="content">
      <h2>Anotações da fazenda</h2>

      <FarmNotes />
      <Notes />
    </div>
  );
};

export default Content;
