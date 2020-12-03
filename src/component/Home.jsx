import React, {useContext} from "react";
import Login from "./Login";
import UserContext from "../context/UserContext";

function Home() {
  const {user} = useContext(UserContext);
  
  return (
    <div>
      {user.isAuth ? <h1>Home Component</h1> : <Login />}
    </div>
  );
}

export default Home;