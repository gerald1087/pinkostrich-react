import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom'

import "./Header.css"


class Header extends Component {

    clickHandler() {
        this.props.history.push('/')
        window.location.reload()
    }


    render() {
        return (
            <div className='header'>
                <div style={{ display: 'flex', flexFlow: 'column nowrap', alignItems: 'center', textAlign: 'center' }}>
                    <div>
                        <NavLink to="/pinkostrich" style={{ margin: '2em' }}>Home </NavLink>
                        <NavLink to="/products" style={{ margin: '2em' }}>Balloons </NavLink>
                        <NavLink to="/usersorders" style={{ margin: '2em' }}>Orders </NavLink>
                        <button type="submit" id="logoutbutton" onClick={this.clickHandler.bind(this)} className="btn btn-primary">Logout</button>
                    </div>

                </div>
            </div>
        )
    }
}

export default withRouter(Header)