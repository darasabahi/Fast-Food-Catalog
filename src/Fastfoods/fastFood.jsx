import { useEffect, useState } from "react";
import axios from "../axios";
import Loding from "../Loding/loding";
import FastFoodList from "../FastFoodlist/fastFoodList";
const FastFood = () => {
  const [loading, setLoading] = useState(false);
  const [fastFoodItems, setFastFoods] = useState([]);

  const fetchData = async (categoryId = null) => {
    setLoading(true);
    const response = await axios.get(
      `/FastFood/list/${categoryId ? "?categoryId=" + categoryId : ""}`
    );
    setFastFoods(response.data);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const renderContent = () => {
    if (loading) {
      return <Loding theme="dark"></Loding>;
    } else {
      return <FastFoodList fastFoodItems={fastFoodItems}></FastFoodList>;
    }
  };
  return <div className="container mt-4">{renderContent()}</div>;
};
export default FastFood;
