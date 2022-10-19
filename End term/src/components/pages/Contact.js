import React from 'react';
import styled from 'styled-components';

const Contact = () => {
    const Wrapper = styled.section`
    .container {
        text-align: left;
        color : white;

        .contact-form{
            max-width: 30rem;
            margin-left: 65%;
            margin-top: -48%;
        }

        .contact-inputs{
            display: flex;
            flex-direction: column;
            gap: 2.5rem;
        }
    }
    `;
  return (
    <Wrapper className='section'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d110128.38019647067!2d76.7500464489617!3d30.3932156474972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1665066476724!5m2!1sen!2sin"
        width="60%" 
        height="550" 
        style={{border:0}}
        allowFullScreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"></iframe>

        <div className="container">
            <div className="contact-form">
                <form action='#' className='contact-inputs'>
                    <h1>CONTACT US</h1>
                    <div className="inputBox">
                        <h5>Enter Username</h5>
                        <input type="text" name="username" placeholder="Enter Username" required/>
                    </div>
                    
                    <div className="inputBox">
                        <h5>Enter Email</h5>
                        <input type="email" name="email" placeholder="Enter Email" required/>
                    </div>

                    <div className="inputBox">
                    <h5>Enter Message</h5>
                        <textarea name='message' placeholder="Enter Message" required/>
                    </div>
                    
                    <div className="inputBox">
                        <input className='btn btn-primary' type="submit" />
                    </div>
                </form>
            </div>
        </div>
    </Wrapper>
  )
}
export default Contact;