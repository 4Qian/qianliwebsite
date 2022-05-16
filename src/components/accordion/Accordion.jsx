import React, { useState } from 'react';
import { skillsetsData } from '../../mock/data';
import '../../css/accordion/accordion.css';

function Accordion() {
    const [isEntryOpen, setIsEntryOpen] = useState({});

    function toggleEntry(title) {
        setIsEntryOpen({
            ...isEntryOpen,
            [title]: !isEntryOpen[title],
        });
    }

    return (
        <div className="accordion">
            {Object.keys(skillsetsData).map(title => {
                const isOpen = isEntryOpen[title];
                return (
                    <div
                        key={title}
                        className={`accordion__entry ${isOpen ? 'accordion__entry--open' : ''}`}>
                        <div className="">
                            <button
                                className="accordion__title"
                                onClick={() => toggleEntry(title)}>
                                {title}
                            </button>
                        </div>
                        <div className="accordion__body">{skillsetsData[title]}</div>
                    </div>
                );
            })}
        </div>
    );
};
export default Accordion;