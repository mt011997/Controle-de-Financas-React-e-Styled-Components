import illustration from "./../../img/illustration.svg";
import logo from "./../../img/logo.png";
import "./index.css";

export const LandingPage = ({ login }) => {
  return (
    <div className="container">
      <div className="left">
        <img src={logo} alt="Imagem Logo" />
        <h2>Centralize o controle das suas finanças</h2>
        <span>de forma rápida e segura</span>
        <button type="button" onClick={login}>
          Iniciar
        </button>
      </div>
      <div className="right">
        <img src={illustration} alt="ImgRepresentação" />
      </div>
    </div>
  );
};
