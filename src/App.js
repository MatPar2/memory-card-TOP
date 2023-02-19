import './App.css'
import Scorecard from "./components/Scorecard.js"
import Grid from "./components/Grid.js"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Memory Game</h1>
        <p className="Description">Get points by clicking on an image, but don't click any more than once!</p>

        <Scorecard/>
      </header>
      <Grid/>
    </div>
  );
}

export default App;
