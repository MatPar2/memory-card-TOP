import imgSrc from "../assets/images.png"

export default function Card() {
  const name = "Name";

  return(
    <div>
      <img src={imgSrc} alt="#"/>
      <p>{name}</p>
    </div>
  )
}