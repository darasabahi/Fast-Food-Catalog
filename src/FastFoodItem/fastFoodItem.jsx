import { HiShoppingCart } from "react-icons/hi";
import "./fastFoodItem.css";
import { useAppContext } from "../context";

const FastFoodItem = ({ name, price, ingredients, imageUrl, delay }) => {
  const contex = useAppContext();
  const language = contex.language;
  return (
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
        <button className="btn btn-outline-success btn-sm w-100 mt-auto fw-bold">
          <HiShoppingCart className="fs-5 ms-3"></HiShoppingCart>
          {language === "fn" ? "اضافه به سبد خرید" : "Add To Cart"}
        </button>
      </div>
    </div>
  );
};

export default FastFoodItem;
