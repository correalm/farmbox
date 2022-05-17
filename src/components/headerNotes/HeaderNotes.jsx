import "./HeaderNotes.css";

import Card from "../cards/Card";
import { useRef } from "react";

function HeaderNotes({ element, notes }) {
  const farmRef = useRef();

  const handleClick = (e) => {
    console.log(farmRef.current);
    farmRef.current.classList.toggle("events-hide");
  };

  return (
    <div className="event">
      <div className="event event-header">
        <div className="events-header-farm-title">
          <div className="event-header-title">
            <h3 header-title> {element.name}</h3>
            <span className="ciclo">{element.cycle}° ciclo</span>
          </div>

          <p cultivar>
            <span size>
              {element.variety.name} - {element.area}ha
            </span>{" "}
          </p>
          <div className="plantado">
            <p plantado>{element.state == "active" ? "Plantado" : ""}</p>
          </div>
        </div>

        <div className="events-header-dates">
          <div className="dates-info">
            <p>Data de platio</p>
            <p>Emergência</p>
            <p>Colheita</p>
          </div>
          <div className="dates-date">
            <p>
              {element.date !== null
                ? element.date.split("-").reverse().join("/")
                : "Sem data"}
            </p>
            <p>
              {element.emergence_date
                ? element.emergence_date.split("-").reverse().join("/")
                : "Sem data"}
            </p>
            <p>
              {element.harvest_prediction_date !== null
                ? element.harvest_prediction_date.split("-").reverse().join("/")
                : "Sem data"}
            </p>
          </div>
        </div>

        <div onClick={handleClick} className="events-container-arrow">
          <i className="fa-solid fa-chevron-up"></i>
        </div>
      </div>
      <div className="farm-notes"></div>
      <div className="events" ref={farmRef}>
        {notes &&
          notes.map((note) => {
            if (note.location.id === element.id) {
              return <Card note={note} />;
            }
          })}
      </div>
    </div>
  );
}

export default HeaderNotes;
