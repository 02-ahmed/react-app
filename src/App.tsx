import ListGroup from "./components/ListGroup";
import Alert from "./components/alert";

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

  return (
    <>
      <Alert>
        Hello World<span>How are you</span>
      </Alert>
    </>
  )
}

export default App;