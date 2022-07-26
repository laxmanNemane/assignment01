import React from "react";

import "./Filter.css"

const ExpenseFilter = (props) => {
  const dropdownChangeHandler = (e) => {
    props.onChangeFilter(e.target.value);
  };


  return (
    <div className="filter">
      <div className='filter__control'>
        <label>Filter by Year</label>
        <div className='new-expense__actions'>

        <select value={props.selected} onChange={dropdownChangeHandler} >
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
        </div>
      </div>
    </div>
  );
};

export default ExpenseFilter;
