import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

export function MyList(props) {
    // takes list items passed down as props and renders then in a list elem

    // console.log(props.items.resources) // has title and url in array 

    let items = props.items.resources.map((item, idx) => {
        // console.log(item.url)
        // <ListGroupItem key={idx} >{item.title}</ListGroupItem>
        return <li href={item.url} key={idx}>{item.title}</li>
    });

    return (
        <ul>
            {items}
        </ul>
    )
}