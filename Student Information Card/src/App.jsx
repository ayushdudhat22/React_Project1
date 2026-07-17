import "./App.css";
import StudentInfo from "./Component/Studentcard";

function App() {
  const students = [
    {
      id: 1,
      name: "Tushar",
      course: "Full Stack Developer",
      gridNo: 10859,
      email: "tushar@gmail.com",
      phone: "9727552689",
      skills: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      id: 2,
      name: "Jay",
      course: "Web Developer",
      gridNo: 10779,
      email: "jay@gmail.com",
      phone: "9876543210",
      skills: ["HTML", "CSS", "Bootstrap"],
    },
    {
      id: 3,
      name: "Yash",
      course: "iOS Developer",
      gridNo: 10259,
      email: "yash@gmail.com",
      phone: "9012345678",
      skills: ["Swift", "UI Kit", "Xcode"],
    },
    {
      id: 4,
      name: "Ayush",
      course: "Full Stack Developer",
      gridNo: 10559,
      email: "ayush@gmail.com",
      phone: "9988776655",
      skills: ["React", "JavaScript", "Tailwind CSS"],
    },
    {
      id: 5,
      name: "purvi",
      course: "Graphic Developer",
      gridNo: 10559,
      email: "purvi@gmail.com",
      phone: "9988776655",
      skills: ["React", "JavaScript", "Tailwind CSS"],
    },
    {
      id: 6,
      name: "sakshi",
      course: "Frontend Developer",
      gridNo: 10559,
      email: "sakshi@gmail.com",
      phone: "9988776655",
      skills: ["React", "JavaScript", "Tailwind CSS"],
    },
    {
      id: 7,
      name: "vishva",
      course: "AI/ML Developer",
      gridNo: 10559,
      email: "vishva@gmail.com",
      phone: "9988776655",
      skills: ["React", "JavaScript", "Tailwind CSS"],
    },
  ];

  return (
    <div className="app">
      <h1 className="title">🎓 Student Information Cards</h1>

      <div className="student-container">
        <StudentInfo students={students} />
      </div>
    </div>
  );
}

export default App;