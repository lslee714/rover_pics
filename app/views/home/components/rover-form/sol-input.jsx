import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Form} from 'react-bootstrap';
import { getMaxSolState } from '../../../redux/selectors';


class SolInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
       <>
          <Form.Group controlId="solInput">
            <Form.Label>
              Enter Sol (max: {this.props.maxSol})
            </Form.Label>
            <Form.Control 
              className="sol-input" 
              placeholder="Enter sol" 
              type="number" 
              max={this.props.maxSol}
              required
              >
            </Form.Control>
          </Form.Group>
        </>
    );
  }
}

SolInput.propTypes = {
  maxSol: PropTypes.number.isRequired
};

export default connect(
  state => {
    return { maxSol: getMaxSolState(state) };
  } 
)(SolInput);