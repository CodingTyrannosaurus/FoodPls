import React, { Component } from 'react';
import { Navbar, FormGroup, FormControl, Button, Nav, NavItem} from 'react-bootstrap';

export default class Navigation extends Component {

  render() {
    return (
      <div>
        <Navbar inverse>
          <Navbar.Header>
            <Navbar.Brand className="standup-brand">
              <a href="#home">FoodPls</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="#">
              About
            </NavItem>
          </Nav>
          <Navbar.Collapse>
            <Navbar.Form pullRight>
              <FormGroup>
                <FormControl type="text" placeholder="Enter a location" />
              </FormGroup>{' '}
              <Button type="submit">Search</Button>
            </Navbar.Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }

}