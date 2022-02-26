import React from 'react'
import Input from '../Input/Input';
import "./Form.scss";
import 'animate.css';


export default function Form() {
  return (
        <form className="form animate__animated animate__fadeInUpBig" action="https://formsubmit.co/enrique.barco96@hotmail.com" method="POST">
            <h1 className="form__title">Thanks for taking the time to reach out. How can I help you today?</h1>
            <Input 
                type="email" 
                name="email" 
                label="Email"/>
            <Input 
                type="text"
                name="name"
                label="Full Name"
            />
            <div className="input">
                <label htmlFor="textbox" className="input__label">
                    Message
                </label>
                <textarea type="text" id="textarea" name="textarea" className="form__textarea" />
            </div>
            <button className="form__button">Submit</button>
        </form>
  )
}
