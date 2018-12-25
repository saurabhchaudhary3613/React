import React from 'react';
import Person from './Person.css';
import Radium from 'radium';

const person = (props) => {
    console.log(props);
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    }
    return (
        <div className='person' style={style}>
            <p  onClick={props.click}>I am { props.name } and I am { props.age } years old..!</p>
            <p onClick={props.switchName}>
            {props.children}
            </p>
            <input type="text" onChange={props.changeName} value={props.name}/>
        </div>
    )
}

export default Radium(person);