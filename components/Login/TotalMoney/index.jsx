import "./index.css";

export const TotalMoney = ({ card }) => {
  const totalPrice = card.reduce(getTotal, 0);
  function getTotal(total, item) {
    return item.type === "Entrada" ? total + +item.price : total - +item.price;
  }

  return (
    <div className="total">
      <span>Valor total: </span>
      <cite>{`R$ ${totalPrice.toFixed(2)}`.replace(".", ",")}</cite>
    </div>
  );
};
