import PropTypes from 'prop-types';
import React from 'react';
import { Form } from 'react-bootstrap';
import { connect } from 'react-redux';

import { AvailableRoverCams } from '../../../helpers/available-rover-cams';
import { intersection } from '../../../helpers/intersection';
import { selectCams } from '../../../redux/actions';
import { getSelectedRoverNames } from '../../../redux/selectors';
class CamSelect extends React.Component {
  constructor(...args) {
    super(...args);
    this.roverHelper = new AvailableRoverCams();
  }

  handleCamSelect(evt) {
    const selectOptions = evt.target.options;
    const selected = [];
    Array.prototype.forEach.call(selectOptions, (option) => {
      if (option.selected) {
        selected.push(option.value);
      }
    });
    this.props.selectCams(selected);
    this.props.onChange();
  }

  render() {
    return (
      <>
        <Form.Group controlId='camSelect'>
            <Form.Label>Pick camera(s)</Form.Label>
            <Form.Control as="select" 
              className="hide-scroll"
              multiple required onChange={this.handleCamSelect.bind(this)}>
                {this.props.availableCams.map((camId) => {
                  const camName = this.roverHelper.getCamName(camId);
                  return <option key={camId} value={camId}>{camName}</option>;
                })}
            </Form.Control>
        </Form.Group>
      </>
    );
  }
}

CamSelect.propTypes = {
  availableCams: PropTypes.arrayOf(PropTypes.string),
  selectCams: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default connect(
  state => {
    const selectedRovers = getSelectedRoverNames(state);
    const roverHelper = new AvailableRoverCams();
    const cams = [];
    selectedRovers.forEach(roverName => {
      const camsForRover = roverHelper.getRoverCams(roverName);
      cams.push(camsForRover);
    });
    const camsForSelectedRovers = intersection(cams);
    return (
      {availableCams: [...camsForSelectedRovers]}
    );
  }
, { selectCams })(CamSelect);
