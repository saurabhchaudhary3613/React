import React, { Component } from 'react';

import Person from './Person/Person';

import './App.css';

class App extends Component {

  state = {
    persons: [
      {name: 'SA', age: 30 },
      {name: 'RA', age: 40 },
      {name: 'TY', age: 50 }
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>Hi...</h1>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person  name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobiees are: xyz</Person>
        <Person  name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
