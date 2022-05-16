import React, { useState } from "react";
import { lasVegesImageData } from '../../mock/data';
import '../../css/carousel/sliderOne.css';

function SliderOne() {
    const [current, setCurrent] = useState(0);
    const [images] = useState(lasVegesImageData);
    const length = images.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    return (
        <div className='slider-container' aria-label="carousel">
            <div>
                <button
                    className='push-chevron-left-btn'
                    onClick={prevSlide}
                    aria-hidden="true">
                    {'<'}
                </button>
            </div>

            <div className='slider-imgs-container' >
                {images.map((slide, index) => {
                    return (
                        < div
                            key={index}
                            className={index === current ? 'current-img' : 'hidden-img'}
                            aria-current={index === current ? 'true' : 'false'}
                            role="group"
                            aria-label={`slide ${index} of ${length}`}>
                            <img className='slider-img'
                                src={slide.image}
                                alt="img" />
                        </div>
                    );
                })}
            </div>

            <div>
                <button className='push-chevron-right-btn'
                    onClick={nextSlide}
                    aria-hidden="true">{'>'}
                </button>
            </div>
        </div>
    );
}

export default SliderOne;