import logo from './logo.svg';
import './App.css';
import React from 'react';
import AddItem from './addItem.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: ['one', 'two'],
    };
  }
  render() {
    return (
      <>
        <ul>
          {this.state.toDoList.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <AddItem onClick={() => this.addListItem('test')} />
      </> 
    );
  }

  addListItem(task) {
    
    const lastList = this.state.toDoList;
    console.log(lastList);
    this.setState({
      toDoList: lastList.push(task)
    })
    ;
  }



}
export default App;
