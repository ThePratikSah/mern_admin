import React, {useState, useEffect, useContext} from "react";
import Axios from "axios";
import UserContext from "../../context/UserContext";
import Spinner from "../Spinner/Spinner";
import OrderCard from "../OrderCard/OrderCard";

function OrderSummary() {
  const {user} = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);
  const [orders, setOrders] = useState({});
  
  useEffect(() => {
    const fetchOrders = async () => {
      const url = "https://delivery-nodejs.herokuapp.com/admin/orders";
      let res;
      try {
        res = await Axios.get(url, {
          headers: {
            'content-type': 'application/json',
            'authorization': 'Bearer ' + user.token
          }
        });
        console.log(res.data);
        setOrders(res.data);
        setIsLoading(false);
      } catch (err) {
        alert(`Invalid credentials ${err.message}`);
        setIsLoading((isLoading) => !isLoading);
        return;
      }
    }
    fetchOrders();
  }, []);
  
  return (
      isLoading
        ? <Spinner />
        : orders.totalOrders
          ? orders.orders.map((order, index) => <OrderCard key={order['_id']} data={orders['orders'][index]} />)
          : <span>No Orders Found🤣</span>
  );
  
}

export default OrderSummary;