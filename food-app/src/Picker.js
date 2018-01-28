import React, { Component } from 'react';
import logo from './logo.svg';
import './Picker.css';

class Picker extends Component {

	dislikes = [];
	likes = [];

	dislikeItem(item) {
		// add item to dislikes
		dislikes += item;
	}

	likeItem(item) {
		// add item to likes
		likes += item;
	}

	include(arr,obj) {
    	return (arr.indexOf(obj) != -1);
	}

	finalScoring(listOfRest) {
		finalList = [];
		for (rest in listOfRest) {
			if (this.include(likes, rest) && !this.include(dislikes, rest)) {
				// if you found something you liked from the restaurant
				// and did not find something you didn't like
				// to be implemented better
				finalList += rest;
			}
		}
		return finalList;
	}


	render() {
		return (
				<img src="./local_image.jpg" className="picker-image"></img>
				<input type="submit" value="Dislike"></input>
				<input type="submit" value="Like"></input>
			);
	}
}