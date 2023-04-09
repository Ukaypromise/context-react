import React from "react";

const Transaction = ({ id, text, amount, deleteTransaction }) => {
  return (
    <li key={id} className="minus">
      {text} <span>${amount}</span>
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
