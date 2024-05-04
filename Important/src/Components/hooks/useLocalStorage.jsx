import { useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage"; // Assuming useLocalStorage is defined elsewhere

function TakeInput() { // Corrected function name (PascalCase)
  const [data, setData] = useState("Zainab"); // Initial state for username

  const handleInputChange = (event) => { // Clearer function name
    setData(event.target.value);
  };

  return (
    <>
      <h3>Enter the user name:</h3>
      <input onChange={handleInputChange} />
      {/* No need to call useLocalStorage here, it's likely handled in the custom hook */}
    </>
  );
}

export default TakeInput;

