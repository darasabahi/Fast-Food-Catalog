import FastFoodItem from "../FastFoodItem/fastFoodItem";
import { useAppContext } from "../context";
import { useEffect, useState } from "react";

const FastFoodList = ({ fastFoodItems, cartRef, setPage }) => {
  let delay = 0.1;
  const contex = useAppContext();
  const language = contex.language;
  const [lastElement, setLastElement] = useState(null);

  useEffect(() => {
    if (lastElement) observerRef.observe(lastElement);

    return () => {
      if (lastElement) observerRef.unobserve(lastElement);
    };
  }, [lastElement]);

  const observerRef = new IntersectionObserver(([entery]) => {
    if (entery.isIntersecting) {
      setPage((currentPage) => currentPage + 1);
    }
  });

  return (
    <div className="row " dir={language === "fn" ? "rtl" : "ltr"}>
      {fastFoodItems.map((fastfood) => {
        delay += 0.03;
        return (
          <div
            className="col-md-4 col-sm-6 mb-4 gridigutter"
            key={fastfood.id}
            ref={setLastElement}
          >
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
