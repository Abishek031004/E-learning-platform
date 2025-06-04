import { Link } from 'react-router-dom';

const courses = [
  { id: 1, title: 'React Basics', description: 'Learn the fundamentals of React.' },
  { id: 2, title: 'JavaScript ES6+', description: 'Modern JavaScript essentials.' },
];

export default function Courses() {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Our Courses</h2>
      {courses.map(course => {
        const completed = localStorage.getItem(`course-${course.id}`) === 'done';
        return (
          <div key={course.id} className="course-card">
            <h3>
              {course.title} {completed && <span style={{ color: 'green' }}>✔</span>}
            </h3>
            <p>{course.description}</p>
            <Link to={`/courses/${course.id}`}>View Course</Link>
          </div>
        );
      })}
    </div>
  );
}
