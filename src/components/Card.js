import imgSrc from "../assets/images.png"

export default function Card(props) {
  function handleClick(props) {
    props.setScore(s => s + 1)
    
    props.setClickedCharacters([
      ...props.clickedCharacters,
      props.name
    ]);
  }

  return(
    <div className="Card" onClick={() => handleClick(props)}>
      <img src={imgSrc} alt="#"/>
      <p>{props.name}</p>
    </div>
  )
}