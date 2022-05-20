import Aside from "../aside/Aside";
import Content from "../content/Content";
import "./Main.css";

const Main = () => {
  return (
    <div className="center">
      <div className="wrapper">
        <Aside />
        <Content />
      </div>
    </div>
  );
};

export default Main;
