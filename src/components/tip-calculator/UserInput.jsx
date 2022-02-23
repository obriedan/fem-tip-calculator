import React, { useEffect, useState } from "react";

//styles & images
import styles from "./UserInput.module.css";
import dollarIcon from "../../images/icon-dollar.svg";
import peopleIcon from "../../images/icon-person.svg";

function UserInput({
  bill,
  setBill,
  percentage,
  setPercentage,
  people,
  setPeople,
}) {
  const [customValue, setCustomValue] = useState("");
  useEffect(() => {}, [bill, percentage]);

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
  return (
    <div className={styles.container}>
      <div className={styles.billContainer}>
        <div className="inputContainer">
          <label className={styles.billLabel}>Bill</label>
          <img src={dollarIcon} alt="" />
          <input
            type="number"
            value={bill}
            placeholder="0"
            onChange={(e) => {
              setBill(e.target.value);
            }}
          />
        </div>
      </div>

      <div className={styles.tipPercentageContainer}>
        <label className="tipPercentageLabel">Select Tip %</label>
        <div className="tipPercentageGrid">
          {tipPercentages.map((number) => (
            <div
              onClick={() => {
                setPercentage(number);
                setCustomValue("");
              }}
              key={Math.random()}
              className="percentButton"
            >
              {number}%
            </div>
          ))}

          <input
            placeholder="Custom"
            value={customValue}
            onChange={(e) => {
              setPercentage(Number(e.target.value));
              setCustomValue(e.target.value);
            }}
            type="number"
          />
        </div>
      </div>

      <div className={styles.peopleContainer}>
        <div className="inputContainer">
          <label className={styles.peopleLabel}>Number of People</label>
          <img src={peopleIcon} alt="" />
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
    </div>
  );
}

export default UserInput;
