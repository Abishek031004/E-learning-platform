import { courses } from '../data/courses';

function Dashboard() {
  return (
    <div className="container">
      <h2>Dashboard</h2>
      {courses.map(course => (
        <div key={course.id} className="course-card">
          <h4>{course.title}</h4>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${course.progress}%` }}></div>
          </div>
          <p>{course.progress}% Completed</p>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
