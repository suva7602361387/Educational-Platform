
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { fetchInstructorCourses } from '../../../../services/operations/courseDetailsAPI'
import { getInstructorData } from '../../../../services/operations/profileAPI'
import InstructorChart from './InstructorChart'
import { Link } from 'react-router-dom'

export default function Instructor() {
  const { token } = useSelector((state) => state.auth)
  const { user } = useSelector((state) => state.profile)

  const [loading, setLoading] = useState(false)
  const [instructorData, setInstructorData] = useState(null)
  const [courses, setCourses] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const [instructorApiData, courseData] = await Promise.all([
          getInstructorData(token),
          fetchInstructorCourses(token),
        ])
        if (instructorApiData.length) setInstructorData(instructorApiData)
        if (courseData) setCourses(courseData)
      } catch (err) {
        console.error('Failed to fetch instructor dashboard data:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [token])

  const totalAmount = instructorData?.reduce(
    (acc, curr) => acc + curr.totalAmountGenerated,
    0
  )

  const totalStudents = instructorData?.reduce(
    (acc, curr) => acc + curr.totalStudentsEnrolled,
    0
  )

  return (
    <div className="space-y-6">
      {/* Welcome Message */}
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-richblack-5">
          Hi {user?.firstName} 👋
        </h1>
        <p className="font-medium text-richblack-200">
          Let's start something new
        </p>
      </div>

      {/* Loading Spinner */}
      {loading ? (
        <div className="spinner" />
      ) : courses.length > 0 ? (
        <>
          {/* Chart and Statistics */}
          <div className="my-4 flex h-[450px] space-x-4">
            {/* Chart Area */}
            {totalAmount > 0 || totalStudents > 0 ? (
              <InstructorChart courses={instructorData} />
            ) : (
              <div className="flex-1 rounded-md bg-richblack-800 p-6">
                <p className="text-lg font-bold text-richblack-5">Visualize</p>
                <p className="mt-4 text-xl font-medium text-richblack-50">
                  Not Enough Data To Visualize
                </p>
              </div>
            )}

            {/* Statistics Panel */}
            <div className="flex min-w-[250px] flex-col rounded-md bg-richblack-800 p-6">
              <p className="text-lg font-bold text-richblack-5">Statistics</p>
              <div className="mt-4 space-y-4">
                <Stat label="Total Courses" value={courses.length} />
                <Stat label="Total Students" value={totalStudents} />
                <Stat label="Total Income" value={`Rs. ${totalAmount}`} />
              </div>
            </div>
          </div>

          {/* Course Preview */}
          <div className="rounded-md bg-richblack-800 p-6">
            <div className="flex items-center justify-between">
              <p className="text-lg font-bold text-richblack-5">Your Courses</p>
              <Link to="/dashboard/my-courses">
                <p className="text-xs font-semibold text-yellow-50">View All</p>
              </Link>
            </div>

            <div className="my-4 flex items-start space-x-6">
              {courses.slice(0, 3).map((course) => (
                <CourseCard key={course._id} course={course} />
              ))}
            </div>
          </div>
        </>
      ) : (
        // Empty State
        <div className="mt-20 rounded-md bg-richblack-800 p-6 py-20">
          <p className="text-center text-2xl font-bold text-richblack-5">
            You have not created any courses yet
          </p>
          <Link to="/dashboard/add-course">
            <p className="mt-1 text-center text-lg font-semibold text-yellow-50">
              Create a course
            </p>
          </Link>
        </div>
      )}
    </div>
  )
}

// Reusable Stat Card Component
const Stat = ({ label, value }) => (
  <div>
    <p className="text-lg text-richblack-200">{label}</p>
    <p className="text-3xl font-semibold text-richblack-50">{value}</p>
  </div>
)

// Reusable Course Card
const CourseCard = ({ course }) => (
  <div className="w-1/3">
    <img
      src={course.thumbnail}
      alt={course.courseName}
      className="h-[201px] w-full rounded-md object-cover"
    />
    <div className="mt-3 w-full">
      <p className="text-sm font-medium text-richblack-50">{course.courseName}</p>
      <div className="mt-1 flex items-center space-x-2 text-xs font-medium text-richblack-300">
        <span>{course.studentsEnrolled.length} students</span>
        <span>|</span>
        <span>Rs. {course.price}</span>
      </div>
    </div>
  </div>
)
