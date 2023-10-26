import React, {useState} from 'react'
import './Form.css'

function Form() {
    const [value, setvalue] = useState({
        name: "",
        email: "",
        date: "",
        time: "",
        people: ""
    })

    console.log(value.name);
    console.log(value.email);
    console.log(value.date);
    console.log(value.time);
    console.log(value.people);

    const nameChange = (event) => {
        setvalue(prevalue => {
            return {...prevalue, name: event.target.value}
        })
    }

    const emailChange = (event) => {
        setvalue(prevalue => {
            return {...prevalue, email: event.target.value}
        })
    }

    const dateChange = (event) => {
        setvalue(prevalue => {
            return {...prevalue, date: event.target.value}
        })
    }

    const timeChange = (event) => {
        setvalue(prevalue => {
            return {...prevalue, time: event.target.value}
        })
    }

    const peopleChange = (event) => {
        setvalue(prevalue => {
            return {...prevalue, people: event.target.value}
        })
    }

    const clickSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        alert('You have submitted successfully');
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
                        <input type="text" name="name" id="name" onChange={nameChange} required placeholder="Name" value={value.name} />
                        <input type="date" name="date" id="date" onChange={dateChange} required placeholder="Date" value={value.date} />
                        <input type="text" name="people" id="people" onChange={peopleChange} required placeholder="people" value={value.people} />
                    </div>
                    <div className="right__form">
                        <input type="email" name="email" id="email" onChange={emailChange} required placeholder="Email" value={value.email} />
                        <input type="time" name="time" id="time" onChange={timeChange} required placeholder="Time" value={value.time} />
                        <button className="submit">find a table</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form
