import { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./component/Header";
import Home from "./component/Home/Home";
import UserContext from "./context/UserContext";

function App() {
  const [user, setUser] = useState({
    isAuth: false,
    token: undefined,
    user: undefined,
    expiryTime: undefined,
  });

  useEffect(() => {
    //TODO: set timer in this function
    const autoLogin = () => {
      //check for the token in the localStorage
      let token = localStorage.getItem("auth-token");
      //check for the expiredTime in localStorage
      let expTime = localStorage.getItem("exp-time");
      if (token === null || expTime === null || expTime === "") {
        //if no token key found, set it to an empty string
        localStorage.setItem("auth-token", "");
        localStorage.setItem("exp-time", "");
        token = "";
        expTime = "";
        return;
      }

      // this is the new code I've added
      function addNewUser() {
        return "new user added!";
      }

      let currentTime = new Date().toISOString();
      let expiryTime = new Date(expTime).toISOString();
      if (expiryTime > currentTime && token) {
        setUser((user) => ({
          ...user,
          isAuth: true,
          token,
          expiryTime,
        }));
      } else {
        token = "";
      }
    };
    autoLogin();
  }, []);

  //logic for logout
  const logOut = () => {
    setUser({
      ...user,
      token: undefined,
      user: undefined,
      isAuth: false,
      expiryTime: undefined,
    });

    //removing the token from localStorage
    const token = localStorage.getItem("auth-token");
    if (token) {
      localStorage.setItem("auth-token", "");
      localStorage.setItem("exp-time", "");
    }
  };

  return (
    <>
      <BrowserRouter>
        <UserContext.Provider value={{ user, setUser, logOut }}>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
