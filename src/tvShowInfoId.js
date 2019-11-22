import React from 'react';
import { Link } from 'react-router-dom'
import getImproveTvShowInfo from './improveTvShowInfo';


export default class tvShowInfoId extends React.Component {

    constructor() {
        super();
        this.state = {
            show: {}
        };
    }

    componentDidMount() {
        let tvShowInfoId = this.props.match.params.tvShowInfoId;
        let show = getImproveTvShowInfo().find((show) => {
            return show.id === tvShowInfoId;
        });
        this.setState({
            show
        });

    }

    render() {

        return (
            <div>
                <h1>{this.state.show.name}</h1>
                <Link to='/'>Back to homepage</Link>
            </div>
        );

    }
}
