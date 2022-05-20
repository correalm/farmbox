import "./header.css";
import logo from "../../assets/logo-fb.png";

const Header = () => {
  return (
    <header>
      <h1>
        <span className="title">
          <i className="fa-solid fa-file-lines"></i>
        </span>
        Relatório de visita técnica
      </h1>
      <img src={logo} alt="logo-farm"></img>
    </header>
  );
};

export default Header;
