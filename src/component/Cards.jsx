import React, { useState } from 'react'
import Card from './Card'
import { toast } from 'react-toastify'
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';

export const Cards = (props) => {
    let courses = props.courses;
    let category = props.category;
    const [likecourse, setLikeCourse] = useState([]);
    if (!courses) {
        return [];
    }
    // return a list of all responses
    const getCourses = () => {
        if (category === "ALL") {
            let allCourses = [];
            Object.values(courses).forEach((courseCategory) => {
                courseCategory.forEach((course) => {
                    allCourses.push(course);
                })
            })
            return allCourses;
        }
        else {
            console.log(category)
            return courses[category];
        }
    }

    return (
        <div className='Cards'>
            {getCourses().map((course) => (
                <Card
                    key={course.id}
                    course={course}
                    likecourse={likecourse}
                    setLikeCourse={setLikeCourse}
                />
            ))}

        </div>

    );


}
