import Loding from "../Loding/loding";
import FastFoodList from "../FastFoodlist/fastFoodList";
import notFound from "../assets/images/404.png";
import { useAppContext } from "../context";

const FastFood = ({
  loading,
  fastFoodItems,
  cartRef,
  setPage,
  observerLoading,
  type,
}) => {
  const context = useAppContext();
  const language = context.language;

  const renderContent = () => {
    if (loading) {
      return <Loding theme="dark"></Loding>;
    }
    if (fastFoodItems.length === 0 && type === "search") {
      return (
        <>
          <div className="alert alert-warning text-center">
            {language === "fn"
              ? "برای کلید واژه فوق هیچ محصولی یافت نشد"
              : "No fastfood were found for the above keyword"}
          </div>
          <img className="mx-auto mt-5 d-block" src={notFound} alt="404" />
        </>
      );
    } else {
      return (
        <>
          <FastFoodList
            fastFoodItems={fastFoodItems}
            cartRef={cartRef}
            setPage={setPage}
          ></FastFoodList>
          {observerLoading && (
            <div className="d-flex justify-content-center">
              <div className="spinner-border"></div>
            </div>
          )}
        </>
      );
    }
  };
  return <div className="container mt-4">{renderContent()}</div>;
};
export default FastFood;
