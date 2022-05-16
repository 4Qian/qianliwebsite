import React from 'react';
import '../../css/tabs/TabContent.css';

function TabContent({ activeContent }) {

    return (
        <div className="active-content">
            {activeContent.description}
            <div className='project-img-box' >
                <img className='project-img'
                    src={activeContent.image}
                    alt="img">
                </img>
            </div>
        </div>
    );
}

export default TabContent;








