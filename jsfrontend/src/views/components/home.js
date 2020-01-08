import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel'

export default class Home extends Component {

  render(){
    return(<div>
      <h1>Welcome</h1>
      <Carousel>
        <Carousel.Item>
          <img className="carouselImage" src="./coral.jpeg" alt="First Slide"/>
        </Carousel.Item>
        <Carousel.Item>
          <img className="carouselImage" src="./blackskirt.jpeg" alt="Second Slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="carouselImage" src="./Koi.jpeg" alt="Third Slide" />
        </Carousel.Item>
      </Carousel>
    </div>)
  }
}
