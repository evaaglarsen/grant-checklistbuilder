import React, { Component } from "react";

const renderBudget = () => {
    return (
        <div>
            <form>
                <h2>How many years is this grant for?</h2>
                <input type="number" name="budgetInfo" value="grantYears" /> <br />
                <h2>When will the grant start?</h2>
                <input type="date" name="budgetInfo" value="startDate" />
                <h2>When will the grant end?</h2>
                <input type="date" name="budgetInfo" value="endDate" />
                <h2>What is the maximum allowable in direct costs?</h2>
                <input type="number" name="budgetInfo" value="maxDirect" />
            </form>
        </div>
    )
}

export default renderBudget