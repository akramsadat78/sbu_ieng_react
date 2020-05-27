import React from 'react';
import axios from 'axios';

export default class AxiosComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        axios.get("http://localhost:3001/")
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.data.items,
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div > Error: { error.message } < /div>;
        } else if (!isLoaded) {
            return <div > Loading... < /div>;
        } else {
            return ( <
                ul > {
                    items.map(item => ( <
                        li key = { item.title } > { item.title } <
                        /li>
                    ))
                } <
                /ul>
            );
        }
    }
}