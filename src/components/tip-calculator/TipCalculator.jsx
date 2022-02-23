import React, { useState, useEffect } from "react";

//components
import TipDisplay from "./TipDisplay";
import UserInput from "./UserInput";

//styles
import styles from "./TipCalculator.module.css";

function TipCalculator() {
  const [bill, setBill] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [people, setPeople] = useState(0);
  const [customValue, setCustomValue] = useState("");

  const [totalAmountPerPerson, setTotalAmountPerPerson] = useState(0);
  const [amountPerPerson, setAmountPerPerson] = useState(0);

  const handleReset = () => {
    setBill(0);
    setPercentage(0);
    setPeople(0);
    setCustomValue("");
  };

  useEffect(() => {
    const tip = bill * (percentage / 100);
    const perPerson = tip / people;
    const total = bill / people + perPerson;

    if (people) {
      setTotalAmountPerPerson(total.toFixed(2));
      setAmountPerPerson(perPerson.toFixed(2));
    } else {
      setTotalAmountPerPerson(0);
      setAmountPerPerson(0);
    }
  }, [bill, percentage, people]);

  return (
    <div className={styles.container}>
      <UserInput
        bill={bill}
        setBill={setBill}
        percentage={percentage}
        setPercentage={setPercentage}
        people={people}
        setPeople={setPeople}
        customValue={customValue}
        setCustomValue={setCustomValue}
      />
      <TipDisplay
        amountPerPerson={amountPerPerson}
        totalAmountPerPerson={totalAmountPerPerson}
        handleReset={handleReset}
      />
    </div>
  );
}

export default TipCalculator;
