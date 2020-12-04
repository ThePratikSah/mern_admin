import React from "react";
import classes from "./OrderSummary.module.css";

function OrderSummary() {
  return (
    <div className={classes.OrderSummary__parent}>
      <div className={classes.OrderSummary__card}>
        <div className={classes.OrderSummary__cardHeader}>
          <h2>Transacton ID</h2>
        </div>
        {/* <div className={classes.OrderSummary__cardDetails}>
          <div className={classes.OrderSummary__cardDetailsSender}>
            <div
              className={classes.OrderSummary__cardDetailsSenderPersonalInfo}
            >
              <span>Pratik Sah</span>
              <span>Sender Address</span>
              <span>+91-9876543210</span>
              <span>email@gmail.com</span>
            </div>
            <div className={classes.OrderSummary__cardDetailsSenderDateTime}>
              <span>Dec 04, 2020</span>
              <span>02:23</span>
            </div>
          </div>
          <div className={classes.OrderSummary__cardDetailsReceiver}>
            <div className={classes.OrderSummary__cardDetailsReceiverDateTime}>
              <span>Dec 04, 2020</span>
              <span>02:23</span>
            </div>
            <div
              className={classes.OrderSummary__cardDetailsReceiverPersonalInfo}
            >
              <span>Shashank Biplav</span>
              <span>Receiver Address</span>
              <span>+91-9876543210</span>
              <span>email@gmail.com</span>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default OrderSummary;
