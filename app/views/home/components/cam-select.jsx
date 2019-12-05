import PropTypes from 'prop-types';
import React from 'react';
import { Form } from 'react-bootstrap';
import { connect } from 'react-redux';

import { AvailableRoverCams } from '../../helpers/available-rover-cams';
import { selectCams } from '../../redux/actions';
import { getSelectedRoverIds } from '../../redux/selectors';

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
  }

  render() {
    return (
      <>
        <Form>
            <Form.Group controlId='camSelect'>
                <Form.Label>Pick camera(s)</Form.Label>
                <Form.Control as="select" multiple onChange={this.handleCamSelect.bind(this)}>
                    {this.props.availableCams.map((camId) => {
                      const camName = this.roverHelper.getCamName(camId);
                      return <option key={camId} value={camId}>{camName}</option>;
                    })}
                </Form.Control>
            </Form.Group>
        </Form>
      </>
    );
  }
}

CamSelect.propTypes = {
  availableCams: PropTypes.arrayOf(PropTypes.string),
  selectCams: PropTypes.func.isRequired
};

export default connect(
  state => {
    const selectedRovers = getSelectedRoverIds(state);
    const roverHelper = new AvailableRoverCams();
    const cams = [];
    selectedRovers.forEach(roverId => {
      const camsForRover = roverHelper.getRoverCams(roverId);
      cams.push(...camsForRover);
    });

    return (
      {availableCams: [...new Set(cams)]}
    );
  }
, { selectCams })(CamSelect);
