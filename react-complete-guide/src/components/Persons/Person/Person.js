import React, { Component } from 'react';
import styles from './Person.css';
import withClass from '../../../hoc/withClass';
import ReactAux from '../../../hoc/ReactAux'
import PropTypes from 'prop-types';


class Person extends Component{

    componentDidMount () {
        if(this.props.position === 0) {
            this.inputElement.focus();
        }
    }
    render() {
        return <ReactAux>
                <p  onClick={this.props.click}>I am { this.props.name } and I am {this.props.age } years old..!</p>
                <p onClick={this.props.switchName}>
                {this.props.children}
                </p>
                <input type="text" 
                onChange={this.props.changeName}
                ref={ (inp) => {this.inputElement = inp}}
                value={this.props.name}/>
            </ReactAux>
        
    }

}

Person.PropTypes = {
    clicked: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    switchName: PropTypes.func
};

export default withClass(Person, styles.person);