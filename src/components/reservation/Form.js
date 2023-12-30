import React, { useState } from 'react';
import './Form.css';
import axios from 'axios';

function Form() {
    const [value, setvalue] = useState({
        name: '',
        email: '',
        date: '',
        time: '',
        people: '',
    });

    const nameChange = (event) => {
        setvalue((prevalue) => {
            return { ...prevalue, name: event.target.value };
        });
    };

    const emailChange = (event) => {
        setvalue((prevalue) => {
            return { ...prevalue, email: event.target.value };
        });
    };

    const dateChange = (event) => {
        setvalue((prevalue) => {
            return { ...prevalue, date: event.target.value };
        });
    };

    const timeChange = (event) => {
        setvalue((prevalue) => {
            return { ...prevalue, time: event.target.value };
        });
    };

    const peopleChange = (event) => {
        setvalue((prevalue) => {
            return { ...prevalue, people: event.target.value };
        });
    };

    const clickSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/api/reservation', {
                name: value.name,
                email: value.email,
                date: value.date,
                time: value.time,
                people: value.people,
            });

            if (response.status === 201) {
                alert('Reservation submitted successfully!');
            } else {
                alert('Failed to submit reservation. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting reservation:', error);
            alert('An error occurred. Please try again later.');
        }
    };

    return (
        <div className="reservation__form">
            <div className="reservation__content">
                <h3>Reservation</h3>
                <h1>Book Your Table</h1>
            </div>

            <div className="form__container">
                <form className="container-form" onSubmit={clickSubmit}>
                    <div className="left__form">
                        <input
                            type="text"
                            name="name"
                            id="name"
                            onChange={nameChange}
                            required
                            placeholder="Name"
                            value={value.name}
                        />
                        <input
                            type="date"
                            name="date"
                            id="date"
                            onChange={dateChange}
                            required
                            placeholder="Date"
                            value={value.date}
                        />
                        <input
                            type="text"
                            name="people"
                            id="people"
                            onChange={peopleChange}
                            required
                            placeholder="People"
                            value={value.people}
                        />
                    </div>
                    <div className="right__form">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            onChange={emailChange}
                            required
                            placeholder="Email"
                            value={value.email}
                        />
                        <input
                            type="time"
                            name="time"
                            id="time"
                            onChange={timeChange}
                            required
                            placeholder="Time"
                            value={value.time}
                        />
                        <button className="submit" type="submit">
                            Find a Table
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Form;
