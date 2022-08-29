import React from 'react'
import { Form, FormControl, Button } from 'react-bootstrap'
import './search.css';
import { FcSearch } from "react-icons/fc";
import { CartState } from '../context/Context';

const Search = () => {

  const { filterDispatch
  } = CartState();

  return (
    <Form className='search'>
      <FormControl type="text" placeholder="Search..." className="mr-sm-2" id="formControl"
        onChange={(e) => {
          filterDispatch({
            type: "FILTER_BY_SEARCH",
            payload: e.target.value,
          })
        }} />
      <Button variant="outline-success"><FcSearch fontSize="25px" />
      </Button>
    </Form>
  )
}

export default Search