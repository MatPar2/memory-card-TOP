import Card from "./Card"
import { useState } from "react"

const names = [
  "Homer",
  "Marge",
  "Bart",
  "Lisa",
  "Maggie",
  "Moe",
  "Ned",
  "Burns",
  "Grampa"
]

function shuffleArray(arr) {
  for (let i = arr.length-1; i>0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }

  return arr;
}

export default function Grid(props) {
  const [clickedCharacters, setClickedCharacters] = useState([]);

  function renderCardsRandomly(props) {
    const randomNames = shuffleArray(names.slice(0));
    
    const listToRender = randomNames.map((elem, index) => 
        <Card name={elem} key={index} score={props.score} bestScore={props.bestScore} setScore={props.setScore} setBestScore={props.setBestScore} clickedCharacters={clickedCharacters} setClickedCharacters={setClickedCharacters}/>
      )
    
    return listToRender;
  }

  return(
    <div className="Grid">
      {renderCardsRandomly(props)}
    </div>
  )
}