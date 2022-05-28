//WHEN I am presented with the Contact section
//THEN I see a contact form with fields for a name, an email address, and a message
//WHEN I move my cursor out of one of the form fields without entering text
//THEN I receive a notification that this field is required
//WHEN I enter text into the email address field
//THEN I receive a notification if I have entered an invalid email address
import React from 'react';
import './ContactMe.css';
import '../../Terminals/Terminal.css'

const ContactMe = () =>{
    return(
    <div className = "main">
        <form onSubmit={submit}className="contactForm">
            <h3>Contact Me</h3>
            <p>If you have a question or simply want to say hello.</p>
            <input data-testid='email' className="input" id="email" type="email" placeholder="Your Email"></input>
            <input data-testid='subject' className="input" id="subject" type="text" placeholder="What You Want to Talk About"></input>
            <textarea data-testid='text-box' id="content"></textarea>
            <input data-testid='submitButton' type="submit" className="Submit" value="Submit"></input>
        </form>
    </div>
    );
}

const submit = (e) =>{
    e.preventDefault();
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("content").value;

    if(email !== "" && subject !== "" && message !== ""){
        //need to add email API or backend server later
        alert("Email Sent Succesfully")
    }
    else{
        alert("Please fill in all Fields");
    }
}

export default ContactMe;