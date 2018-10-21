import React from 'react';
import $ from 'jquery';

const Form = (props) => (
  <div className = "forms">
    <form onSubmit={props.sendItem}>
      <label>
      Item:
      <input type="text" name="item" onChange={props.handleItem}/>
      </label>
      <label>
      Quantity:
      <input type="text" name="quantity" onChange={props.handleItem}/>
      </label>
      <input type="submit" value="Submit" />
    </form>
  </div>
)

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentItem: {item: '', quantity: ''},
      successItem: false,
    }
  }

  handleItem(e) {
    const newState = Object.assign({}, this.state.currentItem);
    newState[e.target.name] = e.target.value;
    this.setState({
      currentItem: newState,
    })
    e.preventDefault();
  }

  sendItem(e) {
    e.preventDefault();
    console.log(this.state.currentItem)
    $.ajax({
      type: 'POST',
      url: '/groceries',
      data: JSON.stringify(this.state.currentItem),
      contentType: 'application/json',
      success: () => { 
        this.setState({
          successItem: true, 
          currentItem: {
            item: '', 
            quantity: ''
          }
        });
        this.props.getData();
      }
    });
  }

  render() {
    return (
      <Form handleItem={this.handleItem.bind(this)} sendItem={this.sendItem.bind(this)} />
    )
  }
}

export default Input;