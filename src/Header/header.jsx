import "./header.css";
import { HiShoppingCart } from "react-icons/hi";
const Header = () => {
  return (
    <header className="bg-size-caver bg-position-center py-5">
      <div className="container">
        <h2 className="text-start text-light text-uppercase">
          fast food catolog
        </h2>
        <div className="cart-icon">
          <HiShoppingCart className="fs-3 ms-1 mt-1"></HiShoppingCart>
          <div className="total-cart-icon  ">0</div>
        </div>
      </div>
    </header>
  );
};
export default Header;
