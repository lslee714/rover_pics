import React from 'react';
import ReactDOM from 'react-dom';

import Nav from './components/nav';
import RoverForm  from './components/form';

import '../stylesheets/home/home.scss';

ReactDOM.render(<Nav />, document.getElementById('navbar'));
ReactDOM.render(<RoverForm />, document.getElementById('form'));