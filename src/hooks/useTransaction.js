import { useContext } from "react";
import TransactionContext from "../contexts/TransactionContext";

export default function useTransaction() {
    return useContext(TransactionContext);
}