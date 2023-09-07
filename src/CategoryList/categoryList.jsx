/* eslint-disable jsx-a11y/anchor-is-valid */
import Loding from "../Loding/loding";
import { useAppContext } from "../context";
import useAxios from "../useAxios";

const CategoryList = ({ filterItems, children }) => {
  const contex = useAppContext();
  const language = contex.language;
  const [categories, , loading] = useAxios({
    url: "/FoodCategory/categories",
    type: "categories",
  });

  const renderContent = () => {
    if (loading) {
      return <Loding></Loding>;
    } else {
      return (
        <div
          className="pe-3 w-100 d-flex align-items-center justify-content-between gap-5 "
          dir={language === "fn" ? "rtl" : "ltr"}
        >
          <ul className="nav">
            <li className="nav-item" onClick={() => filterItems()}>
              <a className="nav-link" href="#">
                {language === "fn" ? "همه فست فودها" : "All Fastfoods"}
              </a>
            </li>
            {categories.map((food) => (
              <li key={food.id} onClick={() => filterItems(food.id)}>
                <a className="nav-link" href="#">
                  {food.name}
                </a>
              </li>
            ))}
          </ul>
          {children}
        </div>
      );
    }
  };
  return (
    <nav className="container mt-n5">
      <div
        className="d-flex align-item-center bg-white rounded-3 shadow-lg py-4"
        style={{ height: "80px" }}
      >
        {renderContent()}
      </div>
    </nav>
  );
};

export default CategoryList;
