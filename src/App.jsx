//components
import TipCalculator from "./components/tip-calculator/TipCalculator";

//styles
import styles from "./App.module.css";
import Logo from "./images/logo.svg";

function App() {
  return (
    <main className={styles.app}>
      <img src={Logo} alt="text logo, the word splitter" />
      <TipCalculator />
    </main>
  );
}

export default App;
