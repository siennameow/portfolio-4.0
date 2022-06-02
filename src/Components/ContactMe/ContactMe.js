//WHEN I am presented with the Contact section
//THEN I see a contact form with fields for a name, an email address, and a message
//WHEN I move my cursor out of one of the form fields without entering text
//THEN I receive a notification that this field is required
//WHEN I enter text into the email address field
//THEN I receive a notification if I have entered an invalid email address
import React, { useState } from "react";
import "./ContactMe.css";
import "../../Terminals/Terminal.css";
import { validateEmail, validateText } from "../../Resources/util/helpers";

const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [errorName, setErrorName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.id;
    const inputValue = target.value;

    if (inputType === "name") {
      setName(inputValue);
      if (!validateText(inputValue)) {
        setErrorName("Please enter a name.");
      } else {
        setErrorName("");
      }
    } else if (inputType === "email") {
      setEmail(inputValue);
      if (!validateEmail(inputValue)) {
        setErrorEmail("Please enter a valid email.");
      } else {
        setErrorEmail("");
      }
    } else {
      setMessage(inputValue);
      if (!validateText(inputValue)) {
        setErrorMessage("Please leave a message.");
      } else {
        setErrorMessage("");
      }
    }
  };
  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    let error = false;
    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateText(name)) {
      setErrorName(`Please enter a name.`);
      error = true;
    }

    if (!validateEmail(email)) {
      setErrorEmail("Please enter a valid email.");
      error = true;
    }
    if (!validateText(message)) {
      setErrorMessage(`Please leave a message.`);
      error = true;
    }

    if (error) {
      return;
    }

    setName("");
    setEmail("");
    setMessage("");
    alert("Email generated");
  };
  return (
    <div className="main">
      <form className="contactForm form">
        <h3>Contact Me</h3>
        <p>If you have a question or simply want to say hello.</p>
        <input
          data-testid="name"
          className="input"
          value={name}
          id="name"
          type="text"
          placeholder="Your Name"
          onChange={handleInputChange}
          onBlur={handleInputChange}
        ></input>
        <p>
          {errorName && (
            <span className="error-text text-danger">{errorName}</span>
          )}
        </p>
        <input
          data-testid="email"
          className="input"
          value={email}
          id="email"
          type="email"
          placeholder="Your Email"
          onChange={handleInputChange}
          onBlur={handleInputChange}
        ></input>
        <p>
          {errorEmail && (
            <span className="error-text text-danger">{errorEmail}</span>
          )}
        </p>
        <textarea
          data-testid="text-box"
          value={message}
          id="message"
          placeholder="Your Message"
          type="text"
          onChange={handleInputChange}
          onBlur={handleInputChange}
        ></textarea>
        <p>
          {errorMessage && (
            <span className="error-text text-danger">&nbsp;{errorMessage}</span>
          )}
        </p>
        <input
          data-testid="submitButton"
          type="submit"
          className="Submit"
          value="Submit"
          onClick={handleFormSubmit}
        ></input>
      </form>
    </div>
  );

  // return(
  // <div className = "main">
  //     <form onSubmit={submit}className="contactForm">
  //         <h3>Contact Me</h3>
  //         <p>If you have a question or simply want to say hello.</p>
  //         <input data-testid='name' className="input" id="name" type="text" placeholder="Your Name"></input>
  //         <input data-testid='email' className="input" id="email" type="email" placeholder="Your Email"></input>
  //         <textarea data-testid='text-box' id="content" placeholder="Talk About Anything"></textarea>
  //         <input data-testid='submitButton' type="submit" className="Submit" value="Submit"></input>
  //     </form>
  // </div>
  // );
};

// const submit = (e) =>{
//     e.preventDefault();
//     let email = document.getElementById("email").value;
//     let name = document.getElementById("name").value;
//     let message = document.getElementById("content").value;

//     if(email !== "" && name !== "" && message !== ""){
//         //need to add email API or backend server later
//         alert("Email Sent Succesfully")
//     }
//     else{
//         alert("Please fill in all Fields");
//     }
// }

export default ContactMe;
