import { useState } from "react"
import { Chart, registerables } from "chart.js"
import { Pie } from "react-chartjs-2"

Chart.register(...registerables)

export default function InstructorChart({ courses }) {
  const [currChart, setCurrChart] = useState("students")

  const generateRandomColors = (numColors) => {
    return Array.from({ length: numColors }, () =>
      `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)})`
    )
  }

  const chartDataStudents = {
    labels: courses.map((course) => course.courseName),
    datasets: [
      {
        data: courses.map((course) => course.totalStudentsEnrolled),
        backgroundColor: generateRandomColors(courses.length),
        borderColor: "#1C1F2E",
        borderWidth: 2,
      },
    ],
  }

  const chartIncomeData = {
    labels: courses.map((course) => course.courseName),
    datasets: [
      {
        data: courses.map((course) => course.totalAmountGenerated),
        backgroundColor: generateRandomColors(courses.length),
        borderColor: "#1C1F2E",
        borderWidth: 2,
      },
    ],
  }

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#CBD5E1", // text-slate-300
          font: {
            size: 12,
            weight: "500",
          },
        },
      },
    },
  }

  return (
    <div className="flex flex-1 flex-col rounded-2xl bg-richblack-800 p-6 shadow-lg">
      <div className="flex items-center justify-between">
        <p className="text-lg font-bold text-richblack-5">Visualize</p>
        <div className="flex gap-x-2">
          {["students", "income"].map((type) => (
            <button
              key={type}
              onClick={() => setCurrChart(type)}
              className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-all duration-200
                ${
                  currChart === type
                    ? "bg-yellow-50 text-black"
                    : "text-yellow-50 border border-yellow-400 hover:bg-yellow-400 hover:text-black"
                }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="relative mt-6 h-[300px] md:h-[400px] lg:h-[450px]">
        <Pie
          data={currChart === "students" ? chartDataStudents : chartIncomeData}
          options={options}
        />
      </div>
    </div>
  )
}
