import imgSrc from "../assets/images.png"

function handleClick(name) {
  console.log(name);
}

export default function Card(props) {
  return(
    <div className="Card" onClick={() => handleClick(props.name)}>
      <img src={imgSrc} alt="#"/>
      <p>{props.name}</p>
    </div>
  )
}