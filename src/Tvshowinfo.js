import React from 'react';
import { Link } from 'react-router-dom'

export default function Tvshowinfo() {
    return (
        <div>
            <h1> Here are some details about the show.</h1>
            <Link to='/'>Back to homepage</Link>
        </div>
    );
}