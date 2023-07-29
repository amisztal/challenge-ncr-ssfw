import './App.css';
import { AccountsContainer } from './components/AccountsContainer';
import { Header } from './components/Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <AccountsContainer />
      </header>
    </div>
  );
}

export default App;