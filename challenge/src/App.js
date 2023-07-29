import './App.css';
import { AccountsContainer } from './components/AccountsContainer';
import { Header } from './components/Header';
import { TitlesContainer } from './components/TitlesContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <TitlesContainer />
      </header>
    </div>
  );
}

export default App;