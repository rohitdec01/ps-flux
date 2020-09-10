import React from 'react';
import AboutPage from "./AboutPage";
import Homepage from "./HomePage";
import Header from "./common/Header";
import CoursesPage from "./CoursesPage";
import PageNotFound from "./PageNotFound";

import {Redirect, Route, Switch} from 'react-router-dom';
import ManageCoursePage from "./ManageCoursePage";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp() {
    return <div className="container-fluid">
        <ToastContainer autoClose={3000} hideProgressBar/>
        <Header/>
        <Switch>
            <Route path="/" exact component={Homepage}/>
            <Route path="/courses" component={CoursesPage}/>
            <Route path="/about" component={AboutPage}/>
            <Route path="/course/:slug" component={ManageCoursePage}/>
            <Route path="/course" component={ManageCoursePage}/>
            <Redirect from="/about-old" to="/about"></Redirect>
            <Route component={PageNotFound}/>
        </Switch>

    </div>


}

export default MyApp;
