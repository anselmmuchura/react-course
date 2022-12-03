import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 9500,
      date: "01/12/22",
    },
    {
      id: "e2",
      title: "Car Insurance",
      amount: 11500,
      date: "21/2/22",
    },
    {
      id: "e3",
      title: "New Desk",
      amount: 6000,
      date: "12/3/22",
    },
  ];

  return (
    <div className="App">
      <h2>Let's get started</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />

      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />

      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
    </div>
  );
}

export default App;
