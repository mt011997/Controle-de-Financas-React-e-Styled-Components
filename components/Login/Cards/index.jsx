import "./index.css";
import trash from "./../../../img/trash.png";

export const Cards = ({ card, setCard, filtredCard, setFiltredCards }) => {
  const removeCard = (cardToRemove) => {
    const newCards = card.filter((element) => element.id !== cardToRemove);
    const newCardsFilter = filtredCard.filter(
      (element) => element.id !== cardToRemove
    );
    setCard(newCards);
    setFiltredCards(newCardsFilter);
  };

  return (
    <ul>
      {(filtredCard ? filtredCard : card).map((cards, index) => {
        return (
          <>
            <li key={index}>
              <div className="cards-left">
                <h2>{cards.description}</h2>
                <span className="type">{cards.type}</span>
              </div>

              <div className="cards-right">
                <span className="price">
                  {`R$ ${parseFloat(cards.price).toFixed(2)}`.replace(".", ",")}
                </span>
                <img
                  onClick={() => removeCard(cards.id)}
                  src={trash}
                  alt="Lixeira"
                />
              </div>
            </li>
          </>
        );
      })}
    </ul>
  );
};
