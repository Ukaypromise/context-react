import React, { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import Transaction from "./Transaction"; 

const TransactionList = () => {
  const { transactions, deleteTransaction } = useContext(GlobalContext);
  return (
    <div>
      {" "}
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((transaction) => {
          const { id, text, amount } = transaction;
          return (
            <Transaction
              key={id}
              id={id}
              text={text}
              amount={amount}
              deleteTransaction={deleteTransaction}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TransactionList;
