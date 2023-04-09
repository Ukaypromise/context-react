import React from "react";

const Transaction = ({ id, text, amount, deleteTransaction }) => {
    const sign = amount < 0 ? "-" : "+";
  return (
    <li key={id} className={amount<0?"minus":"plus"}>
      {text} <span>{sign}${Math.abs(amount)}</span>
      <button
        className="delete-btn"
        onClick={() => {
          deleteTransaction(id); 
        }}
      >
        X
      </button>
    </li>
  );
};

export default Transaction;
