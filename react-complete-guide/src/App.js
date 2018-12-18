import React, { Component } from 'react';

import Person from './Person/Person';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

import './App.css';

class App extends Component {

  state = {
    persons: [
      {name: 'SA', age: 30 },
      {name: 'RA', age: 40 },
      {name: 'TY', age: 50 }
    ],
    userName: [
      {name: 'Saurabh'},
      {name: 'Chaudhary'},
    ]
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
  changeNameHandler = (event) => {
    console.log('change');
    // Don't do this: Do not mutate state directly. Use setState() 
    // this.state.persons[0].name = 'Saurabh';

    this.setState({
      persons: [
        {name: 'SA', age: 30 },
        {name: event.target.value, age: 40 },
        {name: 'TY', age: 50 }
      ]
    })
  }
  changeUserNameHandler = (event) => {
    console.log(event)
    this.setState({
      userName: [
        {name: 'Saurabh'},
        {name: event.target.value},
      ]
    })
  }

  render() {
    const btnStyle = {
      backgroundColor: 'white',
      border: '1px solid red',
      font: 'inherit',
      padding: '8px',
      cursor: 'pointer'
    }
    return (
      <div className="App">
        <h1>Hi...</h1>
        <button style={btnStyle} onClick={ () => this.switchNameHandler('Differt syntex') } >Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person  
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        switchName={this.switchNameHandler.bind(this, '098765')}
        changeName={this.changeNameHandler}
        >
        My hobiees are: xyz
        </Person>
        <Person  name={this.state.persons[2].name} age={this.state.persons[2].age}/>

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
