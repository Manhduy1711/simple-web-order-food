import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const dummyMeals = [
  {
    id: "m1",
    name: "Bun dau",
    description: "Healthy...and green...",
    price: 10.99,
  },
  {
    id: "m2",
    name: "Pho bo",
    description: "Healthy...and green...",
    price: 10.99,
  },
  {
    id: "m3",
    name: "Bun cha",
    description: "Healthy...and green...",
    price: 10.99,
  },
  {
    id: "m4",
    name: "Banh xeo",
    description: "Healthy...and green...",
    price: 10.99,
  },
];

const AvailableMeals = () => {
  return (
    <section>
      <Card>
        <ul className={classes["list-meals"]}>
          {dummyMeals.map((meal) => (
            <MealItem
              key={meal.id}
              id={meal.id}
              name={meal.name}
              description={meal.description}
              price={meal.price}
            />
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
