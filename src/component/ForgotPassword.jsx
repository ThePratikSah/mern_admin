import React, { useState } from "react";
import Button from "./Button/Button";
import Spinner from "./Spinner/Spinner";
import "./Login.css";
import Axios from "axios";

function ForgotPassword() {
  const [isLoading, setIsLoading] = useState(false);

  const email = document.getElementById("email").value;
  const requestOtp = async () => {
    setIsLoading((isLoading) => !isLoading);

    const url =
      "https://delivery-nodejs.herokuapp.com/auth/administrator/get-otp";
    try {
      let res = await Axios.post(
        url,
        {
          email: email,
        },
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      console.log(res.data);
    } catch (err) {
      alert(`Invalid credentials ${err.message}`);
      setIsLoading((isLoading) => !isLoading);
      return;
    }
  };

  return (
    <div className="LoginComponent__parent">
      <div className="LoginComponent__card">
        <h1>Forgot Password</h1>
        <input id="email" type="email" placeholder="email" />
        <Button onclick={requestOtp} value={"Request OTP"} light={true} />
        {isLoading ? <Spinner /> : null}
      </div>
    </div>
  );
}

export default ForgotPassword;
