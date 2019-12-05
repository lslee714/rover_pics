import React from 'react';
import { FormControl } from 'react-bootstrap';


export default class SolInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <FormControl className="sol-input" placeholder="Enter sol">
				</FormControl>
      </>
    );
  }
}