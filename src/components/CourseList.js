import React from 'react';
import * as propTypes from "prop-types";
import {Link} from "react-router-dom";

function CourseList(props) {
    return (<table className="table">
        <thead>
        <tr>
            <th>Title</th>
            <th>Author ID</th>
            <th>Category</th>
        </tr>
        </thead>
        <tbody>
        {
            props.courses.map(course => {
                return (
                    <tr key={course.id}>
                        <td><Link to={"/course/" + course.slug}>{course.title}</Link>
                        </td>
                        <td>{course.authorId}</td>
                        <td>{course.category}</td>
                    </tr>
                )
                    ;
            })
        }
        </tbody>
    </table>);
}

// Note: propTypes are only for development purpose and not for production.
CourseList.propTypes = {
    // courses: propTypes.array.isRequired
    courses: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.number.isRequired,
            title: propTypes.string.isRequired,
            authorId: propTypes.number.isRequired,
            category: propTypes.string.isRequired,
        })
    ).isRequired
};

export default CourseList;
