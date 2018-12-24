import React, { Component } from 'react';

import Person from './Person/Person';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

import './App.css';

class App extends Component {

  state = {
    persons: [
      {id: '1010', name: 'SA', age: 30 },
      {id: '1020', name: 'RA', age: 40 },
      {id: '1030', name: 'TY', age: 50 }
    ],
    userName: [
      {name: 'Saurabh'},
      {name: 'Chaudhary'},
    ],
    showPersons: false
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
    console.log('change');
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
    this.setState({
      showPersons: !doesShow
    });

  }

  deletePersonsHandler = (personIndex) => {
    console.log('delete handler');
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  render() {
    const btnStyle = {
      backgroundColor: 'white',
      border: '1px solid red',
      font: 'inherit',
      padding: '8px',
      cursor: 'pointer'
    }
    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index)=> {
            return <Person key={person.id}
                    click={() => {this.deletePersonsHandler(index)}}
                    name={person.name} 
                    changeName={(event) => {this.changeNameHandler(event, person.id)}}
                    age={person.age}/>
          })}
        </div>
      )
    }
    return (
      <div className="App">
        <h1>Hi...</h1>
          {/* <button style={btnStyle} onClick={ () => this.switchNameHandler('Differt syntex') } >Switch Name</button> */}
          <button style={btnStyle} onClick={ () => this.togglePersonsHandler('Differt syntex') } >Switch Name</button>
          {persons}
        

        {/* <UserOutput userName={this.state.userName[0].name}>
        User111
        </UserOutput>
        <UserOutput userName={this.state.userName[1].name}>
        User222
        </UserOutput>
        <UserInput changeUserName={this.changeUserNameHandler}/> */}

        
        
      </div>
    );
  }
}

export default App;
