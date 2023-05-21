import classes from "./steps.module.css";

function Steps({ step }) {
  // each step has its own classes assigned, achieved the half way full bar, by declaring the width of a span 50% from 0%, and full span by width 100% css
  return (
    <div className={classes.steps}>
      <span
        className={`${step === 0 && classes.full} ${step > 0 && classes.full} ${
          classes.round
        } `}
      >
        1
      </span>
      <div className={classes.grayline}>
        <span
          className={`${classes.primaryline} ${step === 0 && classes.halfw} ${
            step > 0 && classes.fullw
          } `}
        ></span>
      </div>
      <span
        className={`${step === 1 && classes.full} ${step > 1 && classes.full} ${
          classes.round
        } `}
      >
        2
      </span>
      <div className={classes.grayline}>
        <span
          className={`${classes.primaryline} ${step === 1 && classes.halfw} ${
            step > 1 && classes.fullw
          } `}
        ></span>
      </div>
      <span
        className={`${step === 2 && classes.full} ${step > 2 && classes.full} ${
          classes.round
        } `}
      >
        3
      </span>
      <div className={classes.grayline}>
        <span
          className={`${classes.primaryline} ${step === 2 && classes.halfw} ${
            step > 2 && classes.fullw
          } `}
        ></span>
      </div>
      <span className={`${step === 3 && classes.full}  ${classes.round}`}>
        4
      </span>
    </div>
  );
}

export default Steps;
