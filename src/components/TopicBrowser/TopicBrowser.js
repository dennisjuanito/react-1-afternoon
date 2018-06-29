import React, { Component } from 'react';
import EvenAndOdd from "../Topics/EvenAndOdd.js";
import Palindrome from "../Topics/Palindrome.js";
import FilterObject from "../Topics/FilterObject";
import FilterString from "../Topics/FilterString";
import Sum from "../Topics/Sum";


export default class TopicBrowser extends Component {
    render() {
        return (
            <div>
                <EvenAndOdd />
                <Palindrome />
                <FilterObject />
                <FilterString />
                <Sum />
            </div>
        )
    }
   
}
