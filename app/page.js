"use client";

import classes from "./page.module.css";
import Stepper from "./stepper";

export default function Home() {
  return (
    <div className={classes.app}>
      <header className={classes.header}>
        <h1>Get a quote for project</h1>
        <p className="p">
          Please fill the form below to receive a quote for your project. Feel
          free to add as much detail as needed.
        </p>
      </header>
      <Stepper />
    </div>
  );
}
