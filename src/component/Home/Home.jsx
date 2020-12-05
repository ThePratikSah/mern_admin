import React, {useContext, useState} from "react";
import Login from "../Login";
import OrderSummary from "../OrderSummary/OrderSummary";
import UserContext from "../../context/UserContext";
import classes from "./Home.module.css";

function Home() {
  
  const {user} = useContext(UserContext);

  return (
    <div className={classes.Home}>
      {
        user.isAuth ? <OrderSummary /> : <Login/>
      }
    </div>
  );
}

export default Home;