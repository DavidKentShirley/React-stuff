import React, { useState } from "react";
import ExpenseDates from "./ExpenseDates";
import "./../styles/ExpenseItem.css";

function ExpenseItem(props) {
	const [title, setTitle] = useState(props.title);

	const ChangeTitle = () => {
		setTitle("Yeet")
	};

	return (
		<div className="expense-item">
			<ExpenseDates date={props.date} />
			<div className="expense-item__description">
				<h2>{props.title}</h2>
				<div className="expense-item__price">${props.amount}</div>
			</div>
			<button className="button" role="button" onClick={ChangeTitle}>
				Change Title
			</button>
		</div>
	);
}

export default ExpenseItem;
