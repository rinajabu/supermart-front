import React from 'react'
import './TopCarousel.css'
import Carousel from 'react-bootstrap/Carousel'

const TopCarousel = (props) => {
    return (
    <Carousel>
        <Carousel.Item className="topcarousel_item">
            <img
            className="topcarousel_img"
            src="https://images.everydayhealth.com/images/diet-nutrition/all-about-bananas-nutrition-facts-health-benefits-recipes-and-more-rm-722x406.jpg"
            alt="First slide"
            />
            <Carousel.Caption>
            <div className="topcarousel_captionContainer">
                <h3 className="topcarousel_caption">SuperMart</h3>
                <p className="topcarousel_caption">Your Place to Shop Groceries</p>
            </div>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="topcarousel_img"
            src="https://www.abc.net.au/news/image/893500-3x2-700x467.jpg"
            alt="Second slide"
            />
            <Carousel.Caption>
            <div className="topcarousel_captionContainer">
                <h3 className="topcarousel_caption">Great Deals On All Produce</h3>
            </div>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="topcarousel_img"
            src="https://d2j6dbq0eux0bg.cloudfront.net/images/27824195/1386549657.jpg"
            alt="Third slide"
            />
            <Carousel.Caption>
            <div className="topcarousel_captionContainer">
                <h3 className="topcarousel_caption">Fresh Produce Delivered Daily</h3>
            </div>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    )
}

export default TopCarousel
