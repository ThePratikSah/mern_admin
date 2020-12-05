import React from "react";
import classes from "./OrderSummary.module.css";

function OrderSummary() {
  return (
    <div className={classes.OrderSummary__parent}>
      <div className={classes.OrderSummary__cardParent}>
        <div className={classes.OrderSummary__card}>
          <div>
            <h2 className={classes.OrderSummary__cardHeader}>Transacton ID</h2>
          </div>
          <div className={classes.OrderSummary__cardDetails}>
            <div className={classes.OrderSummary__cardDetailsSender}>
              <div
                className={classes.OrderSummary__cardDetailsSenderPersonalInfo}
              >
                <span className={classes.OrderSummary__cardDetailsName}>Pratik Sah</span>
                <span className={classes.OrderSummary__cardDetailsPhone}>+91-9876543210</span>
                <span className={classes.OrderSummary__cardDetailsEmail}>email@gmail.com</span>
                <span className={classes.OrderSummary__cardDetailsAddress}>Rammohini Chawk, Gulabbagh, Purnia, Bihar, 854326</span>
              </div>
              <div className={classes.OrderSummary__cardDetailsSenderDateTime}>
                <span className={classes.OrderSummary__cardDate}>Dec 04, 2020</span>
                <span className={classes.OrderSummary__cardTime}>02:23</span>
              </div>
            </div>
            <hr className={classes.HorizontalSeparation}/>
            <div className={classes.OrderSummary__cardDetailsReceiver}>
              <div className={classes.OrderSummary__cardDetailsReceiverDateTime}>
                <span className={classes.OrderSummary__cardDate}>Dec 04, 2020</span>
                <span className={classes.OrderSummary__cardTime}>02:23</span>
              </div>
              <div
                className={classes.OrderSummary__cardDetailsReceiverPersonalInfo}
              >
                <span className={classes.OrderSummary__cardDetailsName}>Shadiq Sir</span>
                <span className={classes.OrderSummary__cardDetailsPhone}>+91-9876543210</span>
                <span className={classes.OrderSummary__cardDetailsEmail}>shadiq@gmail.com</span>
                <span className={classes.OrderSummary__cardDetailsAddress}>Purnea City, Khuskibagh, Purnia, Bihar, 854326</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
