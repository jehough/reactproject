import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import {Link} from 'react-router-dom'

 const Home = () => (<div>
      <h1>Welcome</h1>
      <Carousel>
        <Carousel.Item>
          <Link to={{pathname:"/categories/5",
                    state: {
                      id: 5,
                      url: `http://localhost:4000/categories/5`,
                      name: "Coral and Live Rock"}
                    }}><img className="carouselImage" src="./coral.jpeg" alt="First Slide"/></Link>
        </Carousel.Item>
        <Carousel.Item>
        <Link to={{pathname:"/categories/1",
                  state: {
                    id: 1,
                    url: `http://localhost:4000/categories/1`,
                    name: "Community Fish"}
                  }}><img className="carouselImage" src="./blackskirt.jpeg" alt="Second Slide" /></Link>
        </Carousel.Item>
        <Carousel.Item>
        <Link to={{pathname:"/categories/6",
                  state: {
                    id: 6,
                    url: `http://localhost:4000/categories/6`,
                    name: "Koi"}
                  }}>
          <img className="carouselImage" src="./Koi.jpeg" alt="Third Slide" /></Link>
        </Carousel.Item>
      </Carousel>
    </div>)

export default Home
