import React from 'react'
import Slider from 'react-slick';
import styled from 'styled-components';
//import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImgSlider() {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    }
    return (
        <Carousel {...settings} >
            <Wrap>
                <img src="/images/slider-badging.jpg" alt="" />
            </Wrap>
            <Wrap>
                <img src="/images/slider-badag.jpg" alt="" />
            </Wrap>
        </Carousel>

    )
}

export default ImgSlider

const Carousel = styled(Slider)`
margin-top : 10px;

ui li button {
    &:before {
        font-size : 10px;
        color : rgb(150,150,171);
    }
}

li.slick-active button::before {

    color : white;
}
button { 
    z-index : 1;
}
.slick-list {
    overflow : visible ;

}
`
const Wrap = styled.div`
cursor: pointer;
 img {
    width : 100%;
    height : 20%;
    border : 4px solid transparent;
    border-radius : 3px;
    box-shadow : rgb(0 0 0 / 69%) 0px 26px 30px -10px, 
    rgb(0 0 0 /73%) 0px 16px 10px -10px;
    transition-duration : 300ms;
    //overflow-x : hidden;
    &:hover {
        border : 4px solid rgb(249,249,249,0.8);
    }
 }



`