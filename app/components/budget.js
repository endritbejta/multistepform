import { useState } from "react";

import Buttons from "../UI/FormButtons/formButtons";
import classes from "./budget.module.css";

function Budget({ step, setStep, pageInfo, formData, setFormData }) {
  // getting the selected radio button
  const [selectedOption, setSelectedOption] = useState(null);

  // handling the selection and updating the state to save the data
  function clickHandler(e) {
    // if the targeted element has value it updates the state and the selected option, when we click another element without value attribute doest do anything, just returns
    if (e.target.value) {
      setFormData({ ...formData, budgetType: e.target.id });
      setSelectedOption(e.target.id);
    } else return;
  }

  // form validity in function of the existence of the selected option
  const formIsValid = selectedOption;

  return (
    <>
      <div className={classes.budget}>
        <div className={classes.header}>
          <h1>{pageInfo.title}</h1>
          <p>{pageInfo.description}</p>
        </div>
        <form className={classes.form}>
          <label
            className={`${classes.label} ${
              selectedOption === "type1" && classes.active // adding a class whenever this label is active()
            }`}
            htmlFor="type1"
          >
            <input
              type="radio"
              id="type1"
              checked={selectedOption === "type1"} // checked state in function of the clicked option styled with :checked pseudoclass css
              name="type1"
              onChange={(e) => clickHandler(e)}
              required
            />
            $5000 - $10000
          </label>
          <label
            className={`${classes.label} ${
              selectedOption === "type2" && classes.active
            }`}
            htmlFor="type2"
          >
            <input
              type="radio"
              id="type2"
              onChange={(e) => clickHandler(e)}
              checked={selectedOption === "type2"} // checked state in function of the clicked option styled with :checked pseudoclass css
              name="type2"
            />
            $10000 - $20000
          </label>
          <label
            className={`${classes.label} ${
              selectedOption === "type3" && classes.active
            }`}
            htmlFor="type3"
          >
            <input
              type="radio"
              id="type3"
              onChange={(e) => clickHandler(e)}
              checked={selectedOption === "type3"} // checked state in function of the clicked option styled with :checked pseudoclass css
              name="type3"
            />
            $20000 - $50000
          </label>
          <label
            className={`${classes.label} ${
              selectedOption === "type4" && classes.active
            }`}
            htmlFor="type4"
          >
            <input
              type="radio"
              id="type4"
              onChange={(e) => clickHandler(e)}
              checked={selectedOption === "type4"} // checked state in function of the clicked option styled with :checked pseudoclass css
              name="type4"
            />
            $50000 +
          </label>
        </form>
      </div>
      <Buttons step={step} setStep={setStep} disabled={!formIsValid} />
    </>
  );
}

export default Budget;
