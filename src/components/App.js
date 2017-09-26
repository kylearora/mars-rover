import React, { Component } from 'react';
import '../styles/App.css';
import GetImageButton from './GetImageButton.js'
import GetImageForm from './GetImageForm.js'
import ImageDisplay from './ImageDisplay.js'
const API_KEY = "yk0jyTpMwbAOpQudFbFi8bt7YSvSqg2jZUqwq18i"

class App extends Component {

constructor (props) {
  super(props)
  this.state = {
    rover: "Curiosity",
    camera: "FHAZ",
    images: [],
    sol: "",
  }
}

handleRover = (e) => {
  this.setState({
    rover: e.target.value
  })
}

handleCamera = (e) => {
  this.setState({
    camera: e.target.value
  })
}

handleSol = (e) => {
  this.setState({
    sol: e.target.value
  })
}


fetchRoverImage = () => {
  let cam = this.state.camera;
  let rove = this.state.rover;
  let num = this.state.sol;
  let imageUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rove}/photos?sol=${num}&camera=${cam}&api_key=${API_KEY}`;
  console.log(imageUrl);
  fetch(imageUrl)
  .then (r => r.json())
  .then (json => {
    console.log(json);
    console.log(json.photos);
    this.setState({
      images: json.photos,
    })
  })
}

  render() {
    return (
      <div>
        <div>
          <h2>Enter NASA Data below to view images from Mars!</h2>
        </div>
        <div className="form">
        <label htmlFor="rover">Rover</label>
        <select onChange={this.handleRover} id="rover" value={this.state.value}>
          <option value="Curiosity">Curiosity</option>
          <option value="Opportunity">Opportunity</option>
          <option value="Spirit">Spirt</option>
        </select>
        <label htmlFor="camera">Camera Type</label>
        <select onChange={this.handleCamera} id="rover" value={this.state.value}>
          <option value="fhaz">FHAZ (Front Hazard)</option>
          <option value="rhaz">RHAZ (Rear Hazard)</option>
          <option value="navcam">NAVCAM (Navigation Cam)</option>
        </select>
        <label htmlFor="sol">Martian Sol: 1000-2000</label>
        <input type="number" onChange={this.handleSol} max="2000" min="1000" value={this.state.value}/>
        </div>
        <GetImageForm>
          <div>
          <GetImageButton fetchRoverImage={this.fetchRoverImage}/>
          </div>
          <div>
          <ImageDisplay images={this.state.images}/>
          </div>
        </GetImageForm>
      </div>
    );
  }
}

export default App;
