import {sortingAlgoList} from "../assets/sortingAlgoList"
import Algorithim from "./Algorithim"
import Header from "./SortingAlgorithimsHeader"


class SortingAlgorithims extends React.Component{
  constructor(){super()
    //Generate a list of unique numbers
    this.inputArray = [];
    while(this.inputArray.length < 40){
        var r = Math.floor(Math.random() * 100) + 1;
        if(this.inputArray.indexOf(r) === -1) this.inputArray.push(r);
    }

    this.algorithimList = sortingAlgoList.map(algo => <Algorithim key={algo.id}
                                                                  algorithimProfile={algo}
                                                                  inputArray={this.inputArray}/>)
  }

  render(){return(
      <div className="sortingAlgoPage">
        <Header inputArray={this.inputArray} />
        {this.algorithimList}
      </div>
  )}
}

export default SortingAlgorithims