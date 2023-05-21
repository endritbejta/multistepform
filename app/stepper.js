import { useState } from "react";

import Budget from "./components/budget";
import Contact from "./components/contact";
import Final from "./components/final";
import Services from "./components/services";
import Steps from "./components/steps";

import classes from "./stepper.module.css";

function Stepper() {
  /// step controlling
  const [step, setStep] = useState(0);

  /// state of form data
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    company: "",
    email: "",
    serviceKind: "",
    budgetType: "",
  });

  // Each form title and description array of objects
  const formStepInfo = [
    {
      title: "Contact Details",
      description: "Lorem ipsum dolor sit amet consectetur adipisc.",
    },
    {
      title: "Our services",
      description: "Please select which service you are interested in.",
    },
    {
      title: "What’s your project budget?",
      description: "Please select the project budget range you have in mind.",
    },
    {
      title: "Submit your quote request",
      description:
        "Please review all the information you previously typed in the paststeps, and if all is okay, submit your message to receive a project quote in 24 - 48 hours.",
    },
  ];

  // Showing components for each and every step we make
  function showStep(step) {
    switch (step) {
      case 0:
        return (
          <Contact
            step={step}
            setStep={setStep}
            formData={formData}
            setFormData={setFormData}
            pageInfo={formStepInfo[step]}
          />
        );
      case 1:
        return (
          <Services
            step={step}
            setStep={setStep}
            formData={formData}
            setFormData={setFormData}
            pageInfo={formStepInfo[step]}
          />
        );
      case 2:
        return (
          <Budget
            step={step}
            setStep={setStep}
            formData={formData}
            setFormData={setFormData}
            pageInfo={formStepInfo[step]}
          />
        );
      case 3:
        return (
          <Final
            step={step}
            setStep={setStep}
            formData={formData}
            setFormData={setFormData}
            pageInfo={formStepInfo[step]}
          />
        );
    }
  }

  return (
    <div className={classes.stepper}>
      <Steps step={step} />
      <hr className={classes.horizontal} />
      {showStep(step)}
    </div>
  );
}

export default Stepper;
