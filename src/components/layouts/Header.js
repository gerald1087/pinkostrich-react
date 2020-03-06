import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom'


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
                        <hr />
                        <button type="submit" onClick={this.clickHandler.bind(this)} className="btn btn-primary">Logout</button>
                    </div>

                </div>
            </div>
        )
    }
}

export default withRouter(Header)