import React, { useState } from 'react';
import '../../../css/pages/blog/BlogTwo.css'
import SliderTwo from '../../carousel/SliderTwo';
import { laData } from '../../../mock/data';

function BlogTwo({ setPage }) {
    const [la] = useState(laData);

    return (
        <div className='blog-two-box'>
            <div className='blog-two-back-btn'>
                <button
                    className='back-to-blog-btn'
                    onClick={(e) => {
                        e.preventDefault();
                        setPage('BLOG');
                    }}>
                    BACK
                </button>
            </div>

            <div className='blog-two-text'
                id='main-content'>
                <h4 className='blog-two-h4-title'>
                    {la.title}
                </h4>
                <div className='blog-two-date'>
                    {la.date}
                </div>
                <div className='blog-two-description'>
                    {la.description}
                </div>
                < SliderTwo />
            </div>
        </div>
    );
}

export default BlogTwo;
