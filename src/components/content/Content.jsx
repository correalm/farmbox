import { useQuery } from "react-query";
import FarmNotes from "../Notes/FarmNotes";
import PlantationsNotes from "../Plantations/PlantationsNotes";
import "./content.css";
import Load from "../Load/Load";

const Content = () => {
  const { data: plantations, isLoading } = useQuery("plantations");
  const { data: notes, isLoading: isLoadingNotes } = useQuery("notes");

  if (isLoading || isLoadingNotes) return <Load />;

  return (
    <div id="content">
      <FarmNotes notes={notes} />
      <PlantationsNotes plantations={plantations} notes={notes} />
    </div>
  );
};

export default Content;
