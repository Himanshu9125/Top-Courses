import React from 'react';
function Filter(props) {
    // Check if filterdata is undefined or null
    let filterdata = props.filterdata;
    let courseCategory = props.courseCategory;
    let setCourseCategory = props.setCourseCategory;
    if (!filterdata) {
        return null; // or any fallback UI you want to render
    }
    function filterhandler(title) {
        setCourseCategory(title);
    }


    return (
        <div className='btn'>
            {filterdata.map((data) => {
                return (
                    <div className='inner-btn' key={data.id} onClick={() => filterhandler(data.title)}>
                        {data.title}
                    </div>
                );
            })}
        </div>
    );
}

export default Filter;
