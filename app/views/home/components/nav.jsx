import React from 'react';

import {Navbar} from 'react-bootstrap';

class Nav extends React.Component {
    render() {
        return (
        <>
            <Navbar bg='dark' variant='dark'>
                <Navbar.Brand>
                    {'Mars Rover Pics'}
                </Navbar.Brand>
            </Navbar>
        </>
        )
    }
}

export default Nav;