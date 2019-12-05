import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Form } from 'react-bootstrap';

import { AvailableRoverCams } from '../../helpers/available-rover-cams';
import { selectRovers, getMaxSol } from '../../redux/actions';

class RoverSelect extends React.Component {
  constructor(props) {
    super(props);
    this.roverHelper = new AvailableRoverCams();
  }

  handleRoverSelect(evt) {
    const selectOptions = evt.target.options;
    const selected = [];
    Array.prototype.forEach.call(selectOptions, (option) => {
      if (option.selected) {
        selected.push(option.value);
      }
    });
    const roverNames = selected.map(roverId => this.roverHelper.getRoverName(roverId));
    this.props.selectRovers(selected);
    this.props.getMaxSol(roverNames);
  }

  render() {
    return (
      <>
        <Form>
            <Form.Group controlId='roverSelect'>
                <Form.Label>Pick rover(s)</Form.Label>
                <Form.Control as="select" multiple onChange={this.handleRoverSelect.bind(this)}>
                    {this.roverHelper.getRovers().map((rover) => {
                      return <option key={rover.id} value={rover.id}>{rover.name}</option>;
                    })}
                </Form.Control>
            </Form.Group>
        </Form>
      </>
    );
  }
}

RoverSelect.propTypes = {
  selectRovers: PropTypes.func.isRequired,
  getMaxSol: PropTypes.func.isRequired
};

export default connect(
  null,
  { selectRovers, getMaxSol },
)(RoverSelect);