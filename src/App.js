import React, { Component } from 'react';
import Subject from './Subject.js';
import Topic from './Topic.js';


class App extends Component {
  constructor() {
    super();

    this.addResource = this.addResource.bind(this);
    this.addTopic = this.addTopic.bind(this);
    this.deleteResource = this.deleteResource.bind(this);

    this.state = {resources: [

      {
        subject: "Functional Programming Basics",
        resources: [
          {
            title: "FunFunFunction Functional Programming Playlist",
            url: "https://www.youtube.com/watch?v=BMUiFMZr7vk&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84"
          },
          {
            title: "FunFunFunction var, let, and const",
            url: "https://www.youtube.com/watch?v=sjyJBL5fkp8"
          },
          {
            title: "FunFunFunction arrow functions",
            url: "https://www.youtube.com/watch?v=6sQDTgOqh-I"
          }
        ]
      },


      {
        subject: "ES6",
        resources: [
          {
            title: "Kyle Robinson Young ES6 Essentials",
            url: "https://www.youtube.com/watch?v=CozSF5abcTA"
          }
        ]
      },


      {
        subject: "Intro to React",
        resources: [
          {
            title: "Thinking in React",
            url: "https://facebook.github.io/react/docs/thinking-in-react.html"},
          {
            title: "Mindspace React Tutorial",
            url: "https://www.youtube.com/watch?v=JPT3bFIwJYA&list=PL55RiY5tL51oyA8euSROLjMFZbXaV7skS"},
          {
            title: "LearnCode Academy React Tutorial",
            url: "https://youtu.be/fd2Cayhez58"
          }
        ]
      }

    ]}
  }

  addResource(resource, subject) {
    const tempState = this.state;
    tempState.resources[subject].resources.push(resource);
    
    this.setState(tempState);
  }

  deleteResource(idx) {
    const tempState = this.state;
    tempState.resources.splice(idx, 1);

    this.setState(tempState);
  }

  addTopic(topic) {
    const tempState = this.state;

    let newSubject = {
      subject: topic,
      resources: [],
    }
    tempState.resources.push(newSubject);

    this.setState(tempState);
  }

  render() {
    return (
      <div>
        {
          this.state.resources.map((resource, idx) => {
            return(
              <Subject key={idx} index={idx} addResource={this.addResource} 
              deleteResource={this.deleteResource} items={resource}/>
            )
          })
        }
        <Topic addTopic={this.addTopic} />
      </div>
    );
  }
}

export default App;
