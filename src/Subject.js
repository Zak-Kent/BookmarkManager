import React, { Component } from 'react';
import { MyList } from './list.jsx';


export default class Subject extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleTyping = this.handleTyping.bind(this);
    this.handleInput = this.handleInput.bind(this);

    this.state = {
      isClicked: false,
      resourceTitle: '',
      url: '',
    }
  }

  handleClick() {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked
    }));
  }

  handleTyping(e) {
    this.setState({[e.target.name]: e.target.value})
    // console.log("state resource title: ", this.state.resourceTitle)
    e.preventDefault();
  }

  handleInput(e) {
    e.preventDefault();

    const newResource = {
      title: this.state.resourceTitle,
      url: this.state.url
    };

    console.log("key value from props: ", this.props.index)

    this.props.addResource(newResource, this.props.index);

  }

  render() {
    return(
      <div>
        <h2 onClick={this.handleClick}>{this.props.items.subject}</h2>

        <ul>
          {
            this.props.items.resources.map((resource, idx) => {
              if (this.state.isClicked) {
                return(
                  <li key={idx}>
                    <a href={resource.url}>{resource.title}</a>
                  </li>
                )
              }
            })
          }
        </ul>

        <input name="resourceTitle" onChange={this.handleTyping} value={this.state.resourceTitle}/>
        <input name="url" onChange={this.handleTyping} value={this.state.url}/>
        <button onClick={this.handleInput}>Add Item</button>
        <MyList items={this.props.items}/>


      </div>
    )
  }

}
