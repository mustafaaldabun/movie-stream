import React from 'react';
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavigationMenu.css';

export default function NavigationMenu() {

  return (
    <Navbar className="Navbar" bg="dark" variant="dark">
      <Navbar.Brand style={{ fontSize: '3em' }} className="mr-auto">Wookie Movies</Navbar.Brand>
      <Form inline>
        <FormControl type="text" placeholder="Search movie" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
    </Navbar>
  )
}
