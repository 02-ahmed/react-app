import ListGroup from "./components/ListGroup";
import Alert from "./components/alert";
import Button from "./components/button";
import { useState } from "react";

function App() {
  /* let items = [
    'New York',
    'San Francisco',
    'Tokyo',
    'London',
    'Paris'
  ]; 

  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  return (
    <div><ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/></div>
  ) */

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <>
      {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>
        my alert
      </Alert>
      }
      

      <Button onClick={() => setAlertVisibility(true)} color="warning" >click me</Button>
    </>
  )
}

export default App;