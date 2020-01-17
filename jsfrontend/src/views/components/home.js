import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

 const Home = () => (<div>
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

export default Home
