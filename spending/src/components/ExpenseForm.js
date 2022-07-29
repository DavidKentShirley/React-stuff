import React, { useState } from "react";
import "./../styles/ExpenseForm.css";

function ExpenseForm(props) {
	const [enteredTitle, setEnteredTitled] = useState("");
	const [enteredAmount, setEnteredAmount] = useState("");
	const [enteredDate, setEnteredDate] = useState("");

	const titleChange = (event) => {
		setEnteredTitled(event.target.value);
	};

	const amountChange = (event) => {
		setEnteredAmount(event.target.value);
	};
	
	const dateChange = (event) => {
		setEnteredDate(event.target.value);
	};

	const submitHandler = (event) => {
		event.preventDefault();
	
		const expenseData = {
		  title: enteredTitle,
		  amount: enteredAmount,
		  date: new Date(enteredDate),
		};
	
		props.onSaveExpenseData(expenseData);
		setEnteredTitled('');
		setEnteredAmount('');
		setEnteredDate('');
	  };

	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input type="text" value={enteredTitle} onChange={titleChange} />
				</div>
			</div>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						type="number"
						value={enteredAmount}
						min="0.01"
						step="0.01"
						onChange={amountChange}
					/>
				</div>
			</div>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Date</label>
					<input
						type="date"
						min="2019-01-01"
						max="2022-12-31"
						onChange={dateChange}
						value={enteredDate}
					/>
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
}

export default ExpenseForm;
