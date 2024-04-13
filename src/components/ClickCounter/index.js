import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}
  onIncreament = () => {
    this.setState(prevState => {
      return {count: prevState.count + 1}
    })
  }
  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">
          The Button has been clicked <br /> {count} times
        </h1>
        <p className="para">Click the button to increase the count!</p>
        <button className="button" onClick={this.onIncreament}>
          Click Me
        </button>
      </div>
    )
  }
}

export default ClickCounter
