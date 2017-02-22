import React, { Component } from 'react';


export default class AddTopic extends Component {
    constructor(props) {
    super(props);

    this.handleTyping = this.handleTyping.bind(this);
    this.handleInput = this.handleInput.bind(this);

    this.state = {
      topicTitle: '',
    }
  }

  handleTyping(e) {
    this.setState({[e.target.name]: e.target.value})
    e.preventDefault();
  }

  handleInput(e) {
    e.preventDefault();

    if(this.state.topicTitle !== '') {
      this.props.addTopic(this.state.topicTitle);
      this.setState({topicTitle: ''})
    }

  }

  render() {
    const divStyle = {
      padding: "10px 0px",
      
    };

    return (  
      <div style={divStyle}>
        <input name="topicTitle" onChange={this.handleTyping} value={this.state.topicTitle}/>
        <button onClick={this.handleInput}>Add New Subject</button>
      </div>
    )
  }

}















