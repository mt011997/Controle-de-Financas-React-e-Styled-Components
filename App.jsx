import { useState } from "react";
import "./App.css";
import "./reset.css";
import { LandingPage } from "./components/landingPage";
import { Header } from "./components/Login/header";
import { Form } from "./components/Login/Form";
import { TotalMoney } from "./components/Login/TotalMoney";
import { Lista } from "./components/Login/Lista";
import { useEffect } from "react";

function App() {
  const itens = JSON.parse(localStorage.getItem("item"));
  const [auth, setAuth] = useState(false);
  const [card, setCard] = useState([...itens]);
  const [filtredCard, setFiltredCards] = useState([...itens]);

  const login = () => {
    setAuth(true);
  };
  const logout = () => {
    setAuth(false);
  };
  console.log(card);
  useEffect(() => {
    localStorage.setItem("item", JSON.stringify(card));
  }, [card]);

  useEffect(() => {
    const itens = JSON.parse(localStorage.getItem("item"));
    if (itens) {
      setCard(itens);
      setFiltredCards(itens);
    }
  }, []);

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
