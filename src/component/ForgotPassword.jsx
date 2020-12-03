import React from "react";
import Button from "./Button/Button";
import "./Login.css";

function ForgotPassword({setIsForget}) {
  return (
    <div className="LoginComponent__parent">
      <div className="LoginComponent__card">
        <h1>Forgot Password</h1>
        <input id="email" type="email" placeholder="email"/>
        <Button onclick={() => {}} value={"Request OTP"}
                light={true}/>
      </div>
    </div>
  );
}

export default ForgotPassword;