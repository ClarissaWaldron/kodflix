import React from 'react';
import { Link } from 'react-router-dom'
import getImproveTvShowInfo from './Improvetvshowinfo';


export default class Tvshowinfo extends React.Component {

    constructor () {
        super();
        this.state = {
            shows: {}
        };
    }

    componentDidMount() {
        let TvshowinfoId = this.props.match.params.TvshowinfoId;
        let shows = getImproveTvShowInfo().find((shows) => {
            return shows.id === TvshowinfoId;
        });
            this.setState ({
                shows: shows 
            });
        
    }

    render () {
        return (
            <div>
            <h1> {this.state.shows.name}</h1>
            <Link to='/'>Back to homepage</Link>
        </div>
    );
    }
}
