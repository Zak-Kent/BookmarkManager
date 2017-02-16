import React, { Component } from 'react';

export default class Subject extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleTyping = this.handleTyping.bind(this);

    this.state = {
      isClicked: false,
      newResourceTitle: '',
    }
  }

  handleClick() {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked
    }));
  }

  handleTyping(e) {
    this.setState({newResourceTitle: e.target.value})
  }

  render() {
    return(
      <div>
        <h2 onClick={this.handleClick}>{this.props.items.subject}</h2>

        <ul>
          {
            this.props.items.resources.map((resource) => {
              if (this.state.isClicked) {
                return(
                  <li>
                    <a href={resource.url}>{resource.title}</a>
                  </li>
                )
              }
            })
          }
        </ul>

        <input onChange={this.handleTyping} value={this.state.newResourceTitle}/>
      </div>
    )
  }

}
