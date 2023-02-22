import './App.css'
import Scorecard from "./components/Scorecard.js"
import Grid from "./components/Grid.js"
import { useState } from 'react';

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Memory Game</h1>
        <p className="Description">Get points by clicking on an image, but don't click any more than once!</p>

        <Scorecard score={score} bestScore={bestScore}/>
      </header>
      <Grid score={score} bestScore={bestScore} setScore={setScore} setBestScore={setBestScore}/>
    </div>
  );
}

export default App;
