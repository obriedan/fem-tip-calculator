import React from "react";

// styles
import styles from "./TipDisplay.module.css";

const ValueSection = ({ text, amount }) => {
  return (
    <div className={styles.valueSection}>
      <div className={styles.textContainer}>
        <p className={styles.textContainerLabel}>{text}</p>
        <p className={styles.textContainerDivision}>/ person</p>
      </div>
      <div className={styles.amountContainer}>${amount.toFixed(2)}</div>
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
