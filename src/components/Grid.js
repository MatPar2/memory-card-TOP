import Card from "./Card"

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

function renderCardsRandomly() {
  const randomNames = shuffleArray(names.slice(0));
  
  const listToRender = randomNames.map((elem, index) => 
      <Card name={elem} key={index} />
    )
  
  return listToRender;
}

function shuffleArray(arr) {
  for (let i = arr.length-1; i>0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }

  return arr;
}

export default function Grid() {
  return(
    <div className="Grid">
      {renderCardsRandomly()}
    </div>
  )
}