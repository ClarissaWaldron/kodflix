import React from 'react';
import { Link } from 'react-router-dom'

export default class Tvshowinfo extends React.Component {

    constructor () {
        super();
        this.state = {
            welcomeMessage: 'Here are some details about the show.'
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState ({
                welcomeMessage: 'Coming soon'
            });
        }, 3000);
    }

    render () {
        return (
            <div>
            <h1> {this.state.welcomeMessage}</h1>
            <Link to='/'>Back to homepage</Link>
        </div>
    );
    }
}
