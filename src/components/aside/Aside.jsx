import "./aside.css";

import { useContext } from "react";
import { Datacontext } from "../../Context/Data";

const Aside = () => {
  const { farm, rain, load, error } = useContext(Datacontext);

  function handlePress(e) {
    window.print();
  }

  if (!farm) return null;
  if (!rain) return null;
  return (
    <aside>
      <div className="title">
        <h3>Fazenda</h3>
        <p farm-name>{farm.farm.name}</p>
        <p className="p-talhoes">{rain.plots} talhões</p>
      </div>
      <div className="info">
        <div className="date">
          <div className="visit">
            <h3>Data da visita</h3>
            <p className="data-da-visita">{farm.details.date}</p>
          </div>
          <div className="safra">
            <h3>Safra</h3>
            <p safra>{farm.harvest.name}</p>
          </div>
        </div>
        <div className="wrapperAside">
          <div className="name">
            <div className="tecnico">
              <h3>Realizada por:</h3>
              <p nome-tecnico>{farm.owner.name}</p>
            </div>
            <div className="init">
              <p initials>{farm.owner.initials}</p>
            </div>
          </div>
          <div className="pluv">
            <h3>Pluviometria</h3>
            <p>
              <span>
                <i className="fa-solid fa-droplet"></i>
              </span>
              {rain.rain_until_date}mm
            </p>
            <p className="acumulo">Acumulado na safra</p>
          </div>
        </div>
      </div>
      <div className="obs">
        <h3>Observações</h3>
        <p obs-fazenda>{farm.details.observation}</p>
      </div>
      <div className="press">
        <button onClick={handlePress} className="btn">
          <span>
            <i className="fa-solid fa-print"></i>
          </span>
          IMPRIMIR
        </button>
      </div>
    </aside>
  );
};

export default Aside;
