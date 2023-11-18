import "./miniCart.css";
import { useCartContext } from "../../cartContext";
const MiniCart = ({ onMouseOver, onMouseLeave }) => {
  const { cart, total, quantity } = useCartContext();
  return (
    <div
      className="mini-cart"
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      {cart.map((fastfood) => (
        <div className="fastfood" key={fastfood.id + "fastfood"}>
          <img
            key={fastfood.id + "img"}
            className="fastfood-img"
            src={fastfood.imageUrl}
            alt="fastfoodpic"
          />
          <div key={fastfood.id} className="fastfood">
            <div className="cart-item">
              <p key={fastfood.id + "name"}>{fastfood.name}</p>
              <span key={fastfood.id + "price"}>{fastfood.price}$</span>
            </div>
            <span key={fastfood.id + "number"}>{fastfood.number}</span>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total:</span>
        <span>{total.toLocaleString()}$</span>
        <span>{quantity}</span>
        <div className="bTNContent">
          <button className="viweCartBTN">Viwe Cart</button>
        </div>
      </div>
    </div>
  );
};
export default MiniCart;
