import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import {render} from 'react-dom';
import MyApp from './components/MyApp';
import {BrowserRouter as Router} from "react-router-dom";

render(
    <Router>
        <MyApp/>
    </Router>,
    document.getElementById("root")
);
