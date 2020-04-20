import {sortingAlgoList,bubbleSort} from "../assets/sortingAlgoList"
import Dots from "./Dots"

function processSort(randomArray,algoName){
  if(algoName=="Bubble Sort"){
    return bubbleSort(randomArray)
  }
}

class Algorithim extends React.Component{
  render(){
    return(
      <div className="algorithim">
          <h1>{this.props.name}</h1>
          <Dots inputArray={processSort(this.props.inputArray,this.props.name)}
                directory={this.props.directory}/>
      </div>
  )};
}

class SortingAlgorithims extends React.Component{
  constructor(){super()
    //Generate a list of unique numbers
    var inputArray = [];
    while(inputArray.length < 10){
        var r = Math.floor(Math.random() * 100) + 1;
        if(inputArray.indexOf(r) === -1) inputArray.push(r);
    }

    this.algorithimList = sortingAlgoList.map(algo => <Algorithim  id={algo.id}
                                                                  name={algo.name}
                                                                  inputArray={inputArray}
                                                                  directory={"../SortingAlgorithims"}/>)
  }

  render(){return(
      <div>
          {this.algorithimList}
      </div>
  )}
}

export default SortingAlgorithims