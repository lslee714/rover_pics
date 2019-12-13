import PropTypes from 'prop-types';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { connect } from 'react-redux';

class ImageViewer extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			url: ''
		};
		this.imageViewerRef= React.createRef();
	}
	componentDidUpdate(prevProps) {
		//First time urls were loaded in, immediately set url
		if(!prevProps.urls.length && this.props.urls.length) {
			this.setUrl();
		}
	}

	componentDidMount() {
		this.interval = setInterval(() => {
			if(this.props.urls.length) {
				this.setUrl();
			}
		}, 5000);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	setUrl() {
		this.setState({url: this.props.urls[Math.floor(Math.random()*this.props.urls.length)]});
	}

	makeFullScreen() {
		this.imageViewerRef.current.requestFullscreen();
	}

	render() {
		if(this.state.url) {
			return (
				<>
					<Row>
						<Col className="inline" sm={{span: 4, offset: 4}}>
							<div className="image-viewer minor-right-margin" ref={this.imageViewerRef}>
								<img className="rover-pic" src={this.state.url}/>
							</div>
							<Button variant="primary" className="margin-auto" onClick={this.makeFullScreen.bind(this)}>Full</Button>					
						</Col>
						<Col></Col>
					</Row>
				</>
			);
		}
 else return (<></>);
		
	}
}

ImageViewer.propTypes = {
	urls: PropTypes.arrayOf(PropTypes.string)
};

export default connect(state => {
	return {urls : state.pics.urls || []};
})(ImageViewer);