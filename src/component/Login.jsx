import React, {useContext, useState} from "react";
import Axios from "axios";
import UserContext from "../context/UserContext";
import "./Login.css";
import Button from "./Button/Button";
import ForgotPassword from "./ForgotPassword";
import Spinner from "./Spinner/Spinner";

function Login() {
  
  const {user, setUser} = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const [isForget, setIsForget] = useState(false);
  
  //login admin
  const loginAdmin = async () => {
    
    setIsLoading((isLoading) => !isLoading);
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    if (!email || !password) {
      alert("Empty");
      return;
    }
    
    const url = "https://bakeology-alpha-stage.herokuapp.com/auth/user/login";
    let res;
    try {
      res = await Axios.post(url, {
        "email": email,
        "password": password
      }, {
        headers: {
          'content-type': 'application/json'
        }
      });
    } catch (err) {
      alert(`Invalid credentials ${err.message}`);
      setIsLoading((isLoading) => !isLoading);
      return;
    }
    
    let {token, userId} = res.data;
    let tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1)
    setUser({
      ...user,
      isAuth: true,
      token,
      user: userId,
      expiryTime: tomorrow
    });
    localStorage.setItem("auth-token", token);
    localStorage.setItem("exp-time", tomorrow.toISOString());
  }
  
  return (
    isForget ? <ForgotPassword loginComponent={setIsForget} /> :
      <div className="LoginComponent__parent">
        <div className="LoginComponent__card">
          <h1>Welcome Admin</h1>
          <input id="email" type="email" placeholder="email"/>
          <input id="password" type="password"
                 placeholder="******"/>
          <Button onclick={loginAdmin} value={"Login"}
                  light={true}/>
          <button className="" onClick={() => setIsForget(true)}>Forgot password</button>
          {isLoading ? <Spinner /> : null}
        </div>
      </div>
  );
  
}

export default Login;