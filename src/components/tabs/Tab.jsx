import React from 'react';
import '../../css/tabs/Tab.css';

function Tab({ setActiveContent, activeContent, title, content }) {

    return (
        < div>
            <button className={activeContent === content
                ? 'tab-title-active' : 'tab-title'}
                onClick={() => setActiveContent(content)}>
                <span>{title}</span>
            </button>
        </div >
    );
}

export default Tab; 