import logo from './logo.svg';
import './App.css';
import QuoteApp from './QuoteApp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <QuoteApp/>               
      </header>
    </div>
  );
}

export default App;
