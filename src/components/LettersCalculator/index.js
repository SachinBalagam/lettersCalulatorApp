// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {searchInput: ''}

  onInputChange = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          <div className="content-container">
            <h1 className="title">Calculate the Letters you enter</h1>
            <label htmlFor="search-input" className="label">
              Enter the phrase
            </label>
            <input
              type="text"
              id="search-input"
              placeholder="Enter the phrase"
              className="input-bar"
              onChange={this.onInputChange}
              value={searchInput}
            />
            <p className="count">No.of letters: {searchInput.length}</p>
          </div>
          <div className="image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              alt="letters calculator"
              className="image"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
