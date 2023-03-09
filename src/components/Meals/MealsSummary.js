import classes from "./MealsSummary.module.css";
const MealsSummarry = () => {
  return (
    <section className={classes["summary-section"]}>
      <h2 className={classes["summary-title"]}>
        Delicous Food, Delivered To You
      </h2>
      <p className={classes["summary-content"]}>
        Choose your favorite meal from our broad selection of vailable meals and
        enjoy a delicious lunch or dinner at home
      </p>
      <p className={classes["summary-content"]}>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs
      </p>
    </section>
  );
};

export default MealsSummarry;
