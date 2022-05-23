import { useQuery } from "react-query";
import FarmNotes from "../Notes/FarmNotes";
import PlantationsNotes from "../Plantations/PlantationsNotes";
import "./content.css";
import Load from "../load/Load";

const Content = () => {
  const { data: plantations, isLoading: isLoadingPlantations } = useQuery("plantations");
  const { data: notes, isLoading: isLoadingNotes } = useQuery("notes");

  if (isLoadingPlantations || isLoadingNotes) return <Load />;

  return (
    <div id="content">
      <FarmNotes notes={notes} />
      <PlantationsNotes plantations={plantations} notes={notes} />
    </div>
  );
};

export default Content;
