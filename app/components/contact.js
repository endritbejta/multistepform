// import { useState } from "react";
import Image from "next/image";
import { useState } from "react";

import Buttons from "../UI/FormButtons/formButtons";

import classes from "./contact.module.css";
import phone from "../UI/icons/phone2.svg";
import user from "../UI/icons/user.svg";
import envelope from "../UI/icons/envelope.svg";
import building from "../UI/icons/building.svg";

function Contact({ step, setStep, pageInfo, formData, setFormData }) {
  /// state to manage whether the input was touched, in order to add the error class
  const [nameIsTouched, setNameIsTouched] = useState(false);
  const [emailIsTouched, setEmailIsTouched] = useState(false);
  const [phoneIsTouched, setPhoneIsTouched] = useState(false);
  const [companyIsTouched, setCompanyIsTouched] = useState(false);

  // some basic validation
  const nameIsValid = formData.name.trim() !== "";
  const emailIsValid = formData.email.includes("@");
  const phoneIsValid = formData.phone.length > 5;
  const companyIsValid = formData.company.trim() !== "";

  // to check if the user typed anything and then validation
  const nameHasError = nameIsTouched && !nameIsValid;
  const phoneHasError = phoneIsTouched && !phoneIsValid;
  const emailHasError = emailIsTouched && !emailIsValid;
  const companyHasError = companyIsTouched && !companyIsValid;

  // overall form validity to activate the next button
  const formIsValid =
    nameIsValid && emailIsValid && phoneIsValid && companyIsValid;

  return (
    <>
      <div className={classes.contact}>
        <div className={classes.header}>
          <h1>{pageInfo.title}</h1>
          <p>{pageInfo.description}</p>
        </div>
        <form className={classes.form}>
          <div className={classes["form-control"]}>
            <div style={{ marginBottom: "10px" }}>
              <label htmlFor="name">Name</label>
            </div>
            <div className={classes["input-control"]}>
              <input
                className={`${classes.input} ${
                  nameIsTouched && nameHasError && classes.error
                }`}
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                onBlur={() => setNameIsTouched(true)}
                type="text"
                placeholder="Your name..."
                required
              />
              {!nameIsValid && (
                <Image
                  className={classes.alignment}
                  src={user}
                  width={40}
                  height={60}
                  alt="user logo"
                />
              )}
            </div>
          </div>
          <div className={classes["form-control"]}>
            <div style={{ marginBottom: "10px" }}>
              <label htmlFor="email">Email</label>
            </div>
            <div className={classes["input-control"]}>
              <input
                className={`${classes.input} ${
                  emailIsTouched && emailHasError && classes.error
                }`}
                id="email"
                type="email"
                placeholder="Email Address..."
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                onBlur={() => setEmailIsTouched(true)}
                required
              />
              {!emailIsValid && (
                <Image
                  className={classes.alignmentEnvelope}
                  src={envelope}
                  width={40}
                  height={60}
                  alt="envelope"
                />
              )}
            </div>
          </div>
          <div className={classes["form-control"]}>
            <div style={{ marginBottom: "10px" }}>
              <label htmlFor="phone">Phone</label>
            </div>
            <div className={classes["input-control"]}>
              <input
                className={`${classes.input} ${
                  phoneIsTouched && phoneHasError && classes.error
                }`}
                id="phone"
                type="text"
                placeholder="e.g. (123) 456 789"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                onBlur={() => setPhoneIsTouched(true)}
                required
              />
              {!phoneIsValid && (
                <Image
                  className={classes.alignment}
                  src={phone}
                  width={40}
                  height={60}
                  alt="phone"
                />
              )}
            </div>
          </div>
          <div className={classes["form-control"]}>
            <div style={{ marginBottom: "10px" }}>
              <label htmlFor="company">Company</label>
            </div>
            <div className={classes["input-control"]}>
              <input
                className={`${classes.input} ${
                  companyIsTouched && companyHasError && classes.error
                }`}
                id="company"
                type="text"
                placeholder="Company name..."
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
                onBlur={() => setCompanyIsTouched(true)}
                required
              />
              {!companyIsValid && (
                <Image
                  className={classes.alignment}
                  src={building}
                  width={40}
                  height={60}
                  alt="building"
                />
              )}
            </div>
          </div>
        </form>
      </div>
      <Buttons step={step} setStep={setStep} disabled={!formIsValid} />
    </>
  );
}

export default Contact;
