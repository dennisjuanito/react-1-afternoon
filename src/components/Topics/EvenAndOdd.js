import React, { Component } from 'react';

export default class EvenAndOdd extends Component {
    constructor() {
        super();
        this.state = {
            evenArray : [],
            oddArray  : [],
            userInput : ''
        }
    }

    handleUserInput(val) {
        this.setState({
            userInput : val  
        });
    }

    handleUserClick(val) {
        /* if (this.state.userInput % 2 === 0) {
            let newArrayEven = this.state.evenArray.slice(0);
            newArrayEven.push(val);
            this.setState({evenArray: newArrayEven});
        } else { // user input is odd
            let newArrayOdd = this.state.oddArray.slice(0);
            newArrayOdd.push(val);
            this.setState({oddArray: newArrayOdd});
        }  
 */
        let newArray = this.state.userInput.split(",");
        let newEvenArray = [];
        let newOddArray = [];

        for (let i = 0; i < newArray.length; i++) {
            if (newArray[i] % 2 === 0) {
                newEvenArray.push(newArray[i]);
            } else { // user input is odd
                newOddArray.push(newArray[i]);
            }          
        }
        this.setState({evenArray: newEvenArray});
        this.setState({oddArray: newOddArray});


    }


  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>
        <input className="inputLine" onChange={(e) => this.handleUserInput(e.target.value)} />
        <button className="confirmationButton" onClick={() => this.handleUserClick(this.state.userInput)}>Split</button>
        <span className="resultsBox"> Evens: {JSON.stringify(this.state.evenArray)}</span>
        <span className="resultsBox"> Odd: {JSON.stringify(this.state.oddArray)}</span>
      </div>

    )
  }
}


