import React, { Component } from 'react';

export default class FilterString extends Component {
    constructor() {
        super();
        this.state = {
            unFilteredArray: [ "James", "Jessica", "Melody", "Tyler", "Blake", "Jennifer", "Mark", "Maddy" ],
            userInput      : '',
            filteredArray  : []
        }
        
    }
    handleUserInput(val) {
        this.setState({
            userInput: val
        })
    }

    handleUserClick() {
        let newArr = this.state.unFilteredArray.filter((element) => element.indexOf(this.state.userInput) !== -1);
        this.setState({
            filteredArray: newArr
        })
    }
    //target classlist
    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">ORIGINAL: {JSON.stringify(this.state.unFilteredArray, null, 10)}</span>
                <input className="inputLine" onChange={(e) => this.handleUserInput(e.target.value)} />
                <button className="confirmationButton" onClick={() => this.handleUserClick()}>Filter</button>
                <span className="resultsBox filterStringRB">Filtered Names: {JSON.stringify(this.state.filteredArray)}</span>
            </div>
    )
  }
}


