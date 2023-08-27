import FastFoodItem from "../FastFoodItem/fastFoodItem";

const FastFoodList = ({ fastFoodItems }) => {
  let delay = 0.1;
  return (
    <div className="row ">
      {fastFoodItems.map((fastfood) => {
        delay += 0.03;
        return (
          <div className="col-md-4 col-sm-6 mb-4 gridigutter" key={fastfood.id}>
            <FastFoodItem {...fastfood} delay={delay}></FastFoodItem>
          </div>
        );
      })}
    </div>
  );
};
export default FastFoodList;
