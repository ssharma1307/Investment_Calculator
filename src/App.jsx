import { useState } from "react";
import UserInput from "./components/UserInput.jsx";
import Header from "./components/Header";
import Result from "./components/Result";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue,
      };
    });
  }

  return (
    <>
    <Header/>
    <UserInput userInput={userInput} onChange={handleChange} />
    <Result input={userInput} />
    </>
  )
}

export default App
