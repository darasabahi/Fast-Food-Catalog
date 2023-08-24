import Loding from "../Loding/loding";
import FastFoodList from "../FastFoodlist/fastFoodList";
const FastFood = ({ loading, fastFoodItems }) => {
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
