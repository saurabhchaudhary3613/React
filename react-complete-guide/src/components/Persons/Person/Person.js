import React, { Component } from 'react';
import styles from './Person.css';


class Person extends Component{

    render() {
        return <div className={styles.person}>
                <p  onClick={this.props.click}>I am { this.props.name } and I am {this.props.age } years old..!</p>
                <p onClick={this.props.switchName}>
                {this.props.children}
                </p>
                <input type="text" onChange={this.props.changeName} value={this.props.name}/>
            </div>
        
    }

}

export default Person;