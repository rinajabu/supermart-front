import React from 'react'
import './TopCarousel.css'
import Carousel from 'react-bootstrap/Carousel'

const TopCarousel = (props) => {
    return (
    <Carousel>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://images.everydayhealth.com/images/diet-nutrition/all-about-bananas-nutrition-facts-health-benefits-recipes-and-more-rm-722x406.jpg"
            alt="First slide"
            />
            {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://www.abc.net.au/news/image/893500-3x2-700x467.jpg"
            alt="Second slide"
            />
            {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/271157_2200-732x549.jpg"
            alt="Third slide"
            />
            {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption> */}
        </Carousel.Item>
    </Carousel>
    )
}

export default TopCarousel
