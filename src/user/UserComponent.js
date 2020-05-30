import React, { Component } from 'react';
import axios from 'axios';
import Select from 'react-select';

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



    /*
  
  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      nameField : "aaaaa"
    });
  };
*/
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

        const book = {
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
            .post('http://localhost:3001/create', book)
            .then(() => console.log('Book Created'))
            .catch(err => {
                console.error(err);
            });
    };

    /**************** handleChanges ******************/
    handleChangeNameField(section, event) {
        console.log(section);
        this.setState({
            [event.target.name]: event.target.value,
            nameField: section,
        });
    }

    handleChangeNumberField(section, event) {
        console.log(section);
        this.setState({
            [event.target.name]: event.target.value,
            numberField: section,
        });
    }

    handleChangeDateField(section, event) {
            console.log(section);
            this.setState({
                [event.target.name]: event.target.value,
                dateField: section,
            });
        }
        /*
           handleChange = selectedOption => {
            this.setState({ selectedOption });
          };*/
    handleChangeSelectedOptionText(section, e) {
        this.setState({
            selectedOptionText: e.value,
            selectText: section,
        });
    };

    handleChangeSelectedOptionLocation(section, e) {
        this.setState({
            //  [e.name]: e.value,
            selectedOptionLocation: e.value,
            selectLocation: section,
        });
    };


    render() {
        return ( <
            div >

            {
                this.props.i.fields.map(id => {

                    if (id.type === "Text") {
                        if (id.options != null) {

                            return ( <
                                div >
                                <
                                label > { id.title } < /label> <
                                Select
                                // value={selectedOption}
                                name = "selectedOptionText"
                                onChange = {
                                    (e) => this.handleChangeSelectedOptionText(id.name, e) }
                                options = { id.options }
                                /> <
                                /div>
                            )

                        } else {
                            return ( <
                                div >
                                <
                                label > { id.title } < /label>

                                <
                                input type = "text"
                                className = "form-control"
                                name = "valueNameField"
                                placeholder = { id.type }
                                onChange = {
                                    (e) => this.handleChangeNameField(id.name, e) }

                                /> <
                                /div>
                            )
                        }
                    } else if (id.type === "Location") {
                        if (id.options != null) {

                            return ( <
                                div >
                                <
                                label > { id.title } < /label> <
                                Select
                                // value={selectedOption}
                                name = "selectedOptionLocation"
                                onChange = {
                                    (e) => this.handleChangeSelectedOptionLocation(id.name, e) }
                                options = { id.options }
                                /> <
                                /div>
                            )

                        } else {
                            return ( <
                                div >
                                <
                                label > { id.title } < /label> <
                                input type = "text"
                                className = "form-control"
                                name = "bookID"
                                placeholder = { id.type }
                                onChange = { this.handleInputChange }
                                /> <
                                /div>
                            )
                        }
                    } else if (id.type === "Number") {
                        return ( <
                            div >
                            <
                            label > { id.title } < /label> <
                            input type = "number"
                            step = { 0.1 }
                            precision = { 2 }
                            className = "form-control"
                            name = "valueNumberField"
                            placeholder = { id.type }
                            onChange = {
                                (e) => this.handleChangeNumberField(id.name, e) }
                            /> <
                            /div>
                        )
                    } else if (id.type === "Date") {
                        return ( <
                            div >
                            <
                            label > { id.title } < /label> <
                            input type = "date"
                            className = "form-control"
                            name = "valueDateField"
                            placeholder = { id.type }
                            onChange = {
                                (e) => this.handleChangeDateField(id.name, e) }
                            /> <
                            /div>
                        )
                    } else {
                        return <h1 > { id.type } < /h1>
                    }
                })
            }

            <
            br / >
            <
            div className = "container" >
            <
            form onSubmit = { this.handleSubmit } >

            <
            div style = {
                { width: '30%' } } >
            <
            button className = "btn btn-success"
            type = "submit" >
            Create <
            /button> <
            /div>

            <
            /form> <
            /div> <
            /div>
        );
    }
}