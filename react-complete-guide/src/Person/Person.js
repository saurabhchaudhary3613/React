import React from 'react';
import styles from './Person.css';


const person = (props) => {
    console.log(props);
    // const style = {
    //     '@media (min-width: 500px)': {
    //         width: '450px'
    //     }
    // }
    return (
        <div className={styles.person}>
            <p  onClick={props.click}>I am { props.name } and I am { props.age } years old..!</p>
            <p onClick={props.switchName}>
            {props.children}
            </p>
            <input type="text" onChange={props.changeName} value={props.name}/>
        </div>
    )
}

export default person;