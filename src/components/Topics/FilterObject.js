import React, { Component } from 'react';

export default class FilterObject extends Component {
    constructor() {
        super();
        this.state = {
            unFilteredArray:  [ { "name": "Jimmy Joe", "title": "Hack0r", "age": 12 }, 
                                { "name": "Jeremy Schrader", "age": 24, "hairColor": "brown" }, 
                                { "name": "Carly Armstrong", "title": "CEO" } ],
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
        let newArray = [];
        for (let i = 0; i < this.state.unFilteredArray.length; i++) {
            for (let prop in this.state.unFilteredArray[i]) {
                if (prop === this.state.userInput) {
                    newArray.push(this.state.unFilteredArray[i]);
                }
            }
        }
        this.setState({
            filteredArray: newArray
        })

    }
    //target classlist
    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">ORIGINAL: {JSON.stringify(this.state.unFilteredArray, null, 10)}</span>
                <input className="inputLine" onChange={(e) => this.handleUserInput(e.target.value)} />
                <button className="confirmationButton" onClick={() => this.handleUserClick()}>Filter</button>
                <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredArray)}</span>
            </div>
    )
  }
}


