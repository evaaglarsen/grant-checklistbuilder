import React, { Component } from "react";

const renderTeam = () => {
    return (
        <div>
            <form>
                <h2>List your team members and fill out the requested information about them.</h2>
                <input type="text" name="teamMember" value="tmName" placeholder="Name" />
                <input type="text" name="teamMember" value="tmRole" placeholder="Role on Project" />
                <input type="text" name="teamMember" value="tmPercent" placeholder="Percentage on Project" />
                <input type="text" name="teamMember" value="tmUniversity" placeholder="Affiliated University" />
            </form>
        </div>
    )
}

export default renderTeam