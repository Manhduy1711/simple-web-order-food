import MealsSummarry from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";
import { Fragment } from "react";
const Meals = () => {
  return (
    <Fragment>
      <MealsSummarry />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;
