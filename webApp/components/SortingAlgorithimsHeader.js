import Dots from "./Dots"
import headerContent from "../assets/sortingAlgoHeader"

class Header extends React.Component{
  render(){
    return(
      <div className="sortingAlgorithimHeader">
        <h1>
          {headerContent.title}
        </h1>
        <h2>
          {headerContent.description}
        </h2>
        <h3>For a link to all my other work and GitHub, please visit me at <a href={headerContent.link}>thomasshih.codes</a></h3>
        <Dots inputArray={[this.props.inputArray]}/>
      </div>
    )
  }
}

export default Header