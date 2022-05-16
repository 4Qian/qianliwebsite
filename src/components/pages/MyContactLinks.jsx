import React, { useState } from 'react';
import '../../css/pages/MyContactLinks.css';

function MyContactLinks({ setPage }) {

    const [isEmailActive, setIsEmailActive] = useState('false');
    const [isLinkedInActive, setIsLinkedInActive] = useState('false');

    return (
        <div className='footer-box'>
            <div className="contact-container">
                <div className='icons'>
                    <div className='mail-box'>
                        <button
                            className='mail-btn'
                            onClick={(e) => {
                                e.preventDefault();
                                setIsEmailActive('true');
                                window.location = 'mailto:2qianli.com@gmail.com'
                            }}>
                            @
                        </button>
                    </div>
                    <div className='linkedin'>
                        <button
                            className='linkedin-btn'
                            onClick={(e) => {
                                e.preventDefault();
                                setIsLinkedInActive('true');
                                window.location.href = 'https://www.linkedin.com/in/qian-li-341a3a192/'
                            }}>
                            In</button>
                    </div>
                </div>
                <div className='policy-container'>
                    <button
                        className='policy-btn'
                        onClick={(e) => {
                            e.preventDefault();
                            setPage('POLICY');
                        }}>
                        Privacy Policy
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MyContactLinks;