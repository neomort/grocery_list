import React from 'react';
import './App.css';
import Checkbox from './Checkbox';

class GroceryList extends React.Component{


renderList = () => {
  const {items} = this.props;
  return items.map((item) =>{
    return <Checkbox
    itemClick={this.props.itemClick}
    key={item.id}
    id={item.id}
    name={item.name}
    complete={item.complete}
    />
  });
}

render(){
  return(
    <div >
      <h1>Grocery List!</h1>
      {this.renderList()}
    </div>
  )
}

}

export default GroceryList;