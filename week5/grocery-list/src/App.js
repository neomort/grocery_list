import React from 'react';
import logo from './logo.svg';
import './App.css';
import GroceryList from './GroceryList';
import Form from './Form';

class App extends React.Component {
  state = {
    items: [
      {id:1, name:'beans', complete:false},
      {id:2, name:'beans on toast', complete:false},
      {id:3, name:'refried beans', complete:false},
      {id:4, name:'lima beans', complete:false},
    ],
  };

  handleClick = (id) => {
    const {items} = this.state
    const newItems = items.map((item) => {
      if(item.id === id){
        return{
          ...item,
          complete: !item.complete,
        };

      }
      return item;
    });

    this.setState({
      items: newItems,
    });
  }

  addItem = (item) => {
    const {items}= this.state;
    const newItem = {id: Math.random(), name: item, complete: false}
    this.setState({
      items: [...items, newItem],
    })

  }


  render(){
  return (
    <div className="App">
      <GroceryList items={this.state.items} itemClick={this.handleClick} />
      <hr />
      <Form add={this.addItem}/>
    </div>
  );
  }
}

export default App;
