import logo from './logo.svg';
import './App.css';
import React from 'react';
import AddItem from './addItem.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ['one', 'two'],
    };
  }
  render() {
    console.log("asdfasdf");
    return (
      <>
        <ul>
          {this.state.list.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <AddItem onClick={() => this.addListItem('test')} />
      </>
    );
  }

  addListItem(task) {
    this.setState({
      list: this.list.push(task)
    });
  }



}
export default App;
