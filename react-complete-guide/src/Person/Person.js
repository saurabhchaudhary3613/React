import React from 'react';
import Person from './Person.css';

const person = (props) => {
    console.log(props);
    return (
        <div className='person'>
            <p  onClick={props.click}>I am { props.name } and I am { props.age } years old..!</p>
            <p onClick={props.switchName}>
            {props.children}
            </p>
            <input type="text" onChange={props.changeName} value={props.name}/>
        </div>
    )
}

export default person;