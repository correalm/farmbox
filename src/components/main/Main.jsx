import "./main.css";

import Aside from "../aside/Aside";
import Content from "../content/Content";

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
