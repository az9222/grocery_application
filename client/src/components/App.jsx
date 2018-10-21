import React from 'react';
import List from './list.jsx';
import Input from './input.jsx';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super (props);
    this.state = {
      list: [],
    }
  }

  componentDidMount() {
    this.getData();
  }

  getData(){
    $.ajax({
      type: 'GET',
      url: '/groceries',
      contentType: 'application/json',
      success: (data) => {
        this.setState({
          list: data 
        });
      }
    });
  }

  render() {
    return (
      <div>
        <Input getData={this.getData.bind(this)}/>
        <List groceries={this.state.list} />
      </div>
    );
  }
}

export default App;