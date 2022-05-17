import { useState, useEffect, createContext } from "react";
import { useFetch } from "../hooks/useFetch";

export const Datacontext = createContext();

export const DatacontextProvider = ({ children }) => {
  const urlFarm =
    "https://justcors.com/tl_96d95b6/https://farmbox.cc/api/public/content_details.json?token=379238b5-705c-48bc-b8c9-27e26676b417";

  const urlPlantations =
    " https://justcors.com/tl_96d95b6/https://farmbox.cc/api/public/technical_visit_report/plantations.json?token=379238b5-705c-48bc-b8c9-27e26676b417";

  const urlRain =
    "https://justcors.com/tl_96d95b6/https://farmbox.cc/api/public/technical_visit_report/farm.json?token=379238b5-705c-48bc-b8c9-27e26676b417";

  const urlNotes =
    "https://justcors.com/tl_96d95b6/https://farmbox.cc/api/public/technical_visit_report/notes.json?token=379238b5-705c-48bc-b8c9-27e26676b417";

  const { data: farm } = useFetch(urlFarm);
  const { data: rain } = useFetch(urlRain);
  const { data: plantations } = useFetch(urlPlantations);
  const { data: notes } = useFetch(urlNotes);

  return (
    <Datacontext.Provider value={{ farm, rain, plantations, notes }}>
      {children}
    </Datacontext.Provider>
  );
};
