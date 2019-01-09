import React, { Component } from 'react';
import Person from './Person/Person'

class Persons extends Component {

    constructor(props) {
        super(props);
        console.log('Inside Persons js contructor', props);
        this.lastPersonRef = React.createRef();
    }

    componentWillMount() {
        console.log('Inside Persons js componentWillMount()');
    }
    componentDidMount() {
        console.log('Inside Persons js componentDidMount()');
        this.lastPersonRef.current.focus();
    }
    componentWillReceiveProps(nextProps) {
        console.log('Inside Persons js componentWillReceiveProps()',nextProps);
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('Inside Persons js shouldComponentUpdate()',nextProps, nextState);
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('Inside Persons js componentWillUpdate()',nextProps, nextState);
    }

    componentDidUpdate(){
        console.log('Inside Persons js componentDidUpdate()');  
    }


    render() {
        console.log('Inside Person js render()', this.props);
        return this.props.persons.map((person, index) => {
            return <Person key={person.id}
                click={() => {this.props.clicked(index)}}
                name={person.name} 
                position={index}
                ref={this.lastPersonRef}
                changeName={(event) => {this.props.changed(event, person.id)}}
                age={person.age}/>
        });
    }

}

export default Persons;