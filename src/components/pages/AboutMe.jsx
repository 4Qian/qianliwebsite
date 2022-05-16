import React, { useState } from 'react';
import { aboutMeData, coursesData } from '../../mock/data';
import '../../css/pages/AboutMe.css';
import Accordion from '../../components/accordion/Accordion';

function AboutMe() {
    const [aboutMe] = useState(aboutMeData);
    const [courses] = useState(coursesData);

    return (
        <div className="about-me-box" id='main-content'>
            <h2 className="about-me-title" >About Me</h2>
            <div className='about-me-container'>
                {Object.keys(aboutMe).map(key => {
                    return (
                        <div className='paragraph'
                            key={key} >
                            {aboutMe[key]}
                        </div>
                    );
                })}
            </div>
            <div className='ability-container'>
                <h3 className='skillsets-title'>Skillsets</h3>
                <div className='skillsets-container'>
                    <Accordion />
                </div >
                <h3 className='courses-title'>Courses</h3>
                <div className='courses' >
                    {Object.keys(courses).map(key => {
                        return (
                            <div className='course'
                                key={key} >
                                {courses[key]}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default AboutMe;