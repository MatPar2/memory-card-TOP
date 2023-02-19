import Scorecard from "./components/Scorecard.js"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Memory Game</h1>
        <p className="Description">Get points by clicking on an image, but don't click any more than once!</p>

        <Scorecard/>
      </header>
    </div>
  );
}

export default App;
