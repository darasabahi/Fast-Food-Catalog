import "./header.css";
import { HiShoppingCart } from "react-icons/hi";
import { useCartContext } from "../cartContext";

const Header = () => {
  const { cart } = useCartContext();
  return (
    <header className="bg-size-caver bg-position-center py-5">
      <div className="container">
        <h2 className="text-start text-light text-uppercase">
          fast food catolog
        </h2>
        <div className="cart-icon">
          <HiShoppingCart className="fs-3 ms-1 mt-1"></HiShoppingCart>
          <div className="total-cart-icon  ">{cart.length}</div>
        </div>
      </div>
    </header>
  );
};
export default Header;
