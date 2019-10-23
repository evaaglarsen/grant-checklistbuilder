import React, { Component } from "react";

const renderHuman = () => {
    return (
        <div>
            <form className="formInput">
                <h2>Are human subjects involved?</h2>
                <div>
                    <input type="radio" name="humanSubj" value="yes" checked />Yes
                    <input type="radio" name="humanSubj" value="no" />No
                </div>
                <div>
                    <h2>Does the proposed research involve human specimens and/or data?</h2>
                    <input type="radio" name="humanSpecs" value="yes" checked />Yes
                    <input type="radio" name="humanSpecs" value="no" />No
                </div>
                <div>
                    <h2>Are participants prospectively assigned to an intervention?</h2>
                    <input type="radio" name="asgIntervent" value="yes" checked />Yes
                    <input type="radio" name="asgIntervent" value="no" />No
                </div>
                <div>
                    <h2>Is the study designed to evaluate the effect of the intervention on the participants?</h2>
                    <input type="radio" name="evalEffect" value="yes" checked />Yes
                    <input type="radio" name="evalEffect" value="no" />No
                </div>
                <div>
                    <h2>Is the effect that will be evaluated a health-related biomedical or behavioral outcome?</h2>
                    <input type="radio" name="healthRelated" value="yes" checked />Yes
                    <input type="radio" name="healthRelated" value="no" />No
                </div>
            </form>
        </div>
    )
}

export default renderHuman