import "./header.css";
import { HiShoppingCart } from "react-icons/hi";
import { useCartContext } from "../cartContext";
import { useState, useEffect } from "react";
import MiniCart from "../Cart/MiniCart/miniCart";

const Header = ({ cartRef }) => {
  const { quantity } = useCartContext();
  const [isVisible, setIsVisible] = useState(true);
  const [miniCartisVisible, setMiniCartIsVisible] = useState(false);
  const [quantityCart, setQuantityCart] = useState(0);
  const [cartActive, setCartActive] = useState("");
  let timerId = null;

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
  const handleMouseOver = () => {
    setMiniCartIsVisible(true);
    clearTimeout(timerId);
  };
  const handleMouseLeave = () => {
    timerId = setTimeout(() => {
      setMiniCartIsVisible(false);
    }, 200);
  };

  useEffect(() => {
    quantity !== 0 && setCartActive("active");
    setTimeout(() => {
      setQuantityCart(quantity);
      setCartActive("");
    }, 3000);
  }, [quantity]);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const Cart = () => {
    return (
      <div className={`cart-icon ${cartActive}`}>
        <HiShoppingCart
          className="fs-3 ms-1 mt-1"
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
        ></HiShoppingCart>
        <div className="total-cart-icon" ref={cartRef}>
          {quantityCart}
        </div>
        {miniCartisVisible && (
          <MiniCart
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
          />
        )}
      </div>
    );
  };

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
