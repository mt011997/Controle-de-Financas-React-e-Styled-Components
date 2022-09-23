import { useState } from "react";
import { Cards } from "../Cards";
import "./index.css";

export const Lista = ({ card, setCard, setFiltredCards, filtredCard }) => {
  const [btnAtivo, setBtnAtivo] = useState("Nada");

  const filtroEntradas = (nome) => {
    const filtro = card.filter((elem) => {
      return elem.type === "Entrada";
    });
    setFiltredCards(filtro);
    setBtnAtivo(nome);
  };

  const filtroDespesas = (nome) => {
    const filtro = card.filter((elem) => {
      return elem.type === "Despesas";
    });

    setFiltredCards(filtro);
    setBtnAtivo(nome);
  };

  const filtroTodos = (nome) => {
    setFiltredCards(card);
    setBtnAtivo(nome);
  };

  return (
    <div className="container-list">
      <div className="header-list">
        <h2>Resumo financeiro</h2>
        <div className="container-button">
          <button
            type="button"
            style={{
              backgroundColor: btnAtivo === "Todos" ? "#FD377E" : "#E9ECEF",
              color: btnAtivo === "Todos" ? "#E9ECEF" : "#343A40",
            }}
            onClick={() => filtroTodos("Todos")}
          >
            Todos
          </button>
          <button
            type="button"
            style={{
              backgroundColor: btnAtivo === "Entradas" ? "#FD377E" : "#E9ECEF",
              color: btnAtivo === "Entradas" ? "#E9ECEF" : "#343A40",
            }}
            onClick={() => filtroEntradas("Entradas")}
          >
            Entradas
          </button>
          <button
            type="button"
            style={{
              backgroundColor: btnAtivo === "Despesas" ? "#FD377E" : "#E9ECEF",
              color: btnAtivo === "Despesas" ? "#E9ECEF" : "#343A40",
            }}
            onClick={() => filtroDespesas("Despesas")}
          >
            Despesas
          </button>
        </div>
      </div>
      <Cards
        card={card}
        setCard={setCard}
        filtredCard={filtredCard}
        setFiltredCards={setFiltredCards}
      />
    </div>
  );
};
