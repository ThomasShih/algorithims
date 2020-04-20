import {sortingAlgoList,bubbleSort,countingSort,heapSort,insertionSort,mergeSortHandler,quickSortHandler,radixSort,selectionSort} from "../assets/sortingAlgoList"
import Dots from "./Dots"

function processSort(randomArray,algoName){
  if(algoName=="Bubble Sort"){
    var arraySteps = bubbleSort([...randomArray])
  }else if (algoName=="Counting Sort"){
    var arraySteps = countingSort([...randomArray])
  }else if (algoName=="Heap Sort"){
    var arraySteps = heapSort([...randomArray])
  }else if (algoName=="Insertion Sort"){
    var arraySteps = insertionSort([...randomArray])
  }else if (algoName=="Merge Sort"){
    var arraySteps = mergeSortHandler([...randomArray])
  }else if (algoName=="Quick Sort"){
    var arraySteps = quickSortHandler([...randomArray])
  }else if (algoName=="Radix Sort"){
    var arraySteps = radixSort([...randomArray])
  }else if (algoName=="Selection Sort"){
    var arraySteps = selectionSort([...randomArray])
  }else {var arraySteps = bubbleSort([...randomArray])}

  return arraySteps
}

class Algorithim extends React.Component{
  render(){
    return(
      <div className="algorithim">
          <h1>{this.props.name}</h1>
          <Dots inputArray={processSort(this.props.inputArray,this.props.name)}/>
      </div>
  )};
}

class Header extends React.Component{
  render(){
    return(
      <div className="sortingAlgorithimHeader">
        <h1>
          Sorting Algorithims
        </h1>
        <h2>
          Hello! This site is meant to be a quick reference guide to sorting algorithims, along with their explinations and a pretty animation for each algorithim. The input array is randomly generated each time this site loads and is then processed via each algorithim.
        </h2>
        <Dots inputArray={[this.props.inputArray]}/>
      </div>
    )
  }
}

class SortingAlgorithims extends React.Component{
  constructor(){super()
    //Generate a list of unique numbers
    this.inputArray = [];
    while(this.inputArray.length < 20){
        var r = Math.floor(Math.random() * 100) + 1;
        if(this.inputArray.indexOf(r) === -1) this.inputArray.push(r);
    }

    this.algorithimList = sortingAlgoList.map(algo => <Algorithim id={algo.id}
                                                                  name={algo.name}
                                                                  inputArray={this.inputArray}
                                                                  directory={"../SortingAlgorithims"}/>)
  }

  render(){return(
      <div className="sortingAlgoPage">
        <Header inputArray={this.inputArray} />
        {this.algorithimList}
      </div>
  )}
}

export default SortingAlgorithims