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

  const [totalAmount, setTotalAmount] = useState(0);
  const [amountPerPerson, setAmountPerPerson] = useState();

  useEffect(() => {
    const total = (bill * (100 + percentage)) / 100;
    const perPerson = bill / people;

    setTotalAmount(total);
    if (!isNaN(people)) {
      setAmountPerPerson(perPerson);
    }
  }, [bill, percentage, people]);

  return (
    <div>
      <UserInput
        bill={bill}
        setBill={setBill}
        percentage={percentage}
        setPercentage={setPercentage}
        people={people}
        setPeople={setPeople}
      />
      <TipDisplay amountPerPerson={amountPerPerson} totalAmount={totalAmount} />
    </div>
  );
}

export default TipCalculator;
