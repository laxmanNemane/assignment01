import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // 👇 multiple state individual state slices
  const [enteredTitle, setEnteredTitle] = useState();
  const [enteredAmount, setEnteredAmount] = useState();
  const [enteredDate, setEnteredDate] = useState();

  // const [userInputs, setUserInputs] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
    // setUserInputs({
    //   ...userInputs,
    //   enteredTitle: e.target.value,
    // });
  };

  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);

    // setUserInputs({
    //   ...userInputs,
    //   enteredAmount: e.target.value,
    // });

    // setUserInputs((prevState)=>{
    //   return {...prevState , enteredTitle:e.target.value};;
    // });
  };

  const priceChangeHandler = (e) => {
    setEnteredDate(e.target.value);

    // setUserInputs({
    //   ...userInputs,
    //   enteredDate: e.target.value,
    // });
  };

  // console.log(userInputs)

  // console.log("entered title is ", enteredTitle)
  // console.log("entered amount is ", enteredAmount)
  // console.log("entered price is ", enteredPrice)

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    console.log(expenseData);
    setEnteredAmount('')
    setEnteredDate('')
    setEnteredTitle('')
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2019-12-31"
            value={enteredDate}
            onChange={priceChangeHandler}
          />
        </div>

        <div>
          <button type="submit" className="new-expense__actions">
            add expense
          </button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
