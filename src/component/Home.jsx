import React, {useContext} from "react";
import Login from "./Login";
import OrderSummary from "./OrderSummary/OrderSummary";
import UserContext from "../context/UserContext";

function Home() {
  const {user} = useContext(UserContext);
  
  return (
    <div>
      {user.isAuth ? <OrderSummary /> : <Login />}
    </div>
  );
}

export default Home;