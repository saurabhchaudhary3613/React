import React, { Component } from 'react';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import ReactAux from '../hoc/ReactAux';

import withClass from '../hoc/withClass';


// import UserOutput from '../components/UserOutput/UserOutput';
// import UserInput from '../components/UserInput/UserInput';
// import Radium, { StyleRoot } from 'radium';

import styles  from './App.css';

export const AuthContext = React.createContext(true);

class App extends Component {

  constructor(props) {
    super(props);
    console.log('Inside App js contructor', props);
    this.state = {
      persons: [
        {id: '1010', name: 'SA', age: "30" },
        {id: '1020', name: 'RA', age: 40 },
        {id: '1030', name: 'TY', age: 50 }
      ],
      userName: [
        {name: 'Saurabh'},
        {name: 'Chaudhary'},
      ],
      showPersons: false,
      toggleClicked: 0,
      authenticated: false
    }
  }

  componentWillMount() {
    console.log('Inside App js componentWillMount()');
  }
  componentDidMount() {
    console.log('Inside App js componentDidMount()');
  }


  

  switchNameHandler = (newName) => {
    console.log('sa');
    // Don't do this: Do not mutate state directly. Use setState() 
    // this.state.persons[0].name = 'Saurabh';

    this.setState({
      persons: [
        {name: newName, age: 30 },
        {name: 'RARA', age: 60 },
        {name: 'TYTYTY', age: 100 }
      ]
    })
  }
  
  changeNameHandler = (event, id) => {
    
    // Don't do this: Do not mutate state directly. Use setState() 
    // this.state.persons[0].name = 'Saurabh';

    const personIndex = this.state.persons.findIndex(p => {
      console.log(p.id + '---------' + id)
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }
  changeUserNameHandler = (event, id) => {
    console.log(event)
    
    this.setState({
      userName: [
        {name: 'Saurabh'},
        {name: event.target.value},
      ]
    })
  }
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    
    this.setState((prevState, props) => {
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
      }
    })

  }

  deletePersonsHandler = (personIndex) => {
    console.log('delete handler');
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  loginHandler() {
    // this.setState({authenticated: true});
  }

  render() {
    console.log('Inside App js render()');
    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          
          <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonsHandler}
          changed={this.changeNameHandler}
          />
          
        </div>
      );
    }

    return (
      <ReactAux>
        <Cockpit showPersons={this.state.showPersons}
          appTitle={this.props.title}
           persons={this.state.persons}
           clicked={this.togglePersonsHandler}
           login={this.loginHandler}

          />
          <AuthContext.Provider value={this.state.authenticated}>
            {persons}
          </AuthContext.Provider>
      </ReactAux>
    );
  }
}

export default withClass(App, styles.App);
