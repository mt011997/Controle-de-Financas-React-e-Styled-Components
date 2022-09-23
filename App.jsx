import { useState } from "react";
import "./App.css";
import "./reset.css";
import { LandingPage } from "./components/landingPage";
import { Header } from "./components/Login/header";
import { Form } from "./components/Login/Form";
import { TotalMoney } from "./components/Login/TotalMoney";
import { Lista } from "./components/Login/Lista";

function App() {
  const [auth, setAuth] = useState(false);
  const [card, setCard] = useState([]);
  const [filtredCard, setFiltredCards] = useState([]);

  const login = () => {
    setAuth(true);
  };
  const logout = () => {
    setAuth(false);
  };

  return (
    <div>
      {auth === false ? (
        <LandingPage login={login} />
      ) : (
        <div className="container__geral">
          <Header logout={logout} />
          <div className="container__main">
            <div className="container__inputs">
              <Form setCard={setCard} setFiltredCards={setFiltredCards} />
              <TotalMoney setCard={setCard} card={card} />
            </div>
            <Lista
              card={card}
              setCard={setCard}
              filtredCard={filtredCard}
              setFiltredCards={setFiltredCards}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
