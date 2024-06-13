import { useState } from "react";
import Like from "./components/Like";
import ExpenseTracker from "./components/expense-tracker/components/ExpenseTracker";
import ExpenseList from "./components/expense-tracker/components/ExpenseList";
import ExpenseFilter from "./components/expense-tracker/components/ExpenseFilter";
import categories from "./components/expense-tracker/categories";

function App() {
  const handleClick = (event:React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  }

  const [selectedCategory, setSelectedCategory] = useState('');

  const [expenses, setExpenses] = useState([
    {id:1, description: 'spotify', amount: 12, category:'Entertainment'},
    {id:2, description: 'milk', amount: 20, category:'Groceries'},
    {id:3, description: 'water', amount: 5, category:'Utilities'},
    {id:4, description: 'netflix', amount: 12, category:'Entertainment'},
  ]);

  const visibleExpenses = selectedCategory? expenses.filter((e) =>e.category === selectedCategory) : expenses;

 
  return (
    <>
      <div className="mb-5">
        <ExpenseTracker />
      </div>
      <div className="mb-3">
        <ExpenseFilter onSelectCategory={(category) => setSelectedCategory(category)}/>
      </div>
      <ExpenseList expenses={visibleExpenses } onDelete={(id) => setExpenses(expenses.filter(e => e.id !== id))}/>
    </>
  )
}

export default App;