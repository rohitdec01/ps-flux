import React, {useEffect, useState} from 'react';
import {getCourses} from "../api/courseApi";
import CourseList from "./CourseList";
import { Link } from "react-router-dom";

function CoursesPage() {
    const [courses, setCourses] = useState([]); // useState is a hook for functional components

    useEffect(() => { // useEffect is a hook for functional components.
        getCourses().then(_courses => setCourses(_courses));
    }, []);

    return <>
        <h2>Courses</h2>;
        <Link className="btn btn-primary" to="/course">Add Course</Link>
        <CourseList courses={courses}/>
    </>;
}

export default CoursesPage;