import React from 'react';
import '../../css/pages/ContactMessages.css';

function ContactMessages({ contactMessages }) {
    return (
        <div className="contact-messages-box">
            {Object.keys(contactMessages).length === 0 ? 'No messages yet!' :
                <div>
                    All messages is shown below:
                    {Object.keys(contactMessages).map(key => {
                        return (
                            <div className='contact-message-details'
                                key={key} >
                                <div className='contact-message-identity'>
                                    USERNAME: {contactMessages[key][0]}
                                </div>
                                <div>
                                    EMAIL: {key}
                                </div>
                                <div className='contact-message'>
                                    MESSAGE: {contactMessages[key][1]}
                                </div>
                            </div>
                        );
                    })}
                </div>}
        </div>
    );
}

export default ContactMessages;
