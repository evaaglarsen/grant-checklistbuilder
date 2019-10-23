import React, { Component } from "react";
import './pages.css';
import HumanInvolv from '../components/humaninvolv';
import Budget from '../components/budget';
import GrantType from '../components/granttype';
import Partners from '../components/partners';
import Team from '../components/team';
import Unique from '../components/uniqueasp';
import Timeline from '../components/timeline';

export default class GrantInfo extends Component {

    // state = {
    //     isClicked: false;
    // }

    // clickedButton = () => {
    //     let isClicked = true;
    // }

    render() {
        return (
            <div>
                <header>
                    <button onClick={this.props.clickedButton}>+</button>
                    <h1>Grant Type</h1>
                </header>
                <GrantType />
                
                <header>
                    <button onClick={this.props.clickedButton}>+</button>
                    <h1>Funder and Timeline</h1>
                </header>
                <Timeline />
                
                <header>
                    <button onClick={this.props.clickedButton}>+</button>
                    <h1>Human Involvement</h1>
                </header>
                <HumanInvolv />

                <header>
                    <button onClick={this.props.clickedButton}>+</button>
                    <h1>Partners and Supportive Institutions</h1>
                </header>
                <Partners />

                <header>
                    <button onClick={this.props.clickedButton}>+</button>
                    <h1>Team Members</h1>
                </header>
                <Team />

                <header>
                    <button onClick={this.props.clickedButton}>+</button>
                    <h1>Budget Information</h1>
                </header>
                <Budget />

                <header>
                    <button onClick={this.props.clickedButton}>+</button>
                    <h1>Unique Aspects</h1>
                </header>
                <Unique />

            </div>
        )
    }
}