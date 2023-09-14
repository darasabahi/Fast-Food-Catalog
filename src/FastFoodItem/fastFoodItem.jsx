import "./fastFoodItem.css";
import { HiShoppingCart } from "react-icons/hi";
import { useAppContext } from "../context";
import { useCartContext } from "../cartContext";

const FastFoodItem = ({
  id,
  name,
  price,
  ingredients,
  imageUrl,
  delay,
  cartRef,
}) => {
  const contex = useAppContext();
  const language = contex.language;
  const { addToCart } = useCartContext();

  const getPosition = (element) => {
    const x = element.getBoundingClientRect().x.toFixed(2);
    const y = element.getBoundingClientRect().y.toFixed(2);
    return [x, y];
  };

  const handleAddToCartButtonClick = (e) => {
    const [cartLeft, cartTop] = getPosition(cartRef.current);
    addToCart({ id, name, price, imageUrl });
    const parent =
      e.target.nodeName === "BUTTON"
        ? e.target.parentNode.parentNode
        : e.target.parentNode.parentNode.parentNode.parentNode;
    const img = parent.querySelector("img");
    const cloneImg = img?.cloneNode();
    const [cloneLeft, cloneTop] = getPosition(img);
    const left = cartLeft - cloneLeft;
    const top = cartTop - cloneTop;
    cloneImg.className = "card-img-top small-image";
    cloneImg.style.cssText = `--left:${left - 20}px ;--top:${top - 40}px`;
    parent.appendChild(cloneImg);
    setTimeout(() => {
      parent.removeChild(cloneImg);
    }, 2500);
  };

  return (
    <>
      <div
        className="card product-card h-100 border-0 shadow-sm pb-1 fade-in-horiz"
        style={{ animationDelay: delay + "s" }}
        dir={language === "fn" ? "rtl" : "ltr"}
      >
        <span className="badge badge-end badge-shadow bg-success fs-md fw-medium">
          {language === "fn" ? "قیمت:" : "Price:"} {price.toLocaleString()}
          {language === "fn" ? "تومان" : "$"}
        </span>
        <div className="card__placeholder">
          <img className="card-img-top" src={imageUrl} alt="fastfoodimg" />
        </div>
        <div className="card-body text-center pt-3 pb-4 d-flex flex-column">
          <h5 className="mb-2">{name}</h5>
          <div className="fs-ms fw-bold text-muted mb-3">{ingredients}</div>
          <button
            className="btn btn-outline-success btn-sm w-100 mt-auto fw-bold"
            onClick={handleAddToCartButtonClick}
          >
            <HiShoppingCart className="fs-5 ms-3"></HiShoppingCart>
            {language === "fn" ? "اضافه به سبد خرید" : "Add To Cart"}
          </button>
        </div>
      </div>
    </>
  );
};

export default FastFoodItem;
