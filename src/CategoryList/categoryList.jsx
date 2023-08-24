import { useEffect, useState } from "react";
import axios from "../axios";
import Loding from "../Loding/loding";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchcategories = async () => {
      const response = await axios.get("/FoodCategory/categories");
      setCategories(response.data);
      setLoading(false);
    };
    fetchcategories();
  }, []);

  const renderContent = () => {
    if (loading) {
      return <Loding></Loding>;
    } else {
      return (
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link" href="#">
              همه فست فودها
            </a>
          </li>
          {categories.map((food) => (
            <li key={food.id}>
              <a className="nav-link" href="#">
                {food.name}
              </a>
            </li>
          ))}
        </ul>
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
