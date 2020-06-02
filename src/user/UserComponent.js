/* imports */
import React, { Component, useReducer } from 'react';
import '../css/secondPage.css';
import axios from 'axios';
import InputTextField from './InputTextField';
import DropdownSelect from './DropdownSelect';


import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

const customStyles = {
    control: base => ({

        ...base,
        borderRadius: 30,

        borderColor: "black",


    }),


};


{ /* component of UserComponent for showing user's form and send imformations to backend*/ }
export default class UserComponent extends Component {

    state = {
        fields: this.props.idform
    }

    _handleChange = event => {
        this.setState({
            [event.currentTarget.name]: event.currentTarget.value
        });
    }

    submitform = event => {
        const { fields, ...inputFields } = this.state;

        event.preventDefault();

        axios
            .post('http://localhost:3001/getData', inputFields)
            .catch(err => {
                console.error(err);
            })

    }

    render() {
        const { fields } = this.state;

        return ( <
            form onSubmit = { this.submitform } > {
                fields.map(form => {
                    if (form.options != null) {
                        return ( <
                            div >
                            <
                            label > { form.title } < /label> <
                            DropdownSelect name = { form.name }
                            lableName = {
                                form.options.map(i => {
                                    return i.label
                                })
                            }
                            val = {
                                form.options.map(i => {
                                    if (form.type === "Text") {
                                        return i.value
                                    } else {
                                        return i.value.lat + " " + i.value.long
                                    }
                                })
                            }
                            placeholder = { form.title }
                            _handleChange = { this._handleChange }
                            /> <
                            /div>
                        );
                    }
                    if (form.type === "Text") {
                        return ( <
                            div >
                            <
                            label > { form.title } < /label> <
                            InputTextField name = { form.name }
                            placeholder = { form.title }
                            _handleChange = { this._handleChange }
                            /> <
                            /div>
                        );
                    }
                    if (form.type === "Number") {
                        return ( <
                            div >
                            <
                            label > { form.title } < /label> <
                            InputTextField name = { form.name }
                            placeholder = { form.title }
                            _handleChange = { this._handleChange }
                            /> <
                            /div>
                        );
                    }
                    if (form.type === "Date") {
                        return ( <
                            div >
                            <
                            label > { form.title } < /label> <
                            InputTextField name = { form.name }
                            placeholder = { form.title }
                            _handleChange = { this._handleChange }
                            /> <
                            /div>
                        );
                    }
                    if (form.type === "Location") {
                        return ( <
                            div >
                            <
                            label > { form.title } < /label> <
                            InputTextField name = { form.name }
                            placeholder = { form.title }
                            _handleChange = { this._handleChange }
                            /> <
                            /div>
                        );
                    }
                })
            }

            <
            input type = "submit" / >
            <
            /form>
        )

    }
}