import React, { useState } from 'react';
import '../../css/pages/ContactReceived.css';

function ContactReceived({ setPage, setIsSubmitted, username, email, message }) {

    const [name] = useState(username);
    const [contactEmail] = useState(email);
    const [contactMessage] = useState(message);

    return (
        <div className='feedback-received-box'>
            <div className='back-to-contact-box'>
                <button
                    className='back-to-contact-btn'
                    onClick={(e) => {
                        e.preventDefault();
                        setPage('CONTACT');
                        setIsSubmitted(false);
                    }}>
                    BACK TO CONTACT
                </button>
            </div>
            <div className="received-container">
                <div className='received-user-info-box'>
                    <h2 className='received-user-info-hi' id='main-content'>Hi, </h2>
                    <h2 className='received-user-info' > {name} ({contactEmail})</h2>
                </div>

                <h3 >We received your message: </h3>
                <span className='received-message'>{contactMessage}</span>
                <h3 className='received-thanks'>Thank You!</h3>
            </div>
        </div>
    );
}

export default ContactReceived;
