import React from "react";

// styles
import styles from "./TipDisplay.module.css";

const ValueSection = ({ text, amount }) => {
  return (
    <div className={styles.valueSection}>
      <div className={styles["text-container"]}>
        <p>{text}</p>
        <p>/ person</p>
      </div>
      <div className={styles["amount-container"]}>${amount}</div>
    </div>
  );
};

function TipDisplay({ amountPerPerson, totalAmount, handleReset }) {
  return (
    <div className={styles.container}>
      <ValueSection text="Tip Amount" amount={amountPerPerson} />
      <ValueSection text="Total" amount={totalAmount} />
      <button onClick={handleReset} className={styles.reset}>
        RESET
      </button>
    </div>
  );
}

export default TipDisplay;
