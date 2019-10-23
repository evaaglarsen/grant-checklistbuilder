import React, { Component } from "react";

const renderUnique = () => {
    return (
        <div>
            <form className="formInput">
                <h2>Check any of the following that are true about this grant:</h2>
                <input type="checkbox" name="unique" value="multiPI" />Multiple PIs
            <input type="checkbox" name="unique" value="lotsamoney" />More than $500,000 in direct costs
            <input type="checkbox" name="unique" value="consortium" />Consortium <br />
            <input type="checkbox" name="unique" value="multiSite" />Multi-site study
            <input type="checkbox" name="unique" value="intlCollab" />International Collaborator
            <input type="checkbox" name="unique" value="selectAgents" />Select agents involved <br />
            <input type="checkbox" name="unique" value="fdaReg" />FDA regulated
            <input type="checkbox" name="unique" value="enviro" />Real or Perceived impact on environment
            <input type="checkbox" name="unique" value="verteb" />Vertebrate animals involved
            </form>
        </div>
    )
}

export default renderUnique