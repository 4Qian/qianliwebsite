import React, { useState } from 'react';
import '../../../css/pages/blog/Blog.css';
import { lasVegesData } from '../../../mock/data';
import { laData } from '../../../mock/data';
import Login from '../blog/Login';

function Blog({ setPage, loggedInUser, setLoggedInUser }) {
    const [lasVegas] = useState(lasVegesData);
    const [la] = useState(laData);

    return (
        <div className='blog-box'>
            {loggedInUser === "" &&
                <Login
                    setLoggedInUser={setLoggedInUser}
                    loggedInUser={loggedInUser} />}

            {loggedInUser !== "" &&
                <div>
                    <h2 className='blog-slogan'
                        id='main-content'>
                        Love Traveling, Love Life!
                    </h2>
                    <div className='blog-content-container'>
                        <div className='blog-text-container'>
                            <span className='blog-subtitle'>{lasVegas.title}</span>
                            <div className='blog-description'>{lasVegas.description}</div>
                        </div>
                        <button
                            className='blog-btn'
                            onClick={(e) => {
                                e.preventDefault();
                                setPage('BLOGONE');
                            }}>
                            Know More
                        </button>
                    </div>

                    <div className='blog-content-container'>
                        <div className='blog-text-container'>
                            <span className='blog-subtitle'>{la.title}</span>
                            <div className='blog-description'>{la.description}</div>
                        </div>
                        <button
                            className='blog-btn'
                            onClick={(e) => {
                                e.preventDefault();
                                setPage('BLOGTWO');
                            }}>
                            Know More
                        </button>
                    </div>
                </div>}
        </div>
    );
}

export default Blog;
