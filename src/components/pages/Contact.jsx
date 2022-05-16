import React, { useState } from 'react';
import '../../css/pages/Contact.css';
import ContactReceived from './ContactReceived';
import ContactMessages from './ContactMessages';

function Contact({ setPage, contactMessages, setContactMessages }) {
    const [inputs, setInputs] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isViewAllActive, setIsViewAllActive] = useState(false);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsSubmitted(true);
        setContactMessages({
            ...contactMessages,
            [inputs.email]: [inputs.username, inputs.message]
        })
    }

    return (
        <div className='feedback-box'>
            <div >
                {!isSubmitted &&
                    <div className='contact-main-container'>
                        <div >
                            <h2 className='main-title' id='main-content' >Let's Talk!</h2>
                        </div>
                        <form className='form-container' onSubmit={handleSubmit}>
                            <span className='form-title'>Your Name</span>
                            <label>
                                <input
                                    type="text"
                                    name="username"
                                    value={inputs.username || ""}
                                    required
                                    onChange={handleChange}
                                />
                            </label>

                            <span className='form-title'>Your Email</span>
                            <label>
                                <input
                                    type="email"
                                    name="email"
                                    value={inputs.email || ""}
                                    required
                                    onChange={handleChange} />
                            </label>

                            <span className='form-title'>Message</span>
                            <span>
                                <textarea
                                    className='message-area'
                                    name='message'
                                    value={inputs.message || ""}
                                    placeholder='Leave me a message here...'
                                    required
                                    onChange={handleChange} />
                            </span>
                            <small>* indicates required field.</small>
                            <input
                                className='sub-btn'
                                type="submit" />
                        </form>
                        <button
                            className='view-all-messages-btn'
                            onClick={(e) => {
                                e.preventDefault();
                                setIsViewAllActive(!isViewAllActive);
                            }}>
                            Show/Hide All Messages
                        </button>
                        {isViewAllActive && <ContactMessages contactMessages={contactMessages} />}
                    </div>}
            </div>

            {isSubmitted && <ContactReceived
                setPage={setPage}
                setIsSubmitted={setIsSubmitted}
                username={inputs.username}
                email={inputs.email}
                message={inputs.message}
            />}
        </div>
    );
};

export default Contact;






