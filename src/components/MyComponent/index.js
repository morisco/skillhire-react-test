import React from 'react'
import { useState } from 'react';
import { 
  Button,
  Card,
  List,
  ListItem,
  TextField,
  Typography 
} from '@material-ui/core';

import './MyComponent.css';


/*
  Welcome developer! Please fully customize this component as needed.
*/

const MyComponent = () => {
  
  const [items, setItems] = useState([]); // Initialize todo items state
  const [value, setValue] = useState(''); // Initialize input value state

  // Updates item complete status and push the updated item list to state
  function markAsComplete(indexToComplete) {
    const updatedItems  = [...items]; 
          updatedItems[indexToComplete].completed = !updatedItems[indexToComplete].completed;
    setItems(updatedItems);
  }

  // On form submit, test if field is empty, if not, append item to exist items and push to state
  // Reset text field on successful addition.
  function addItem(event) {
    event.preventDefault();
    if(value === ''){
      return;
    }
    const newTodo = { completed: 0, label: value};
          setItems([...items, newTodo]);
          setValue('');
  }
  return (
    <div>
      <Typography variant="h5">My ToDo List</Typography>
      <Card className="todo-list">
        <form onSubmit={addItem}> 
          <TextField
            label="ToDo Item"
            value={value}
            onChange={(evt) => { setValue(evt.target.value) }}
            margin="normal"
            variant="outlined"
            className="todo-field"
            helperText="Press Enter To Add Item"
          />
        </form>
        <List>
          {
            items.map((item, index) => {
              return(
                <ListItem 
                  component={Button}
                  style={{ 'textDecoration': item.completed ? 'line-through' : ''}} 
                  onClick={() => markAsComplete(index)} key={'item-' + index}
                >
                  {item.label}
                </ListItem>
              )
            })
          }
        </List>
      </Card>
    </div>
  )

}

export default MyComponent;
