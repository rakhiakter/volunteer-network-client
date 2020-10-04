import React from 'react';
import { Button, Container, Form, FormControl } from 'react-bootstrap';
import './Search.css'
const Search = () => {
    return (
      <div>
        <Container>
          <h2 className="text">I GROW BY HELPING PEOPLE IN NEED</h2>

          <Form inline className="search">
            <FormControl
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
            <Button  type="submit">Search</Button>
          </Form>
        </Container>
      </div>
    );
};

export default Search;