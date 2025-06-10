import { useParams } from 'react-router-dom';
import { courses } from '../data/courses';

function CourseDetail() {
  const { id } = useParams();
  const course = courses.find(c => c.id === parseInt(id));

  return (
    <div className="container">
      <h2>{course.title}</h2>
      <iframe
        width="100%" height="360"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="Video"
        allowFullScreen
      ></iframe>
      <p>{course.description}</p>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${course.progress}%` }}></div>
      </div>
      <p>{course.progress}% Completed</p>
    </div>
  );
}

export default CourseDetail;
