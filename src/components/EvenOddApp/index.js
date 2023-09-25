// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onIncrement = () => {
    const randomNumber = this.getRandomNumber()

    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }

  render() {
    const {count} = this.state
    const displayText = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="app-container">
        <div className="count-container">
          <h1 className="count-heading">Count {count}</h1>
          <p className="count-category"> Count is {displayText}</p>
          <button
            className="increment-button"
            type="button"
            onClick={this.onIncrement}
          >
            Increment
          </button>
          <p className="note">*Increase By Random Number Between 0 to 100000</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
