import React from 'react';
import { Link, Redirect } from 'react-router-dom'
import getImproveTvShowInfo from '../sInfo';
import './tvShowInfoId.css';


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
        if (this.state.show === undefined) {
            return <Redirect to='/not-found' />
        } else {
            return (
                <div className='tvShowInfoId' >
                    <h1 className='showName'>{this.state.show.name}</h1>
                    <div className='homepage'>
                    <div class="animated bounceInLeft">
                    <Link to='/'>Back to homepage</Link>
                    </div>
                    </div>
                    <div className='content'>
                        <div className='text'>
                            {this.state.show.details}
                        </div>
                        <img
                            className='image'
                            src={this.state.show.image}
                            alt={this.state.show.name} />
                    </div>
                    
                    </div> 
            );
        }
    }
}
