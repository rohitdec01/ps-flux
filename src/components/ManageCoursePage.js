import React, {useEffect, useState} from 'react';
import CourseForm from "./CourseForm";
import * as courseApi from "../api/courseApi"
import {toast} from "react-toastify";

const ManageCoursePage = props => {
    const [errors, setErrors] = useState({});

    const [course, setCourse] = useState({
        id: null,
        slug: "",
        title: "",
        autherId: null,
        category: "",
    });

    useEffect(() => {
        const slug = props.match.params.slug; // get id or (slug) from the path for the edit purpose.
        debugger;
        if (slug) {
            courseApi.getCourseBySlug(slug).then(_course => setCourse(_course));
        } else {
            props.history.push("/courses");
        }
    }, [props.match.params.slug]);

    function handleChange({target}) {
        setCourse({
            ...course,
            [target.name]: target.value
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (!formIsValid()) return;
        courseApi.saveCourse(course).then(() => {
            props.history.push("/courses");
            toast.success("Course Saved.")
        });
    }

    function formIsValid() {
        const _error = {};

        if (!course.title) _error.title = "Title is required."
        if (!course.title) _error.authorId = "Author is required."
        if (!course.title) _error.category = "Category is required."

        setErrors(_error);

        return Object.keys(_error).length === 0;
    }

    return (
        <>
            <h2>Manage Course</h2>
            {/*<Prompt when={true} message="Are you sure you want to leave."></Prompt>*/}
            <CourseForm course={course}
                        onChange={handleChange}
                        errors={errors}
                        onSubmit={handleSubmit}/>
        </>
    );
};

export default ManageCoursePage;
