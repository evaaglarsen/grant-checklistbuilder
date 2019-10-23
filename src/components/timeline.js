import React, { Component } from "react";
const renderTimeline = () => {
    return (
        <div>
        <form>
            <h2>Who is the funder for this grant?</h2>
            <input type="radio" name="funder" value="NRC" checked />NRC
            <input type="radio" name="funder" value="Other" />Other

            <h2>What deadline are you targeting?</h2>
            <input type="date" name="date" value="date" />
        </form>
        </div>
)
}

export default renderTimeline