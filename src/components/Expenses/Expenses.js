import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";

function Expenses(props) {      
  const { expenses } = props;
  return (
    <Card className="expenses">
      {expenses.map((expense, index) => {
        return <ExpenseItem key={index} data={expense} />;
      })}
    </Card>
  );
}

export default Expenses;
