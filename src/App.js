import { useState } from 'react';
import './App.css';
import History from './components/History';
import NewTransaction from './components/NewTransaction';
import TotalBalance from './components/TotalBalance';
import './components/style.css';

function App() {

  const [balance,setBalance] = useState(
    [
      { text:"",amount:"" }
    ]
  )

  return (
    <div className="App">
      <TotalBalance/>
      <History expense={balance}/>
    </div>
  );
}

export default App;
