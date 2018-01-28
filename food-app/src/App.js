import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  checkZip(zip) {
    return (zip > 9999 && zip < 100000)
  }

  setPickerZip(zipcode) {
    // set the picker with rests from zip code
    console.log(zipcode);
  }
  
  getRestaurantPicker() {
    console.log("in getRestaurantPicker")
      if (navigator.geolocation) {
        console.log("yes")
        navigator.geolocation.getCurrentPosition(function (location) {
          // set the picker with rests from location services (lat, long)
          var lat = location.coords.latitude;
          var long = location.coords.longitude;
          console.log(lat);
          console.log(long)
        });
      }
      else {
        console.log("no")
        var bool = true
        var zip = null
        while (bool) {
          zip = prompt("Please enter your zip code", "78705");
          if (this.checkZip(zip)) {
            bool = false;
          }
        }
        this.setPickerZip(zip);
      }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to FoodPls</h1>
        </header>
        <p className="picker-start">
          To get started, click here: <input type="submit" value="Start" onClick={this.getRestaurantPicker}></input>
        </p>
      </div>
    );
  }
}

export default App;
