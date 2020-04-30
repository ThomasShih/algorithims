import {sortingAlgoList} from "../assets/sortingAlgoList"
import Algorithim from "./Algorithim"
import Header from "./SortingAlgorithimsHeader"

const ArraySize = 40

const generateRandomArray = () => {
  let randomArray = []
  while(randomArray.length < ArraySize){
      var r = Math.floor(Math.random() * 100) + 1;
      if(randomArray.indexOf(r) === -1) randomArray.push(r);
  }

  return randomArray
}

function SortingAlgorithims(){
  const [renderToggle,setRenderToggle] = React.useState(false)
  const randomArray= generateRandomArray()
  const algorithimList = sortingAlgoList.map(algo => <Algorithim  key={algo.id}
                                                                  algorithimProfile={algo}
                                                                  inputArray={randomArray}/>)

  //A re-render will call generateRandomArray, hence toggle the render toggle to simulate a state change
  const generateNewArray = () => setRenderToggle(!renderToggle)

  return(
      <div className="sortingAlgoPage">
        <Header inputArray={randomArray} newArray={generateNewArray}/>
        {algorithimList}
      </div>
  )
}

export default SortingAlgorithims