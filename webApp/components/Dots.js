const refreshPeriod = 400
const Dot = ({value}) => <div className="dot" style={{opacity:value/100}}></div>

function Dots({inputArray : sortingSteps}){
  const [index,setIndex] = React.useState(0)
  const [dots,setDots] = React.useState([])

  const nextStep = () => {
    setTimeout(() => {
      setDots(sortingSteps[index].map((element,index) => <Dot key={index} value={element}/>))
      setIndex(index + 1 < sortingSteps.length? index + 1 : 0)
      },refreshPeriod
    )
  }

  React.useEffect(nextStep,[index])

  return(
    <div className="dotContainer">
        {dots}
    </div>
  )
}
export default Dots