import './App.css';
import { Header } from './components/Header';
import { TitlesContainer } from './components/TitlesContainer';
import { AccountsContainer } from './components/AccountsContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <TitlesContainer />
      <AccountsContainer />
    </div>
  );
}

export default App;