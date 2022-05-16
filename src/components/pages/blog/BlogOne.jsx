import React, { useState } from 'react';
import '../../../css/pages/blog/BlogOne.css'
import SliderOne from '../../carousel/SliderOne';
import { lasVegesData } from '../../../mock/data';

function BlogOne({ setPage }) {
    const [lasVegas] = useState(lasVegesData);

    return (
        <div className='blog-one-box'>
            <div className='blog-one-back-btn'>
                <button
                    className='back-to-blog-btn'
                    onClick={(e) => {
                        e.preventDefault();
                        setPage('BLOG');
                    }}>
                    BACK
                </button>
            </div>

            <div className='blog-one-text'>
                <h4 className='blog-one-h4-title'
                    id='main-content'>
                    {lasVegas.title}
                </h4>
                <div className='blog-one-date'>
                    {lasVegas.date}
                </div>
                <div className='blog-one-description'>
                    {lasVegas.description}
                </div>
                < SliderOne />
            </div>
        </div>
    );
}

export default BlogOne;
