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

  switchNameHandler = (newName) => {
    console.log('sa');
    // Don't do this: Do not mutate state directly. Use setState() 
    // this.state.persons[0].name = 'Saurabh';

    this.setState({
      persons: [
        {name: newName, age: 30 },
        {name: 'RA', age: 60 },
        {name: 'TY', age: 100 }
      ]
    })
  } 

  render() {
    return (
      <div className="App">
        <h1>Hi...</h1>
        <button onClick={ this.switchNameHandler } >Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person  
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        switchName={this.switchNameHandler}
        >
        My hobiees are: xyz
        </Person>
        <Person  name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
