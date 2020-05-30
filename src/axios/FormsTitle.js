import React, { Component } from 'react';
/* imports */
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

/* component of FormsTitle for showing titles's link */
export default class FormsTitle extends Component {

    render() {
        return ( <
            ul >

            { /* url and name of titles's link */ } {
                this.props.i.map((item, index) => ( <
                    li key = { index } >
                    <
                    Link to = { `/user${index + 1}` } > { item.title } < /Link> <
                    /li>
                ))
            }

            <
            /ul>
        );
    }
}