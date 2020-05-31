/* imports */
import React, { Component, useReducer } from 'react';
import axios from 'axios';
import Select from 'react-select';
import '../css/secondPage.css';

const customStyles = {
    control: base => ({

        ...base,
        borderRadius: 30,

        borderColor: "black",


    }),


};


{ /* component of UserComponent for showing user's form and send imformations to backend*/ }
export default class UserComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nameField: '',
            valueNameField: '',
            numberField: '',
            valueNumberField: '',
            dateField: '',
            valueDateField: '',
            selectText: '',
            selectedOptionText: '',
            selectLocation: '',
            selectedOptionLocation: '',
        };

    }

    handleSubmit = e => {
        e.preventDefault();

        const {
            nameField,
            valueNameField,
            numberField,
            valueNumberField,
            dateField,
            valueDateField,
            selectText,
            selectedOptionText,
            selectLocation,
            selectedOptionLocation
        } = this.state;

        const detailsFormInput = {
            nameField,
            valueNameField,
            numberField,
            valueNumberField,
            dateField,
            valueDateField,
            selectText,
            selectedOptionText,
            selectLocation,
            selectedOptionLocation,
        };

        axios
            .post('http://localhost:3001/getData', detailsFormInput)
            .catch(err => {
                console.error(err);
            });
    };

    /* handleChanges */
    handleChangeNameField(section, event) {
        this.setState({
            [event.target.name]: event.target.value,
            nameField: section,
        });
    }

    handleChangeNumberField(section, event) {
        this.setState({
            [event.target.name]: event.target.value,
            numberField: section,
        });
    }

    handleChangeDateField(section, event) {
        this.setState({
            [event.target.name]: event.target.value,
            dateField: section,
        });
    }

    handleChangeSelectedOptionText(section, e) {
        this.setState({
            selectedOptionText: e.value,
            selectText: section,
        });
    };

    handleChangeSelectedOptionLocation(section, e) {
        this.setState({
            selectedOptionLocation: e.value,
            selectLocation: section,
        });
    };

    render() {
        return ( <
            div >
            <
            div id = "border" >

            {
                this.props.i.map(id => {
                    if (id.type === "Text") {

                        if (id.options != null) {

                            return ( <
                                div >
                                <
                                div id = "section" >
                                <
                                div id = "lables" >
                                <
                                label > { id.title } < /label> <
                                /div> <
                                div id = "selects" >
                                <
                                Select name = "selectedOptionText"
                                onChange = {
                                    (e) => this.handleChangeSelectedOptionText(id.name, e) }
                                options = { id.options }
                                styles = { customStyles }
                                /> <
                                /div> <
                                /div> <
                                /div>
                            )

                        } else {

                            return ( <
                                div >
                                <
                                div id = "section" >
                                <
                                div id = "lables" >
                                <
                                label > { id.title } < /label> <
                                /div> <
                                input type = "text"
                                className = "form-control"
                                name = "valueNameField"
                                placeholder = { id.type }
                                onChange = {
                                    (e) => this.handleChangeNameField(id.name, e) }
                                />

                                <
                                /div> <
                                /div>
                            )

                        }

                    } else if (id.type === "Location") {

                        if (id.options != null) {

                            return ( <
                                div >
                                <
                                div id = "section" >
                                <
                                div id = "lables" >
                                <
                                label > { id.title } < /label> <
                                /div> <
                                div id = "selects" >
                                <
                                Select name = "selectedOptionLocation"
                                onChange = {
                                    (e) => this.handleChangeSelectedOptionLocation(id.name, e) }
                                options = { id.options }
                                styles = { customStyles }
                                /> <
                                /div> <
                                /div> <
                                /div>
                            )

                        } else {

                            return ( <
                                div >
                                <
                                div id = "section" >
                                <
                                div id = "lables" >
                                <
                                label > { id.title } < /label> <
                                /div> <
                                input type = "text"
                                className = "form-control"
                                name = "bookID"
                                placeholder = { id.type }
                                onChange = { this.handleInputChange }
                                /> <
                                /div> <
                                /div>
                            )

                        }

                    } else if (id.type === "Number") {

                        return ( <
                            div >
                            <
                            div id = "section" >
                            <
                            div id = "lables" >
                            <
                            label > { id.title } < /label> <
                            /div> <
                            input type = "number"
                            step = { 0.1 }
                            precision = { 2 }
                            className = "form-control"
                            name = "valueNumberField"
                            placeholder = { id.type }
                            onChange = {
                                (e) => this.handleChangeNumberField(id.name, e) }
                            /> <
                            /div> <
                            /div>
                        )

                    } else if (id.type === "Date") {

                        return ( <
                            div >
                            <
                            div id = "section" >
                            <
                            div id = "lables" >
                            <
                            label > { id.title } < /label> <
                            /div> <
                            input type = "date"
                            className = "form-control"
                            name = "valueDateField"
                            placeholder = { id.type }
                            onChange = {
                                (e) => this.handleChangeDateField(id.name, e) }
                            /> <
                            /div> <
                            /div>
                        )

                    } else {

                        return <h1 > { id.type } < /h1>

                    }

                })
            } <
            /div> <
            div id = "border2" >
            <
            div id = "section" >

            <
            form onSubmit = { this.handleSubmit } >

            <
            div style = {
                { width: '30%' } } >
            <
            button type = "submit"
            class = "button" >
            submit <
            /button> <
            /div>

            <
            /form> <
            /div> <
            /div>

            <
            /div>
        );
    }
}