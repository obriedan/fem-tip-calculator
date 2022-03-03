import React, { useState } from "react";

//styles & images
import styles from "./UserInput.module.css";
import dollarIcon from "../../images/icon-dollar.svg";
import peopleIcon from "../../images/icon-person.svg";

const classNames = require("classnames");

function UserInput({
  bill,
  setBill,
  percentage,
  setPercentage,
  people,
  setPeople,
  customValue,
  setCustomValue,
}) {
  const [buttonColor, setButtonColor] = useState({
    selected: false,
    button: "",
  });
  const tipPercentages = [5, 10, 15, 25, 50];

  const handlePeopleChange = (value) => {
    const regEx = new RegExp(/\d+/);
    const filteredInput = value.match(regEx);
    if (filteredInput) {
      setPeople(filteredInput);
    } else {
      setPeople("");
    }
  };

  const handlePercentageClick = (number) => {
    setPercentage(number);
    setCustomValue("");
    setButtonColor({ selected: true, button: number });
  };

  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <label className={styles.billLabel}>Bill</label>
        <img className={styles.inputIcon} src={dollarIcon} alt="" />
        <input
          type="number"
          value={bill}
          placeholder="0"
          onChange={(e) => {
            setBill(e.target.value);
          }}
        />
      </div>

      <div className={styles.tipPercentageContainer}>
        <label className={styles.tipPercentageLabel}>Select Tip %</label>
        <div className={styles.tipPercentageGrid}>
          {tipPercentages.map((number) => {
            const btnClass = classNames({
              [`${styles.percentButton}`]: true,
              [`${styles.selected}`]:
                buttonColor.selected && buttonColor.button === number,
            });

            return (
              <div
                onClick={() => {
                  handlePercentageClick(number);
                }}
                key={Math.random()}
                className={btnClass}
              >
                {number}%
              </div>
            );
          })}

          <input
            className={styles.customInput}
            placeholder="Custom"
            value={customValue}
            onChange={(e) => {
              setButtonColor({ selected: false, button: "" });
              setPercentage(Number(e.target.value));
              setCustomValue(e.target.value);
            }}
            type="number"
          />
        </div>
      </div>

      <div className={styles.inputContainer}>
        <label className={styles.peopleLabel}>Number of People</label>
        <img className={styles.inputIcon} src={peopleIcon} alt="" />
        <input
          type="number"
          min="1"
          value={people}
          placeholder="0"
          onChange={(e) => {
            setPeople(e.target.value.replace(/[^0-9]/g, ""));
          }}
        />
      </div>
    </div>
  );
}

export default UserInput;
