
import './App.css';
import AddTransaction from './components/AddTransaction';
import Balance from './components/Balance';
import Header from './components/Header';
import IncomeExpences from './components/IncomeExpences';
import TransactionList from './components/TransactionList';

function App() {
  return (
    <div>
      <Header></Header>
      <div className="container">
        <Balance></Balance>
        <IncomeExpences></IncomeExpences>
        <TransactionList></TransactionList>
        <AddTransaction></AddTransaction>
      </div>
    </div>
  );
}

export default App;
