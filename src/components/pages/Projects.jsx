import React, { useState } from 'react';
import { projectsData } from '../../mock/data';
import Tabs from '../../components/tabs/Tabs';
import '../../css/pages/Projects.css';

function Projects() {

    const [projects] = useState(projectsData);

    return (
        <div className='projects-box'>
            <h2
                className='projects-title'
                id='main-content'>Projects</h2>
            <Tabs projects={projects} />
        </div>
    );
}

export default Projects;
