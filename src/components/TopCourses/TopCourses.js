import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { coursesContext } from "../../App";
import "./TopCourses.css";
// -------top courses area---------
const TopCourses = () => {
  // get data from context api
  const [courses] = useContext(coursesContext);
  return (
    <div className=" courses">
      <h1 className="text-center title">Top Courses</h1>
      <hr className="w-25 mx-auto text-danger mb-4" />
      {/* showing four courses */}
      <div className="row g-4">
        {courses.slice(0, 4)?.map((course) => (
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="course">
              <div className="course-img">
                <img className="img-fluid" src={course.image} alt="" />
              </div>
              <div className="text-area mt-2">
                <h1 className="fw-bold">{course.courseName}</h1>
                <hr className="w-50  mx-auto text-danger" />
                <h4>Course Duration : {course.courseDuration}</h4>
                <h4>Admission Fee : {course.admissionFee}</h4>
                <p className="text-secondary mb-4">
                  {course.admissionFeeDetails}
                </p>
                <h6>{course.class}</h6>
                <Link to="/contact">
                  <button className="academy-button fs-5 mt-4">
                    Get Admission Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* button for goinng all courses */}
      <Link to="/courses">
        <button className="all-course-btn">VIEW ALL COURSES</button>
      </Link>
    </div>
  );
};

export default TopCourses;
