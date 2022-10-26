import { View, StyleSheet } from "react-native";
import { GlobalStyles } from "../../contants/styles";

import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2022-10-26"),
  },
  {
    id: "e2",
    description: "Shopping",
    amount: 125.55,
    date: new Date("2022-10-25"),
  },
  {
    id: "e3",
    description: "CarWash",
    amount: 29.99,
    date: new Date("2022-10-18"),
  },
  {
    id: "e4",
    description: "Book",
    amount: 14.99,
    date: new Date("2022-10-17"),
  },
  {
    id: "e5",
    description: "Book",
    amount: 18.29,
    date: new Date("2022-10-17"),
  },
  {
    id: "ex1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2022-10-26"),
  },
  {
    id: "ex2",
    description: "Shopping",
    amount: 125.55,
    date: new Date("2022-10-25"),
  },
  {
    id: "ex3",
    description: "CarWash",
    amount: 29.99,
    date: new Date("2022-10-18"),
  },
  {
    id: "ex4",
    description: "Book",
    amount: 14.99,
    date: new Date("2022-10-17"),
  },
  {
    id: "ex5",
    description: "Book",
    amount: 18.29,
    date: new Date("2022-10-17"),
  },
];

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});

export default ExpensesOutput;
