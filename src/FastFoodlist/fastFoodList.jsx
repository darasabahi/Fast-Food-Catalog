import FastFoodItem from "../FastFoodItem/fastFoodItem";

const FastFoodList = ({ fastFoodItems }) => {
  return (
    <div className="row">
      {fastFoodItems.map((fastfood) => (
        <div className="col-md-4 col-sm-6 mb-gridigutter" key={fastfood.id}>
          <FastFoodItem {...fastfood}></FastFoodItem>
        </div>
      ))}
    </div>
  );
};
export default FastFoodList;
