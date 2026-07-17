import React from "react";

const StudentInfo = ({ students }) => {
  return (
    <div className="cards">
      {students.map((student) => (
        <div className="card" key={student.id}>
          <div className="profile">
            {student.name.charAt(0)}
          </div>

          <h2>{student.name}</h2>

          <p>
            <strong> Course:-</strong><br />
            {student.course}
          </p>

          <p>
            <strong> Grid No:-</strong><br />
            {student.gridNo}
          </p>

          <p>
            <strong> Email:-</strong><br />
            {student.email}
          </p>

          <p>
            <strong> Phone:-</strong><br />
            {student.phone}
          </p>

          <div className="skills">
            {student.skills.map((skill, index) => (
              <span key={index}>{skill}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StudentInfo;