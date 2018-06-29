import React, { Component } from 'react';

export default class Sum extends Component {
    constructor() {
        super();
        this.state = {
            number1: 0,
            number2: 0,
            sum    :null
        }
        
    }
    //racecar
    handleUserInput1(val) {
        this.setState({
            number1: val
        })
    }

    handleUserInput2(val) {
        this.setState({
            number2: val
        })
    }

    handleUserClick() {
        let sum = parseInt(this.state.number1) + parseInt(this.state.number2);
        this.setState({
            sum: sum
        })
    }

    //target classlist
    render() {
        return (
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine" onChange={(e) => this.handleUserInput1(e.target.value)} />
                <input className="inputLine" onChange={(e) => this.handleUserInput2(e.target.value)} />
                <button className="confirmationButton" onClick={() => this.handleUserClick()}>Add</button>
                <span className="resultsBox">Sum: {this.state.sum}</span>
            </div>
    )
  }
}
//onMouseOver={() => this.handleUserInputHover1()} 
//onMouseOver={() => this.handleUserInputHover2()}

