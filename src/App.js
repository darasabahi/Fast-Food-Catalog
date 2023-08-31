import "./App.css";
import CategoryList from "./CategoryList/categoryList";
import FastFood from "./Fastfoods/fastFood";
import Header from "./Header/header";
import { useState, useEffect } from "react";
import axios from "./axios";
import SearchBar from "./Search/searchBar";
import FASTFOOD from "./FASTFOODS.const";

function App() {
  const [loading, setLoading] = useState(false);
  const [fastFoodItems, setFastFoods] = useState([]);

  const fetchData = async (categoryId = null) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `/FastFood/list/${categoryId ? "?categoryId=" + categoryId : ""}`
      );

      setFastFoods(response.data);
    } catch (error) {
      setFastFoods(FASTFOOD);
    }

    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const filterItems = (categoryId) => {
    fetchData(categoryId);
  };

  const searchItem = async (term) => {
    setLoading(true);
    const response = await axios.get(
      `/FastFood/search/${term ? "?term=" + term : ""}`
    );
    setFastFoods(response.data);
    setLoading(false);
  };

  return (
    <div className="wrapper bg-faded-dark">
      <Header></Header>
      <CategoryList filterItems={filterItems} fastFoodItems={fastFoodItems}>
        <SearchBar searchItem={searchItem} />
      </CategoryList>
      <FastFood loading={loading} fastFoodItems={fastFoodItems}></FastFood>
    </div>
  );
}

export default App;
