import { useEffect, useState } from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpsError, setHttpsError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://react-https-ecf22-default-rtdb.firebaseio.com/meal.json"
      );

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error("Something went wrong!!!");
      }

      const loadData = [];

      for (const key in responseData) {
        loadData.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }

      setMeals(loadData);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpsError(error.message);
    });
  }, []);

  let element;

  if (isLoading) {
    element = (
      <div className={classes["lds-facebook"]}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  } else if (httpsError) {
    element = <div className={classes["error"]}>{httpsError}</div>;
  } else {
    element = (
      <Card>
        <ul className={classes["list-meals"]}>
          {meals.map((meal) => (
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
    );
  }

  return <section>{element}</section>;
};

export default AvailableMeals;
