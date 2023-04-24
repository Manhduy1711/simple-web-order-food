import { useRef, useState } from "react";
import classes from "./CheckOut.module.css";

const isEmpty = (value) => value.trim() === "";
const isPhoneNumber = (value) => value.length >= 10;

const CheckOut = (props) => {
  const [fromInputsValidity, setFormInputsValidity] = useState({
    name: true,
    address: true,
    phone: true,
  });

  const enteredNameRef = useRef();
  const enteredAddressRef = useRef();
  const enteredPhoneRef = useRef();

  const formCheckOutOnSubmitHandler = (event) => {
    event.preventDefault();

    const enteredNameValue = enteredNameRef.current.value;
    const enteredAddressValue = enteredAddressRef.current.value;
    const enteredPhoneValue = enteredPhoneRef.current.value;

    const isEnterdNameValid = !isEmpty(enteredNameValue);
    const isEnteredAddressValid = !isEmpty(enteredAddressValue);
    const isEnteredPhoneValid = isPhoneNumber(enteredPhoneValue);

    setFormInputsValidity({
      name: isEnterdNameValid,
      address: isEnteredAddressValid,
      phone: isEnteredPhoneValid,
    });
    const isFormCheckOutValid =
      isEnterdNameValid && isEnteredAddressValid && isEnteredPhoneValid;

    if (!isFormCheckOutValid) {
      return;
    }

    console.log("Duy");

    props.onConfirm({
      name: enteredNameValue,
      address: enteredAddressValue,
      phone: enteredPhoneValue,
    });
  };
  return (
    <form onSubmit={formCheckOutOnSubmitHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" ref={enteredNameRef} />
        {!fromInputsValidity.name && <p>Name error</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor="address">Address</label>
        <input type="text" id="address" ref={enteredAddressRef} />
        {!fromInputsValidity.address && <p>Address error</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor="phone">Phone</label>
        <input type="text" id="name" ref={enteredPhoneRef} />
        {!fromInputsValidity.phone && <p>Phone error</p>}
      </div>
      <button type="button" onClick={props.onCancel}>
        Cancel
      </button>
      <button>Confirm</button>
    </form>
  );
};

export default CheckOut;
