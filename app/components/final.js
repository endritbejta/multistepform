import { useState } from "react";
import classes from "./final.module.css";

function Final({ pageInfo, formData }) {
  // managing some state to mimic the data beeing send to one a server by deactivating submit button
  const [disabled, setDisabled] = useState(false);

  // removing the button, optional
  const [removeButton, setRemoveButton] = useState(true);

  // submit handler, setTimeOut to mimic a fetch request
  function submitData() {
    setDisabled(true);
    console.log(disabled);
    setTimeout(() => {
      // this could be instead a post request sending data to server
      alert("Thank you for choosing us...");
      console.log(formData);
      // converting to json
      const jsonForm = JSON.stringify(formData);
      console.log(jsonForm);
      setRemoveButton(false);
    }, 1000);
  }
  return (
    <div className={classes.final}>
      {/* logo elements */}
      <div className={classes.logo}>
        <span className={classes.back1}></span>
        <span className={classes.back2}></span>
        <span className={classes.back3}></span>
        <span className={classes.back4}></span>
        <span className={classes.success}>&#10003;</span>
      </div>
      <h1>{pageInfo.title}</h1>
      <p>{pageInfo.description}</p>
      {removeButton && (
        <button
          className={classes.submit}
          disabled={disabled}
          onClick={submitData}
        >
          Submit
        </button>
      )}
    </div>
  );
}

export default Final;
