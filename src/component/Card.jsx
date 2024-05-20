import React from 'react'
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { toast } from 'react-toastify'

const Card = (props) => {
    let courses = props.course;
    let likecourses = props.likecourse;
    let setLikeCourses = props.setLikeCourse;
    function clickhandler() {
        // logic
        if (likecourses.includes(courses.id)) {
            // pehale se liked hai
            setLikeCourses((prev) => prev.filter((cid) => (cid !== courses.id)));
            toast.warning("liked removed");
        }
        else {
            // pehle se liked nhi hai course
            // insert krna h 
            if (likecourses.length === 0) {
                setLikeCourses([courses.id]);
            }
            else {
                // non-empty phle se
                setLikeCourses((prev) => [...prev, courses.id]);
            }
            toast.success("Liked Sucessfully");
        }
    }


    return (
        <div className='Card'>
            <div >
                <img className='image' src={courses.image.url} />
            </div>
            <div className='like'>
                <button className='fclike' onClick={clickhandler}>
                    {
                        likecourses.includes(courses.id) ?
                            (<FcLike />) :
                            (<FcLikePlaceholder />)

                    }
                </button>
            </div>

            <div className='content'>
                <p className='heading'>{courses.title}</p>
                <p className='explain'>
                    {
                        courses.description.length > 100 ? (courses.description.substr(0, 100)) + "..." : (courses.description)
                    }
                </p>
            </div>
        </div>
    )
}

export default Card;
