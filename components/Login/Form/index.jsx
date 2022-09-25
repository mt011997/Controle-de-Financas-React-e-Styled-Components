import { useState } from "react";

import "./index.css";

export const Form = ({ setCard, setFiltredCards }) => {
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [id, setId] = useState(Math.random() * (99999999999999 - 1));

  const handleSubmit = (event) => {
    event.preventDefault();
    setCard((previousCard) => [
      ...previousCard,
      { description, price, type, id },
    ]);
    setFiltredCards((previousCard) => [
      ...previousCard,
      { description, price, type, id },
    ]);
    setId(id + Math.random() * (99999999999999 - 1) + 1);
    setPrice("");
    setType("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="description">
        <label>Descrição</label>

        <input
          type="text"
          placeholder="Digite aqui sua descrição"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          required
        />

        <span>Ex: Compra de roupas</span>
      </div>

      <div className="container-inputs">
        <div className="valor">
          <label>Valor</label>

          <input
            type="number"
            step=".01"
            value={price}
            placeholder="1"
            onChange={(event) => setPrice(event.target.value)}
            required
          />
        </div>

        <div className="type">
          <label>Tipo de valor</label>

          <select
            required
            value={type}
            onChange={(event) => setType(event.target.value)}
          >
            <option value="" selected disabled hidden>
              Escolha
            </option>
            <option value="Entrada">Entrada</option>
            <option value="Despesas">Despesas</option>
          </select>
        </div>
      </div>

      <button type="submit">Inserir valor</button>
    </form>
  );
};
