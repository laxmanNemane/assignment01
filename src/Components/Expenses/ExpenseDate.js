import React from "react";
import "./ExpenseDate.css";

const ExpenseDate = ({ date }) => {
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const year = date.getFullYear();

  // console.log(month)
  return (
    <div className="expense">
      <p className="expense-date_Month">{month}</p>
      <p className="expense-date_year">{year}</p>
      <p className="expense-date_day">{day}</p>
    </div>
  );
};

export default ExpenseDate;