import React, { useState } from 'react';
import Tab from "../tabs/Tab";
import TabContent from "../tabs/TabContent";
import '../../css/tabs/Tabs.css';

function Tabs({ projects }) {
    let defaultContent = projects[0];
    const [activeContent, setActiveContent] = useState(defaultContent);

    return (
        <div className="tabs">
            <div className="tabs-title-container" >
                {projects.map(project => {
                    return (
                        <div key={project.title} >
                            <Tab
                                setActiveContent={setActiveContent}
                                activeContent={activeContent}
                                title={project.title}
                                content={project} />
                        </div>
                    );
                })}
            </div>
            <TabContent activeContent={activeContent} />
        </div>
    );
};
export default Tabs; 