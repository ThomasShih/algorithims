import {sortingAlgoList} from "../assets/sortingAlgoList"
import Algorithim from "./Algorithim"
import Header from "./SortingAlgorithimsHeader"

const generateRandomArray = () => {
  let randomArray = []
  while(randomArray.length < 40){
      var r = Math.floor(Math.random() * 100) + 1;
      if(randomArray.indexOf(r) === -1) randomArray.push(r);
  }

  return randomArray
}

function SortingAlgorithims(){
  const randomArray = generateRandomArray()
  const algorithimList = sortingAlgoList.map(algo => <Algorithim  key={algo.id}
                                                                  algorithimProfile={algo}
                                                                  inputArray={randomArray}/>)
  return(
      <div className="sortingAlgoPage">
        <Header inputArray={randomArray} />
        {algorithimList}
      </div>
  )
}

export default SortingAlgorithims