import "./App.css";
import CategoryList from "./CategoryList/categoryList";
import FastFood from "./Fastfoods/fastFood";
import Header from "./Header/header";
import { useState, useEffect } from "react";
import axios from "./axios";

function App() {
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
  console.log(loading, fastFoodItems);
  const filterItems = (categoryId) => {
    fetchData(categoryId);
  };
  return (
    <div className="wrapper bg-faded-dark">
      <Header></Header>
      <CategoryList filterItems={filterItems}></CategoryList>
      <FastFood loading={loading} fastFoodItems={fastFoodItems}></FastFood>
    </div>
  );
}

export default App;
