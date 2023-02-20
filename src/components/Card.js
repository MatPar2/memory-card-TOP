import imgSrc from "../assets/images.png"

export default function Card(props) {
  return(
    <div className="Card">
      <img src={imgSrc} alt="#"/>
      <p>{props.name}</p>
    </div>
  )
}