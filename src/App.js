import "./App.css";
import CategoryList from "./CategoryList/categoryList";
import FastFood from "./Fastfoods/fastFood";
import Header from "./Header/header";
import { useState } from "react";
import SearchBar from "./Search/searchBar";
import useAxios from "./useAxios";
import { AppProvider } from "./context";
import { CartProvider } from "./cartContext";
import { useRef } from "react";

const App = () => {
  const [url, setUrl] = useState("/FastFood/list");
  const [type, setType] = useState("fastfoods");
  const [payload, setPayload] = useState(null);
  const [fastFoodItems, , loading] = useAxios({ url, type, payload });
  const cartRef = useRef();

  const filterItems = (categoryId) => {
    setType("filter");
    setPayload(categoryId);
    setUrl(`/FastFood/list/${categoryId ? "?categoryId=" + categoryId : ""}`);
  };

  const searchItem = async (term) => {
    setType("search");
    setPayload(term);
    setUrl(`/FastFood/search/${term ? "?term=" + term : ""}`);
  };

  return (
    <CartProvider>
      <AppProvider>
        <div className="wrapper bg-faded-dark">
          <Header cartRef={cartRef}></Header>
          <CategoryList filterItems={filterItems} fastFoodItems={fastFoodItems}>
            <SearchBar searchItem={searchItem} />
          </CategoryList>
          <FastFood
            loading={loading}
            fastFoodItems={fastFoodItems}
            cartRef={cartRef}
          ></FastFood>
        </div>
      </AppProvider>
    </CartProvider>
  );
};

export default App;
