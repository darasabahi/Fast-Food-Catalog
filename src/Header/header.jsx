import "./header.css";
import { HiShoppingCart } from "react-icons/hi";
import { useCartContext } from "../cartContext";
import { useState, useEffect } from "react";

const Header = () => {
  const { cart } = useCartContext();
  const [isVisible, setIsVisible] = useState(true);

  const listenToScroll = () => {
    let heightToShowFixedBar = 200;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToShowFixedBar) {
      isVisible && setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  const Cart = () => {
    return (
      <div className="cart-icon">
        <HiShoppingCart className="fs-3 ms-1 mt-1"></HiShoppingCart>
        <div className="total-cart-icon  ">{cart.length}</div>
      </div>
    );
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header className="bg-size-caver bg-position-center ">
      {isVisible ? (
        <Cart />
      ) : (
        <div className="fixed-bar ">
          <Cart />
        </div>
      )}
      <div className="container">
        <h2 className="text-start text-light text-uppercase">
          fast food catolog
        </h2>
      </div>
    </header>
  );
};

export default Header;
