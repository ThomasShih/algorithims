import Dots from "./Dots"
import headerContent from "../assets/sortingAlgoHeader"

function Header(props){
  return(
    <div className="sortingAlgorithimHeader">
      <h1>{headerContent.title}</h1>
      <h2>{headerContent.description}</h2>
      <h3>For a link to all my other work and GitHub, please visit me at <a href={headerContent.link}>thomasshih.codes</a></h3>
      <Dots inputArray={[props.inputArray]}/>
      <button onClick={props.newArray}>Generate a new array!</button>
    </div>
  )
}

export default Header