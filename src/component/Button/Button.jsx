import React from "react";
import classes from "./Button.module.css";

function Button({onclick, value, light}) {
  return <button className={light ? classes.buttonLight : classes.buttonDark} onClick={onclick}>{value}</button>
}

export default Button;