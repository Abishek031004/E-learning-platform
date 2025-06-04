import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const courseVideos = {
  1: 'https://www.youtube.com/embed/bMknfKXIFA8', // React
  2: 'https://www.youtube.com/embed/NCwa_xi0Uuc', // JS
};

export default function CourseDetail() {
  const { id } = useParams();
  const videoSrc = courseVideos[id] || '';
  const [completed, setCompleted] = useState(false);

  // Check localStorage
  useEffect(() => {
    const progress = localStorage.getItem(`course-${id}`);
    setCompleted(progress === 'done');
  }, [id]);

  const markAsCompleted = () => {
    localStorage.setItem(`course-${id}`, 'done');
    setCompleted(true);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Course Detail</h2>
      <iframe
        width="560"
        height="315"
        src={videoSrc}
        title="Course Video"
        frameBorder="0"
        allowFullScreen
      ></iframe>

      <div style={{ marginTop: '1rem' }}>
        {completed ? (
          <p style={{ color: 'green' }}>✅ You have completed this course!</p>
        ) : (
          <button onClick={markAsCompleted}>Mark as Completed</button>
        )}
      </div>
    </div>
  );
}
