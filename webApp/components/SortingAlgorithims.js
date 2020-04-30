import {sortingAlgoList,bubbleSort,countingSort,heapSort,insertionSort,mergeSortHandler,quickSortHandler,radixSort,selectionSort} from "../assets/sortingAlgoList"
import Dots from "./Dots"
import headerContent from "../assets/sortingAlgoHeader"

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
    const {algorithimProfile:data,inputArray} = this.props
    return(
      <div className="algorithim">
          <h1 className="algoName">{data.name}</h1>
          <h2 className="timeComplexity" >Time: {data.timeComplexity}</h2>
          <h2 className="spaceComplexity">Space: {data.spaceComplexity}</h2>
          <h1 className="desc">{data.desc}</h1>
          <Dots className="algorithimAnimation" inputArray={processSort(inputArray,data.name)}/>
      </div>
  )};
}

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