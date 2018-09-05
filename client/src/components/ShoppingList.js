import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import uuid from "uuid";
import { stat } from "fs";

class ShoppingList extends Component {
  state = {
    items: [
      { id: uuid(), name: "Suleman" },
      { id: uuid(), name: "Noman" },
      { id: uuid(), name: "Adnan" },
      { id: uuid(), name: "Zeeshan" }
    ]
  };

  render() {
    const { items } = this.state;
    return (
      <Container>
        <Button
          color="dark"
          style={{ margin: "2rem" }}
          onClick={() => {
            const name = prompt("Enter Item");
            if (name) {
              this.setState(state => ({
                items: [...state.items, { id: uuid(), name }]
              }));
            }
          }}
        >
          Add new item
        </Button>
        <ListGroup>
          {items.map(({ id, name }) => (
            <ListGroupItem key={id}>
              <Button
                style={{ margin: "2rem" }}
                color="danger"
                size="sm"
                onClick={() => {
                  this.setState(state => ({
                    items: state.items.filter(item => item.id !== id)
                  }));
                }}
              >
                &times;
              </Button>
              {name}
            </ListGroupItem>
          ))}
        </ListGroup>
      </Container>
    );
  }
}

export default ShoppingList;
