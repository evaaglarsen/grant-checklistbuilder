import React, { Component } from "react";

const renderGrantType = (title, description) => {
    // state = {
    //     grantDes: "",
    //     grantType: ""
    // }

    // saveGrantType = (grantDes, grantType) => {
    //     this.setState ({
    //         grantDes: 
    //     })
    // }
    // Trying to figure out how to set state while using drop-down values
    return (
        <div>
            <form className="formInput">
                <h2>How is this grant designated?</h2>
                <div>
                    <input type="radio" name="grantDes" value="r01" checked />R01
                    <input type="radio" name="grantDes" value="r21" />R21
                    <input type="radio" name="grantDes" value="r34" />R34
                    <input type="radio" name="grantDes" value="r34/66" />R34/66
                    <input type="radio" name="grandDes" value="other" />Other
                </div>

                <h2>What type of grant is this?</h2>
                <div>
                    <input type="radio" name="grantType" value="new" checked />New
                    <input type="radio" name="grantType" value="resubmission" />Resubmission
                    <input type="radio" name="grantType" value="renewal" />Renewal
                </div>

                {/* <button onClick={(e) => {
                    e.preventDefault()
                    this.saveGrantType({
                        grantDes: this.state.grantDes,
                        grantType: this.state.grantType
                    })
                }}>Save</button> */}

            </form>
        </div>
    )
}
export default renderGrantType