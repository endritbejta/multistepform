import { useState } from "react";
import Image from "next/image";

import Buttons from "../UI/FormButtons/formButtons";

import classes from "./services.module.css";

import development from "../UI/icons/development.svg";
import announcement from "../UI/icons/announcement1.svg";
import settings from "../UI/icons/settings.svg";
import blog from "../UI/icons/blog.svg";

function Services({ step, setStep, pageInfo, formData, setFormData }) {
  // state management for selected service
  const [selectedOption, setSelectedOption] = useState(formData.serviceKind);

  // handling the click, updating the data, setting the selectedOption
  function onClickHandler(e) {
    setFormData({ ...formData, serviceKind: e.target.value });
    setSelectedOption(e.target.value);
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
              selectedOption === "Development" ? classes.selected : "" // classes that persist the change of steps
            }`}
            htmlFor="development"
            onClick={(e) => onClickHandler(e)}
          >
            <div className={classes.description}>
              <span className={classes.icon}>
                <Image
                  src={development}
                  width={40}
                  height={40}
                  alt="developing screen"
                />
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
              selectedOption === "Web Design" ? classes.selected : ""
            }`}
            htmlFor="webdesign"
            onClick={(e) => onClickHandler(e)}
          >
            <div className={classes.description}>
              <span className={classes.icon}>
                <Image
                  src={blog}
                  width={40}
                  height={40}
                  alt="webdesign monitor"
                />
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
              selectedOption === "Marketing" ? classes.selected : ""
            }`}
            htmlFor="marketing"
            onClick={(e) => onClickHandler(e)}
          >
            <div className={classes.description}>
              <span className={classes.icon}>
                <Image
                  src={announcement}
                  width={40}
                  height={40}
                  alt="loudencer logo"
                />
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
              selectedOption === "Other" ? classes.selected : ""
            }`}
            htmlFor="other"
            onClick={(e) => onClickHandler(e)}
          >
            <div className={classes.description}>
              <div className={classes.icon}>
                <Image
                  src={settings}
                  width={50}
                  height={50}
                  alt="setting logo"
                />
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
