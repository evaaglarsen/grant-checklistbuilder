import React, { Component } from "react";

const renderPartners = () => {
    return (
        <div>
            <form className="formInput">
                <h2>List any organizations/universities with which you are partnering:</h2>
                <input type="text" name="OrgName" value="Org" placeholder="Organization Name" /> <br />
                                
                <h2>From whom are you seeking letters of support?</h2>
                <input type="text" name="LOS" value="LOS1" placeholder="Name of Individual \& their Institution" /> <br />
                
            </form>
        </div>
    )
}

export default renderPartners