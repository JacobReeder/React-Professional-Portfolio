import React, { useState } from 'react'; 
import background from "../../assets/Projects/fog.jpg"

function Contact() {
    
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const { name, email, message } = formState;
    
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value })
  }
     
      

  return (

        <section>
              <h1 data-testid="h1tag" style={{ backgroundImage: `url(${background})` }}>Contact Me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
       
        <div>
          <ul>
              <li><label htmlFor="name">Name:</label>
               <input type="text" defaultValue={name} onChange={handleChange} name="name" /></li>
           </ul>
        </div>
        
        <div>
          <ul>
        <li><label htmlFor="email">Email address:</label>
        <input type="email" defaultValue={email} onChange={handleChange} name="email"/></li>
        </ul>
        </div>
        
        <div>
       <ul>
        <label htmlFor="message">Message:</label>
        <textarea name="message" defaultValue={message} onChange={handleChange} rows="5"  />
        </ul>
        </div>
        <button type="submit">Submit</button>
        
      </form>

        </section>
    );
}

export default Contact; 