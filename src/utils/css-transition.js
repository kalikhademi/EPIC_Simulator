import React from "react";
import { CSSTransitionGroup } from "react-transition-group";

export default elem => {
    return (
        <CSSTransitionGroup
            transitionName="fade"
            transitionAppear={true}
            transitionEnterTimeout={800}
            transitionAppearTimeout={500}
            transitionLeaveTimeout={500}
        >
            {elem}
        </CSSTransitionGroup>
    );
};
