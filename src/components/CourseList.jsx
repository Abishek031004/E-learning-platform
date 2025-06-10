import { Link } from 'react-router-dom';
import { courses } from '../data/courses';

function CourseList() {
  return (
    <div>
      {courses.map(course => (
        <div key={course.id} className="course-card">
          <h3>{course.title}</h3>
          <p>{course.description}</p>
          <Link to={`/course/${course.id}`} className="button">Start</Link>
        </div>
      ))}
    </div>
  );
}

export default CourseList;
