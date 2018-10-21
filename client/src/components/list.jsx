import React from 'react';

const List = (props) => (
  <div className = "grocerylist">
    {props.groceries.map(grocery => (
      <div>
      <span>{grocery.item} - {grocery.quantity}</span>
      </div>
    ))}
  </div>
);

export default List;