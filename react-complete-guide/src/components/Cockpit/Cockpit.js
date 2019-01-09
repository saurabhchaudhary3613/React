import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    const assignedclasses = [];
    // let btnClass = '';
    
    if(props.showPersons) {
        // btnClass =  classes.red;
    }

    if(props.persons.length <=2) {
      assignedclasses.push(classes.red);
    }
    if(props.persons.length <=1) {
      assignedclasses.push(classes.bold);
    }
    return (
        <div className={classes.Cockpit}>
        <h1>{props.appTitle}</h1>
        <p className={assignedclasses.join(' ')}>This is working</p>
          {/* <button style={btnStyle} onClick={ () => this.switchNameHandler('Differt syntex') } >Switch Name</button> */}
          <button className={classes.btnStyle}
          onClick={props.clicked } >
            Switch Name
          </button>
          { <button onClick={props.login}>Login</button> }
        </div>
    )
};

export default cockpit;