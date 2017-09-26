import React, {Component} from 'react'

class ImageDisplay extends Component {
  render() {
    const images = this.props.images.map(image => {
      return (
        <div className="imageDisplay" key={image.id}>
          <img className="image" src={image.img_src} alt="this is a space pic"/>
        </div>
      )
    })
    return(
      <div >
        {images}
      </div>
    )
  }
}


export default ImageDisplay
