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

function TipDisplay({ amountPerPerson, totalAmountPerPerson, handleReset }) {
  return (
    <div className={styles.container}>
      <ValueSection text="Tip Amount" amount={Number(amountPerPerson)} />
      <ValueSection text="Total" amount={Number(totalAmountPerPerson)} />
      <button onClick={handleReset} className={styles.reset}>
        RESET
      </button>
    </div>
  );
}

export default TipDisplay;
