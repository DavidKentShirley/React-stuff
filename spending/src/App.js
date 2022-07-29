import React, { useState } from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";

const dummyExpenses = [
	{
		id: "e1",
		title: "Food",
		amount: 160.78,
		date: new Date(2022, 6, 12),
	},
	{
		id: "e2",
		title: "Movies",
		amount: 69.71,
		date: new Date(2022, 6, 12),
	},
	{
		id: "e3",
		title: "Gas",
		amount: 185.18,
		date: new Date(2022, 6, 12),
	},
	{
		id: "e4",
		title: "Clothes",
		amount: 298.08,
		date: new Date(2022, 6, 12),
	},
];

function App() {
  const [expenses, setExpenses] = useState(dummyExpenses)

	const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    });
	};

	return (
		<div className="App">
			<h1>Welcome!</h1>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses expenses={expenses} />
		</div>
	);
}

export default App;
