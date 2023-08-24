import "./App.css";
import CategoryList from "./CategoryList/categoryList";
import FastFood from "./Fastfoods/fastFood";
import Header from "./Header/header";

function App() {
  return (
    <div className="wrapper bg-faded-dark">
      <Header></Header>
      <CategoryList></CategoryList>
      <FastFood></FastFood>
    </div>
  );
}

export default App;
