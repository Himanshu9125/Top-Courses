import { useEffect, useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/navbar'
import { apiURL, filterdata } from './data'
import Filter from './component/Filter'
import { Cards } from './component/Cards'
import { toast } from 'react-toastify'
import Footer from './component/footer'

function App() {
  const [courses, setCourses] = useState(null);
  const [courseCategory, setCourseCategory] = useState(filterdata[0].title);
  async function fetchData() {
    try {
      const res = await fetch(apiURL);
      const output = await res.json();
      setCourses(output.data);
    } catch (error) {
      toast.error("Something Went wrong");
    }
  }
  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div className="APP">
      <div ><Navbar /></div>
      <div className='Filter'>
        <Filter
          filterdata={filterdata}
          courseCategory={courseCategory}
          setCourseCategory={setCourseCategory} />
      </div>
      /<Cards courses={courses} category={courseCategory} />
      <Footer />
    </div>
  );
}

export default App;





