import imgSrc from "../assets/images.png"

export default function Card(props) {
  function handleClick(props) {
    console.log(props.name)
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

  function createNewMatch() {
    if (props.bestScore < props.score) {
      props.setBestScore(props.score);
    }
    props.setScore(0);
    props.setClickedCharacters([]);
  }

  return(
    <div className="Card" onClick={() => handleClick(props)}>
      <img src={props.imgSrc} alt="#"/>
      <p>{props.name}</p>
    </div>
  )
}