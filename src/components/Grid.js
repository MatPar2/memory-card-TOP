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
  
  
  const listToRender = names.map((elem, index) => 
      <Card name={elem} key={index} />
    )
  
  return listToRender;
}

export default function Grid() {
  return(
    <div className="Grid">
      {renderCardsRandomly()}
    </div>
  )
}