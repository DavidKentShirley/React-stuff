import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./../styles/NewExpense.css";

function NewExpense(props) {
	const onSaveExpenseDataHandler = (enteredExpeseData) => {
		const expesneData = {
			...enteredExpeseData,
			id: Math.random().toString(),
		};
		props.onAddExpense(expesneData)
	};

	return (
		<div className="new-expense">
			<ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
		</div>
	);
}

export default NewExpense;
