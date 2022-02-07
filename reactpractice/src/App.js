import './App.css';
import React from 'react';
import TextBox from './textBox.js';
import ClearList from './ClearList.js';
import CheckBox from './CheckBox.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: [],
    };
  }
  render() {
    const toDoListed = this.state.toDoList.map(item => 
      (<li key={item}>{<CheckBox value={item}/>}</li>
    ));
    return (
      <>
      <TextBox onSubmit={(i) => this.addListItem(i)}/>
        <ul>
          {toDoListed}
        </ul>
      <ClearList onClick={(i) => this.clearList()} />
      </> 
    );
  }

  addListItem(task) {
    
    const lastList = this.state.toDoList;
    lastList.push(task);
    this.setState({
      toDoList: lastList
    });
  }

  clearList(){
    this.setState({
      toDoList: []
    })
  }
}
export default App;
