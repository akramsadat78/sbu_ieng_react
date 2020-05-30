import React, { Component } from 'react';
import UserComponent from '../user/UserComponent';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
export default class UserCom extends Component {

    render() {
        return ( <
            ul > { this.props.i[0].id } {
                this.props.i.map((item, index) => ( <
                    li key = { index } >

                    <
                    Route path = { `/user${index + 1}` }
                    component = {
                        () => < UserComponent i = { item }
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