import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './components.css';
export default class TopNav extends Component {

    render() {
        return (
            <nav className="topNav">
                <div><Link to='/grantinfo'>Grant Information</Link></div>
                <div><Link to='/checklist'>Checklist</Link></div>
                <div><Link to='/duedates'>Due Dates</Link></div>
            </nav>
        )
    }
}