import { useQuery } from "react-query";
import "./aside.css";

const Aside = () => {
  const { isLoading: isLoadingFarm, data: farm } = useQuery("content_details");

  const { isLoading: isLoadingRainfall, data: rainfall } = useQuery("farm");

  function handlePress(e) {
    window.print();
  }

  if (isLoadingFarm) return null;
  if (isLoadingRainfall) return null;

  return (
    <aside>
      <div className="title">
        <h3>Fazenda</h3>
        <p>{farm.farm.name}</p>
        <p className="p-talhoes">{rainfall.plots} talhões</p>
      </div>
      <div className="info">
        <div className="date">
          <div className="visit">
            <h3>Data da visita</h3>
            <p className="data-da-visita">
              {farm.details.date.split("-").reverse().join("/")}
            </p>
          </div>
          <div className="safra">
            <h3>Safra</h3>
            <p>{farm.harvest.name}</p>
          </div>
        </div>
        <div className="wrapperAside">
          <div className="name">
            <div className="tecnico">
              <h3>Realizada por:</h3>
              <p>{farm.owner.name}</p>
            </div>
            <div className="init">
              <p>{farm.owner.initials}</p>
            </div>
          </div>
          <div className="pluv">
            <h3>Pluviometria</h3>
            <p>
              <span>
                <i className="fa-solid fa-droplet"></i>
              </span>
              {rainfall.rain_until_date}mm
            </p>
            <p className="acumulo">Acumulado na safra</p>
          </div>
        </div>
      </div>
      <div className="obs">
        <h3>Observações</h3>
        <p>{farm.details.observation}</p>
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
