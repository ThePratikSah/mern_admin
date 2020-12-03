import React, {useContext} from "react";
import "./NavBar.css";
import UserContext from "../../context/UserContext";
import Button from "../Button/Button";

export default function NavBar() {
  
  const {user, logOut} = useContext(UserContext);
  
  return (
    <nav>
      <a href="/">Delivery</a>
      <ul>
        <li>
          {user.isAuth ? <Button onclick={logOut} value={"Logout"} /> : null}
        </li>
      </ul>
    </nav>
  );
}
