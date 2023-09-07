import "./App.css";
import CategoryList from "./CategoryList/categoryList";
import FastFood from "./Fastfoods/fastFood";
import Header from "./Header/header";
import { useState } from "react";
import SearchBar from "./Search/searchBar";
import useAxios from "./useAxios";
import { AppProvider } from "./context";

const App = () => {
  const [url, setUrl] = useState("/FastFood/list");
  const [type, setType] = useState("fastfoods");
  const [payload, setPayload] = useState(null);
  const [fastFoodItems, , loading] = useAxios({ url, type, payload });


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
    <AppProvider>
      <div className="wrapper bg-faded-dark">
        <Header></Header>
        <CategoryList filterItems={filterItems} fastFoodItems={fastFoodItems}>
          <SearchBar searchItem={searchItem} />
        </CategoryList>
        <FastFood loading={loading} fastFoodItems={fastFoodItems}></FastFood>
      </div>
    </AppProvider>
  );
};

export default App;
