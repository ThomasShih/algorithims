const refreshPeriod = 400

class Dot extends React.Component{
    render(){
      return(
        <div className="dot" style={{height:this.props.height}}></div>
      )
    }
  }

class Dots extends React.Component{
  constructor(props){super()
    this.state={sortingSteps:props.inputArray,
                currentArray:props.inputArray[0],
                index:0}
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState(state => ({
                                                              index: state.index < state.sortingSteps.length - 1? state.index + 1: 0,
                                                              currentArray: state.sortingSteps[state.index]
                                                            })), refreshPeriod)
  }

  render(){
      let dots = this.state.currentArray.map((element,index) => <Dot height={this.state.currentArray[index]}/>)
      return(
      <div className="dotContainer">
          {dots}
      </div>
  )};
}

export default Dots