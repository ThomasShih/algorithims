import {bubbleSort,countingSort,heapSort,insertionSort,mergeSortHandler,quickSortHandler,radixSort,selectionSort} from "../assets/sortingAlgoList"
import Dots from "./Dots"

function Algorithim({algorithimProfile:data,inputArray}){
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
  switch(algoName){
    case "Bubble Sort":     return bubbleSort([...randomArray])
    case "Counting Sort":   return countingSort([...randomArray])
    case "Heap Sort":       return heapSort([...randomArray])
    case "Insertion Sort":  return insertionSort([...randomArray])
    case "Merge Sort":      return mergeSortHandler([...randomArray])
    case "Quick Sort":      return quickSortHandler([...randomArray])
    case "Radix Sort":      return radixSort([...randomArray])
    case "Selection Sort":  return selectionSort([...randomArray])
    default:                return bubbleSort([...randomArray])
  }
}

export default Algorithim