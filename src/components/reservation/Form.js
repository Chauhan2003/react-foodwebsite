import React from 'react'
import './Form.css'

function Form() {
    return (
        <div className="reservation__form">
            <div className="reservation__content">
                <h3>Reservation</h3>
                <h1>Book Your Table</h1>
            </div>

            <div className="form__container">
                <form className="container-form">
                    <div className="left__form">
                        <input type="text" name="name" id="name" required placeholder="Name" />
                        <input type="date" name="date" id="date" required placeholder="Date" />
                        <input type="text" name="people" id="people" required placeholder="people" />
                    </div>
                    <div className="right__form">
                        <input type="email" name="email" id="email" required placeholder="Email" />
                        <input type="time" name="time" id="time" required placeholder="Time" />
                        <button className="submit">find a table</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form
