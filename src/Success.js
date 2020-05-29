import React from "react";
import SuccessEvent from "./Success-event.js";

class Success extends React.Component {
state = {
    selection: 0
}
render(){
    return (
        <div>
            <div className="success-header">
                Success stories
            </div>

            <div className="success-content">
                <div className="success-timeline">
                    <a className="timeline-event">2020</a>
                    <a className="timeline-event">2019</a>
                    <a className="timeline-event">2018</a>
                    <a className="timeline-event">2013</a>
                    <a className="timeline-event">2011</a>
                    <a className="timeline-event">2009</a>
                    
                </div>
                <div className="success-event">
                    <SuccessEvent>

                    </SuccessEvent>
                </div>
            </div>
        </div>


    )
}
}


export default Success;