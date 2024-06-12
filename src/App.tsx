import { useState } from "react";
import Like from "./components/Like";
import ExpenseTracker from "./components/ExpenseTracker";

function App() {
  const handleClick = (event:React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  }
 
  return (
    <>
      <ExpenseTracker />
    </>
  )
}

export default App;