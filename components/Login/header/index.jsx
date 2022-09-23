import logo2 from "./../../../img/logo2.png";
import "./index.css";

export const Header = ({ logout }) => {
  return (
    <div className="header">
      <img src={logo2} alt="Logo" />
      <button type="button" onClick={logout}>
        Inicio
      </button>
    </div>
  );
};
