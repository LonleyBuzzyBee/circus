import React, { useState } from "react";
import axios from 'axios';


function Contact_form(){

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [status, setStatus] = useState('');

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    async function handleSubmit(event) {
        event.preventDefault();
        setStatus('Sending...');

        try {
            await axios.post('http://localhost:3000/send-email', formData);
            setStatus('Message sent!');
            setFormData({ name: '', email: '', message: ''});
        } catch (error) {
            console.error(error);
            setStatus('Failed to send message.');
        }
        
    }



    return(
        <div className="contact-form-container">
            <div className="contact-form-title">
                <h3>Inquire for Booking</h3>
            </div>
            <div className="contact-form">
                <form onSubmit={handleSubmit}>
                    <label>Name</label>
                    <input
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                 />
                    <label>Email</label>
                    <input
                    name="email"
                    type="text"
                    value={formData.email}
                    onChange={handleChange}
                    required
                 />
                    <label>Message</label>
                    <input
                    className="message"
                    name="message"
                    type="text"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    />
                <button type="submit">Send</button>
                </form>
                {status && <p>{status}</p>}
            </div>
        </div>
    );

} export default Contact_form;