import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from './../../assets/images-20250124T175303Z-001/images/banner-4.jpeg'
import img2 from './../../assets/images-20250124T175303Z-001/images/blog-img-2.jpeg'
import img3 from './../../assets/images-20250124T175303Z-001/images/slider-image-2.jpeg'
import img4 from './../../assets/images-20250124T175303Z-001/images/slider-2.jpeg'
import img5 from './../../assets/images-20250124T175303Z-001/images/slider-image-3.jpeg'
import img6 from './../../assets/images-20250124T175303Z-001/images/grocery-banner-2.jpeg'




export default function HomeSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,

    };
    return (
        <div className="p-5 shadow-yellow-600 flex ">
            <div className="w-3/4">
                <Slider {...settings}  >
                    <div>
                        <img className="w-full  h-72" src={img1} alt="a" />
                    </div>
                    <div>
                        <img className="w-full  h-72" src={img2} alt="a" />
                    </div>
                    <div>
                        <img className="w-full  h-72" src={img3} alt="a" />
                    </div>
                    <div>
                        <img className="w-full  h-72" src={img4} alt="a" />
                    </div>
                    <div>
                        <img className="w-full  h-72" src={img5} alt="a" />
                    </div>
                    <div>
                        <img className="w-full  h-72" src={img6} alt="a" />
                    </div>
                </Slider>
            </div>




            <div className="w-1/4">

                <img className="w-full h-36 block" src={img2} alt="" />
                <img className="w-full h-36 block" src={img3} alt="" />
            </div>
        </div>
    );
}