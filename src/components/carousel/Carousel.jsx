import React, { Component } from "react";
import Slider from "react-slick";
import Header from "../header/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Carousel extends Component {
    render() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };
    return (
        <>
        <Header/>
            <div className="flex flex-col justify-center items-center
            bg-[#111] w-11/12 mx-auto rounded pt-8 pb-14">
                <h2 className="text-white mb-10"> Relógios em destaque </h2>
                <Slider className="w-10/12 h-40 lg:h-80 mx-auto" {...settings}>
                <div className='h-40 lg:h-80 flex justify-center items-center' >
                    <div className="
                    hr bg-[url('https://cdn.pixabay.com/photo/2017/06/14/01/08/hours-2400708_640.jpg')] 
                    w-11/12 mx-auto h-full bg-green-600 rounded-xl"></div>
                </div>
                <div className='h-40 lg:h-80 flex justify-center items-center' >
                    <div className="
                    hr bg-[url('https://cdn.pixabay.com/photo/2014/07/31/23/00/wristwatch-407096_640.jpg')]
                    w-11/12 mx-auto h-full bg-green-600 rounded-xl"></div>
                </div>
                <div className='h-40 lg:h-80 flex justify-center items-center' >
                    <div className="
                    hr bg-[url('https://cdn.pixabay.com/photo/2016/03/27/17/21/wristwatch-1283184_640.jpg')]
                    w-11/12 mx-auto h-full bg-green-600 rounded-xl"></div>
                </div>
                <div className='h-40 lg:h-80 flex justify-center items-center' >
                    <div className="
                    hr bg-[url('https://cdn.pixabay.com/photo/2018/01/18/19/06/time-3091031_640.jpg')]
                    w-11/12 mx-auto h-full bg-green-600 rounded-xl"></div>
                </div>
                <div className='h-40 lg:h-80 flex justify-center items-center' >
                    <div className="
                    hr bg-[url('https://cdn.pixabay.com/photo/2018/02/24/20/39/clock-3179167_640.jpg')]
                    w-11/12 mx-auto h-full bg-green-600 rounded-xl"></div>
                </div>
                <div className='h-40 lg:h-80 flex justify-center items-center' >
                    <div className="
                    hr bg-[url('https://cdn.pixabay.com/photo/2016/04/13/16/21/watch-1327169_1280.jpg')]
                    w-11/12 mx-auto h-full bg-green-600 rounded-xl"></div>
                </div>
                <div className='h-40 lg:h-80 flex justify-center items-center' >
                    <div className="
                    hr bg-[url('https://cdn.pixabay.com/photo/2016/04/13/16/19/breitling-1327165_640.jpg')]
                    w-11/12 mx-auto h-full bg-green-600 rounded-xl"></div>
                </div>
                <div className='h-40 lg:h-80 flex justify-center items-center' >
                    <div className="
                    hr bg-[url('https://cdn.pixabay.com/photo/2017/02/03/22/41/pocket-watch-2036309_640.jpg')]
                    w-11/12 mx-auto h-full bg-green-600 rounded-xl"></div>
                </div>
                <div className='h-40 lg:h-80 flex justify-center items-center' >
                    <div className="
                    hr bg-[url('https://cdn.pixabay.com/photo/2017/02/01/18/32/pocket-watch-2031021_640.jpg')]
                    w-11/12 mx-auto h-full bg-green-600 rounded-xl"></div>
                </div>
                </Slider>
            </div>
        </>
        );
    }
}