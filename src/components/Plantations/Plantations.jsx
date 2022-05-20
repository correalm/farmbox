import Card from "../Card/Card";
import { useRef } from "react";
import "./Plantations.css";

function Plantations({ element, notes, index }) {
  const farmRef = useRef();
  const arrowRef = useRef();

  const handleClick = (e) => {
    console.log(farmRef.current);
    farmRef.current.classList.toggle("events-hide");
    arrowRef.current.classList.toggle("events-container-arrow-rotate-arrow");
  };

  return (
    <div className="event">
      <div className="event event-header">
        <div className="events-header-farm-title">
          <div className="event-header-title">
            <h3> {element.name}</h3>
            <span className="ciclo">{element.cycle}° ciclo</span>
          </div>

          <p>
            <span>
              {element.variety.name} - {element.area}ha
            </span>{" "}
          </p>
          <div className="plantado">
            <p>{element.state === "active" ? "Plantado" : ""}</p>
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

        <div
          ref={arrowRef}
          onClick={handleClick}
          className={
            index === 0
              ? "events-container-arrow"
              : "events-container-arrow events-container-arrow-rotate-arrow"
          }
        >
          <i className="fa-solid fa-chevron-up"></i>
        </div>
      </div>
      {index === 0 ? (
        <div className="events" ref={farmRef}>
          {notes &&
            notes.map((note) => {
              if (note.location.id === element.id) {
                return <Card key={note.id} note={note} />;
              }
            })}
        </div>
      ) : (
        <div className="events events-hide" ref={farmRef}>
          {notes &&
            notes.map((note) => {
              if (note.location.id === element.id) {
                return <Card key={note.id} note={note} />;
              }
            })}
        </div>
      )}
    </div>
  );
}

export default Plantations;
