import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Checklist from './pages/checklist'
import DueDates from './pages/duedates'
import GrantInfo from './pages/grantinfo'
import TopNav from './components/topnav'

export default class App extends Component {

    renderGrantInfo = () => {
        return (
            <GrantInfo />
        )
    }

    renderChecklist = () => {
        return (
            <Checklist />
        )
    }

    renderDueDates = () => {
        return (
            <DueDates />
        )
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <TopNav />
                    <Route exact path="/" component={this.renderGrantInfo} />
                    <Route exact path="/checklist" component={this.renderChecklist} />
                    <Route exact path="/duedates" component={this.renderDueDates} />
                </div>
            </Router>
        );
    }
}