import React, { Component } from 'react';
import styles from './Person.css';
import withClass from '../../../hoc/withClass';
import Aux1 from '../../../hoc/Aux1'


class Person extends Component{

    render() {
        return <Aux1>
                <p  onClick={this.props.click}>I am { this.props.name } and I am {this.props.age } years old..!</p>
                <p onClick={this.props.switchName}>
                {this.props.children}
                </p>
                <input type="text" onChange={this.props.changeName} value={this.props.name}/>
            </Aux1>
        
    }

}

export default withClass(Person, styles.person);