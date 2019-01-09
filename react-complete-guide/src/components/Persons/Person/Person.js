import React, { Component } from 'react';
import styles from './Person.css';
import withClass from '../../../hoc/withClass';
import ReactAux from '../../../hoc/ReactAux'
import PropTypes from 'prop-types';
import { AuthContext } from '../../../containers/App';

class Person extends Component{

    constructor(props) {
        super(props);
        console.log('[Person.js] inside constructor', props);
        this.inputElement = React.createRef();
    }

    componentDidMount () {
        // this.focusInput();
        if(this.props.position === 0) {
            // this.inputElement.focus();
            this.inputElement.current.focus();
        }
    }

    focus() {
        // this.inputElement.focus();
        this.inputElement.current.focus();
    }

    render() {
        
        return <ReactAux>
                <AuthContext.Consumer>
                    {auth => auth ? <p>I am authenticated !</p> : null}
                </AuthContext.Consumer>
                <p  onClick={this.props.click}>I am { this.props.name } and I am {this.props.age } years old..!</p>
                <p onClick={this.props.switchName}>
                {this.props.children}
                </p>
                <input type="text" 
                onChange={this.props.changeName}
                ref={this.inputElement}
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