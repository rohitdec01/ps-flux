import React from 'react';
import TextInput from "./common/TextInput";
import * as propTypes from "prop-types";

function CourseForm(props) {
    return (
        <form onSubmit={props.onSubmit}>
            <TextInput
                id="title"
                label="Title"
                name="title"
                onChange={props.onChange}
                value={props.course.title}
                error={props.errors.title}/>

            <div className="form-group">
                <label htmlFor="author">Author</label>
                <div className="field">
                    <select
                        id="author"
                        name="authorId"
                        onChange={props.onChange}
                        value={props.course.authorId || ""}
                        className="form-control">
                        <option value=""/>
                        <option value="1">Cory House</option>
                        <option value="2">Scott Allen</option>
                    </select>
                </div>
                {props.errors.authorId && (<div className="alert alert-danger">
                    {props.errors.authorId}</div>)}
            </div>

            <TextInput
                id="category"
                name="category"
                label="Category"
                onChange={props.onChange}
                value={props.course.category}
                error={props.errors.category}/>

            <input type="submit" value="Save" className="btn btn-primary"/>
        </form>
    );
}

CourseForm.propTypes = {
    course: propTypes.object.isRequired,
    onSubmit: propTypes.func.isRequired,
    onChange: propTypes.func.isRequired,
    errors: propTypes.object.isRequired,
};

export default CourseForm;
