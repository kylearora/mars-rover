import React, {Component} from 'react'

class GetImageButton extends Component {
  render () {
    return (
      <div>
        <button className="submitButton" onClick={this.props.fetchRoverImage}>Submit</button>
      </div>
    )
  }
}


export default GetImageButton
