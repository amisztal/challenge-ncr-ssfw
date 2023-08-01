import './App.css';
import { Header } from './components/Header';
import { TitlesContainer } from './components/TitlesContainer';
import { AccountsContainer } from './components/AccountsContainer';
import { ExitButton } from './components/ExitButton';

function App() {
  return (
    <div className="App">
        <Header />
        <TitlesContainer />
        <AccountsContainer />
        <ExitButton />
    </div>
  );
}

export default App;