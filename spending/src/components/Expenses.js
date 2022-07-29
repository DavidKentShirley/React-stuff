import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilter";
import "./../styles/Expenses.css";

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState("2022");

	const filterYearHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	return (
		<div>
			<div className="expenses">
				<ExpensesFilter
					selected={filteredYear}
					onChangeFilter={filterYearHandler}
				/>
				{props.expenses.map((expense) => (
					<ExpenseItem
						title={expense.title}
						amount={expense.amount}
						date={expense.date}
					/>
				))}
			</div>
		</div>
	);
};

export default Expenses;
