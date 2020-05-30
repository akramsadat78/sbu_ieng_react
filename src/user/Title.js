import React, { Component } from 'react';

import Axios from '../axios/Axios';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
export default class Title extends Component {

    render() {
        return ( <
            ul > {
                this.props.i.map((item, index) => ( <
                    li key = { index } >
                    <
                    Link to = { `/user${index + 1}` } > { item.title } < /Link> <
                    Route path = { `/user${index + 1}` }
                    component = {
                        () => < Axios idf = { item.id }
                        /> 
                    }
                    />

                    <
                    /li>
                ))
            }

            <
            /ul>

        );
    }
}