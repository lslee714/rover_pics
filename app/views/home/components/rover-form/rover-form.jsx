import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { Form }  from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

import CamSelect from './cam-select';
import  RoverSelect from './rover-select';

import { submitForm, resetPics } from '../../../redux/actions';

class RoverForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			validated: false
		};
		this.formRef = React.createRef();
	}		

	checkValidity() {
		const isValid = this.formRef.current.checkValidity();
		this.setState({validated: isValid});
	}	

	handleOnChange() {
		this.checkValidity();
	}

	handleSubmit(evt) {
		evt.preventDefault();
		if(this.state.validated) {
			this.props.submitForm();
		}
	}

	render() {
			return (
			<>
			<Form
				ref={this.formRef}
				noValidate
				onSubmit={this.handleSubmit.bind(this)}
				validated={this.state.validated.toString()}>
					<Row>
							<Col sm={6}>
									<RoverSelect onChange={this.handleOnChange.bind(this)}/>
							</Col>
							<Col sm={6}>
									<CamSelect onChange={this.handleOnChange.bind(this)}/> 
							</Col>
					</Row>
					<Row>
						<Col sm={{ span: 4, offset: 8}} className='move-right'>
							<Button 
								type="submit"
								variant="success"
								disabled = {!this.state.validated}
							>
								Submit
							</Button>
							<Button 
								className="float-right minor-right-margin" 
								type="button"
								variant="danger"
								onClick={this.props.resetPics}
								disabled = {!this.props.photoUrls.length}
							>
								Reset
							</Button>
						</Col>
					</Row>

			</Form>
			</>
			);
	}
}

RoverForm.propTypes = {
	submitForm: PropTypes.func.isRequired,
	resetPics: PropTypes.func.isRequired,
	photoUrls: PropTypes.arrayOf(PropTypes.string)
};

export default connect(
	state => { 
		
		return { photoUrls: state.pics.urls || [] };
	}
	, {submitForm, resetPics})(RoverForm);