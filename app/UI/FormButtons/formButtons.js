import classes from "./formButtons.module.css";

function Buttons({ step, setStep, disabled }) {
  // constants to hide and show buttons
  const show = step !== 0 && step !== 3;
  const remove = step === 3;

  // step handlers
  function nextHandler() {
    setStep(step + 1);
  }
  function prevHandler() {
    setStep(step - 1);
  }

  return (
    <div className={classes.buttons}>
      <button
        onClick={prevHandler}
        className={`${classes.prev} ${show && classes.show} ${
          remove && classes.remove
        }`}
      >
        Previous Step
      </button>
      <button
        disabled={disabled}
        onClick={nextHandler}
        className={`${classes.next} ${remove && classes.remove}`}
      >
        Next Step
      </button>
    </div>
  );
}

export default Buttons;
