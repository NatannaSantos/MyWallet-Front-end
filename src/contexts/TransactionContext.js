import { createContext, useState } from "react";

const TransactionContext = createContext();

export function TransactionProvider({ children }) {
  const [newtransaction, setNewTransaction] = useState();

  function updateTransaction(transactionData) {
    console.log(transactionData);
    setNewTransaction(transactionData);
    
  }

  return (
    <TransactionContext.Provider value={{ newtransaction, updateTransaction }}>
      {children}
    </TransactionContext.Provider>
  )
}

export default TransactionContext;