import Loding from "../Loding/loding";
import FastFoodList from "../FastFoodlist/fastFoodList";
import notFound from "../assets/images/404.png";

const FastFood = ({ loading, fastFoodItems }) => {
  const renderContent = () => {
    if (loading) {
      return <Loding theme="dark"></Loding>;
    }
    if (fastFoodItems.length === 0) {
      return (
        <>
          <div className="alert alert-warning text-center">
            برای کلید واژه فوق هیچ محصولی یافت نشد!
          </div>
          <img className="mx-auto mt-5 d-block" src={notFound} alt="404" />
        </>
      );
    } else {
      return <FastFoodList fastFoodItems={fastFoodItems}></FastFoodList>;
    }
  };
  return <div className="container mt-4">{renderContent()}</div>;
};
export default FastFood;
