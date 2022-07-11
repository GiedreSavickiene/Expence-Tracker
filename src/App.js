
import './App.css';
import Balance from './components/Balance';
import Header from './components/Header';
import IncomeExpences from './components/IncomeExpences';

function App() {
  return (
    <div>
      <Header></Header>
      <div className="container">
        <Balance></Balance>
        <IncomeExpences></IncomeExpences>
      </div>
    </div>
  );
}

export default App;
