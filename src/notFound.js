import React from 'react'
import { Link, Redirect } from 'react-router-dom'


export default function notFound() {
    return (
        <div>
        <h1>This page is not available</h1>
        <Link to='/'>Back to homepage</Link>
        </div>
    )

}

