import React from 'react';
import { Link} from "react-router-dom";

function Homepage() {
    return (
        <div className="jumbotron">
            <h1>Pluralssight Administration</h1>
            <p>React, FLUX, React router for ultra responsive web app.</p>
            <Link to="about" className="btn btn-primary">About</Link>
        </div>
    );
}

export default Homepage;
