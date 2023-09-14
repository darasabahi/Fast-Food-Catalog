import FastFoodItem from "../FastFoodItem/fastFoodItem";
import { useAppContext } from "../context";

const FastFoodList = ({ fastFoodItems, cartRef }) => {
  let delay = 0.1;
  const contex = useAppContext();
  const language = contex.language;

  return (
    <div className="row " dir={language === "fn" ? "rtl" : "ltr"}>
      {fastFoodItems.map((fastfood) => {
        delay += 0.03;
        return (
          <div className="col-md-4 col-sm-6 mb-4 gridigutter" key={fastfood.id}>
            <FastFoodItem
              {...fastfood}
              delay={delay}
              cartRef={cartRef}
            ></FastFoodItem>
          </div>
        );
      })}
    </div>
  );
};
export default FastFoodList;
