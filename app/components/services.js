import { useState } from "react";
import Image from "next/image";

import Buttons from "../UI/FormButtons/formButtons";

import classes from "./services.module.css";

import development from "../UI/icons/development.svg";
import announcement from "../UI/icons/announcement1.svg";
import settings from "../UI/icons/settings.svg";
import blog from "../UI/icons/blog.svg";

function Services({ step, setStep, pageInfo, formData, setFormData }) {
  const [selectedOption, setSelectedOption] = useState(null);

  function onClickHandler(e) {
    setFormData({ ...formData, serviceKind: e.target.value });

    setSelectedOption(e.target.id);
  }

  console.log(selectedOption);
  const formIsValid = typeof selectedOption === "string";

  return (
    <>
      <div className={classes.services}>
        <div className={classes.header}>
          <h1>{pageInfo.title}</h1>
          <p>{pageInfo.description}</p>
        </div>
        <form className={classes.form}>
          <label
            className={`${classes.label} ${
              selectedOption === "development" ? classes.selected : ""
            }`}
            htmlFor="development"
            // onClick={(e) =>
            // setFormData({ ...formData, serviceKind: e.target.value })
            // }
            onClick={(e) => onClickHandler(e)}
          >
            <div className={classes.description}>
              <span className={classes.icon}>
                <Image src={development} width={40} height={40} />
              </span>
              Development
            </div>
            <input
              type="radio"
              id="development"
              name="development"
              value="Development"
              required
            />
          </label>
          <label
            className={`${classes.label} ${
              selectedOption === "webdesign" ? classes.selected : ""
            }`}
            htmlFor="webdesign"
            onClick={(e) => onClickHandler(e)}
          >
            <div className={classes.description}>
              <span className={classes.icon}>
                <Image src={blog} width={40} height={40} />
              </span>
              Web Design
            </div>
            <input
              type="radio"
              id="webdesign"
              name="webdesign"
              value="Web Design"
              required
            />
          </label>
          <label
            className={`${classes.label} ${
              selectedOption === "marketing" ? classes.selected : ""
            }`}
            htmlFor="marketing"
            onClick={(e) => onClickHandler(e)}
          >
            <div className={classes.description}>
              <span className={classes.icon}>
                <Image src={announcement} width={40} height={40} />
              </span>
              Marketing
            </div>
            <input
              type="radio"
              id="marketing"
              name="marketing"
              value="Marketing"
              required
            />
          </label>
          <label
            className={`${classes.label} ${
              selectedOption === "other" ? classes.selected : ""
            }`}
            htmlFor="other"
            onClick={(e) => onClickHandler(e)}
          >
            <div className={classes.description}>
              <div className={classes.icon}>
                <Image src={settings} width={50} height={50} />
              </div>
              Other
            </div>
            <input
              type="radio"
              id="other"
              name="other"
              value="Other"
              required
            />
          </label>
        </form>
      </div>
      <Buttons step={step} setStep={setStep} disabled={!formIsValid} />
    </>
  );
}

export default Services;
