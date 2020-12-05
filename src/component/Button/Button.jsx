import React from "react";
import classes from "./Button.module.css";

function Button({onclick, value, light, isDisabled}) {
  return <button disabled={isDisabled} className={light ? classes.buttonLight : classes.buttonDark} onClick={onclick}>{value}</button>
}

export default Button;