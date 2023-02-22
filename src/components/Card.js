import imgSrc from "../assets/images.png"

function createNewMatch() {
  // ToDo
}

export default function Card(props) {
  function handleClick(props) {
    if (props.clickedCharacters.some(elem => elem === props.name)) {
      createNewMatch();
    } else {
      // Sum 1 to the score
      props.setScore(s => s + 1)

      // Save new character to selected ones
      props.setClickedCharacters([
        ...props.clickedCharacters,
        props.name
      ]);
    }
  }

  return(
    <div className="Card" onClick={() => handleClick(props)}>
      <img src={imgSrc} alt="#"/>
      <p>{props.name}</p>
    </div>
  )
}