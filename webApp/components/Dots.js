const refreshPeriod = 400
const Dot = ({value}) => <div className="dot" style={{opacity:value/100}}></div>

function Dots({inputArray : sortingSteps}){
  const [index,setIndex] = React.useState(0)
  const [dots,setDots] = React.useState([])
  let timeoutVar = null

  const refreshDisplay = () => setDots(sortingSteps[index].map((element,index) => <Dot key={index} value={element}/>))

  const incrementIndex = () => {
    timeoutVar = setTimeout(() => {setIndex(index + 1 < sortingSteps.length? index + 1 : 0)},refreshPeriod)
    return () => {clearTimeout(timeoutVar)} //In case the componet gets re-rendered, we need to remove the earlier timeout
  }

  const resetIndex = () => {
    setIndex(0)
    refreshDisplay() //in case useEffects are not triggered because array is of size 1
  }

  React.useEffect(resetIndex,[sortingSteps])
  React.useEffect(refreshDisplay,[index])
  React.useEffect(incrementIndex,[index])

  return(
    <div className="dotContainer">
        {dots}
    </div>
  )
}
export default Dots