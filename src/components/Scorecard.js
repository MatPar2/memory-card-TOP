export default function Scorecard(props) {
  return (
    <div>
      <p>Current Score: {props.score}</p>
      <p>Best Score: {props.bestScore}</p>
    </div>
  )
}