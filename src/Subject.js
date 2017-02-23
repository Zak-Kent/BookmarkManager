import React, { Component } from 'react';

export default class Subject extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleTyping = this.handleTyping.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

    this.state = {
      isClicked: false,
      resourceTitle: '',
      url: '',
    }
  }

  handleClick() {
    // removed if statement that decides if title is clicked and wheter to show options
    // all options shown now by default
    this.setState(prevState => ({
      isClicked: !prevState.isClicked
    }));
  }

  handleTyping(e) {
    this.setState({[e.target.name]: e.target.value})
    e.preventDefault();

  }

  handleInput(e) {
    e.preventDefault();
    const newResource = {
      title: this.state.resourceTitle,
      url: this.state.url
    };

    this.props.addResource(newResource, this.props.index);
  }

  handleDelete(e) {
    this.props.deleteResource(this.props.index);
    e.preventDefault();
  }


  render() {
    return(
      <div>
        <h2 onClick={this.handleClick}>{this.props.items.subject}</h2>

        <ul>
          {
            this.props.items.resources.map((resource, idx) => {   
              return(
                <li key={idx}>
                  <a href={resource.url}>{resource.title}</a>
                </li>
              )               
            })
          }
        </ul>

        <input name="resourceTitle" onChange={this.handleTyping} value={this.state.resourceTitle}/>
        <input name="url" onChange={this.handleTyping} value={this.state.url}/>
        <button onClick={this.handleInput}>Add Item</button>
        <button onClick={this.handleDelete}>Delete Topic</button>

      </div>
    )
  }

}
