import classes from "./formButtons.module.css";

function Buttons({ step, setStep, disabled }) {
  // constants to hide and show buttons
  const showNext = step !== 0 && step !== 3;
  const removeNext = step === 3;

  const removePrev = step === 0;
  const showPrev = step > 0;
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
        className={`${classes.prev} ${removePrev && classes.remove}`}
      >
        Previous Step
      </button>
      <button
        disabled={disabled}
        onClick={nextHandler}
        className={`${classes.next} ${removeNext && classes.remove}`}
      >
        Next Step
      </button>
    </div>
  );
}

export default Buttons;
