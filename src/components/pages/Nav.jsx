import React, { useState } from 'react';
import '../../css/pages/Nav.css'
import { menuData } from '../../mock/data.js';

function Nav({ setPage, loggedInUser }) {

    const [isMenuActive, setIsMenuActive] = useState(false);

    return (
        <div className="nav-box">
            <div className={isMenuActive ? 'nav-menu-open' : 'nav-menu-close'}>
                <a
                    className="skip-link"
                    href='#main-content'>
                    Skip to content
                </a>

                {!isMenuActive &&
                    <button
                        className='hamburger'
                        onClick={(e) => {
                            e.preventDefault();
                            setIsMenuActive(true);
                        }}>☰</button>
                }

                {isMenuActive && (
                    <div className='open-menu-box'>
                        <a
                            className="skip-link"
                            href='#main-content'>Skip to content
                        </a>
                        <button
                            className="closeBtn"
                            onClick={(e) => {
                                e.preventDefault();
                                setIsMenuActive(false);
                            }}>
                            X
                        </button>
                        <div className='menu-box'>
                            {Object.keys(menuData).map(key => {
                                return (
                                    <div className='menu-item-box' key={key} >
                                        <button className='menu-item-btn'
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setPage(menuData[key])
                                            }}>
                                            {menuData[key]}
                                        </button>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}

                <div className='larger-screen-menu-box'>
                    {Object.keys(menuData).map(key => {
                        return (
                            <div className='larger-screen-menu-item-box' key={key} >
                                <button
                                    className='larger-screen-menu-item-btn'
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setPage(menuData[key])
                                    }}>
                                    {menuData[key]}
                                </button>
                            </div>
                        );
                    })}
                </div>
                <button
                    className='loggedin-status'
                    onClick={(e) => {
                        e.preventDefault();
                        setPage('BLOG');
                    }}>
                    {loggedInUser === "" ? "Log In To See Blog" : "User: " + loggedInUser}
                </button>
            </div>
        </div >
    )
}

export default Nav;