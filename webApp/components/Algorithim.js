import {bubbleSort,countingSort,heapSort,insertionSort,mergeSortHandler,quickSortHandler,radixSort,selectionSort} from "../assets/sortingAlgoList"
import Dots from "./Dots"

function Algorithim(props){
  const {algorithimProfile:data,inputArray} = props
  return(
    <div className="algorithim">
        <h1 className="algoName">{data.name}</h1>
        <h2 className="timeComplexity" >Time: {data.timeComplexity}</h2>
        <h2 className="spaceComplexity">Space: {data.spaceComplexity}</h2>
        <h1 className="desc">{data.desc}</h1>
        <Dots className="algorithimAnimation" inputArray={processSort(inputArray,data.name)}/>
    </div>
  )
}

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

export default Algorithim