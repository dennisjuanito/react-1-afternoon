import React, { Component } from 'react';

export default class Palindrome extends Component {
    constructor() {
        super();
        this.state = {
            userInput  : '',
            palindrome : ""
        }
        
    }
    //racecar
    handleUserInput(val) {
        this.setState({
            userInput: val
        })
    }

    handleUserClick() {
        let newPalindrome = "true";
        let palindromeArr = this.state.userInput.split("");
        for (let i = 0; i < palindromeArr.length / 2; i++) {
            if (palindromeArr[i] !== palindromeArr[palindromeArr.length - i - 1]) {
                this.setState({
                    palindrome: false
                })
                return;
            }  
        }
        this.setState({
            palindrome: newPalindrome
        })
    }
    //target classlist
    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input className="inputLine" onChange={(e) => this.handleUserInput(e.target.value)} />
                <button className="confirmationButton" onClick={() => this.handleUserClick()}>Filter</button>
                <span className="resultsBox filterStringRB">Palindrome: {JSON.stringify(this.state.palindrome)}</span>
            </div>
    )
  }
}


